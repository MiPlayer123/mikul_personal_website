"use server";

import crypto from "crypto";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { TRAVEL_COOKIE, travelToken } from "@/lib/travel-lock";

export const unlockTravel = async (
  _prevState: { error: string } | null,
  formData: FormData
) => {
  const password = process.env.TRAVEL_PASSWORD;
  if (!password) return null; // no lock configured

  const attempt = formData.get("password");
  if (typeof attempt !== "string" || attempt.length === 0 || attempt.length > 200) {
    return { error: "Enter a password." };
  }

  const attemptToken = Buffer.from(travelToken(attempt));
  const expectedToken = Buffer.from(travelToken(password));
  if (!crypto.timingSafeEqual(attemptToken, expectedToken)) {
    return { error: "Wrong password — try again." };
  }

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
