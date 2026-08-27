"use server";

import crypto from "crypto";
import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { TRAVEL_COOKIE, travelToken } from "@/lib/travel-lock";

// Best-effort online-guessing throttle: per-IP attempt counts held in module
// memory (per serverless instance), plus a constant delay on every failure.
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const FAIL_DELAY_MS = 750;
const attempts = new Map<string, { count: number; resetAt: number }>();

function pruneAttempts(now: number) {
  attempts.forEach((entry, key) => {
    if (now >= entry.resetAt) attempts.delete(key);
  });
}

async function clientKey() {
  const headerStore = await headers();
  const forwardedFor = headerStore.get("x-forwarded-for") ?? "unknown";
  return forwardedFor.split(",")[0].trim();
}

export const unlockTravel = async (
  _prevState: { error: string } | null,
  formData: FormData
) => {
  const password = process.env.TRAVEL_PASSWORD;
  if (!password) return null; // no lock configured

  const now = Date.now();
  pruneAttempts(now);
  const key = await clientKey();
  const entry = attempts.get(key);
  if (entry && entry.count >= MAX_ATTEMPTS) {
    const minutesLeft = Math.max(1, Math.ceil((entry.resetAt - now) / 60000));
    return {
      error: `Too many attempts — try again in ${minutesLeft} min.`,
    };
  }

  const attempt = formData.get("password");
  if (typeof attempt !== "string" || attempt.length === 0 || attempt.length > 200) {
    return { error: "Enter a password." };
  }

  const attemptToken = Buffer.from(travelToken(attempt));
  const expectedToken = Buffer.from(travelToken(password));
  if (!crypto.timingSafeEqual(attemptToken, expectedToken)) {
    if (entry) {
      entry.count += 1;
    } else {
      attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    }
    await new Promise((resolve) => setTimeout(resolve, FAIL_DELAY_MS));
    return { error: "Wrong password — try again." };
  }

  attempts.delete(key);
  const cookieStore = await cookies();
  cookieStore.set(TRAVEL_COOKIE, travelToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/travel",
  });

  revalidatePath("/travel");
  return null;
};
