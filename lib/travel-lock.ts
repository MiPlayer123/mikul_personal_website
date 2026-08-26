import crypto from "crypto";
import { cookies } from "next/headers";

export const TRAVEL_COOKIE = "travel_unlocked";

export function travelToken(password: string) {
  return crypto
    .createHash("sha256")
    .update(`travel-page:${password}`)
    .digest("hex");
}

// The trips section is public unless TRAVEL_PASSWORD is set (on Vercel or in
// .env.local). Setting it locks the section behind the password form.
export async function isTravelUnlocked() {
  const password = process.env.TRAVEL_PASSWORD;
  if (!password) return true;

  const cookieStore = await cookies();
  return cookieStore.get(TRAVEL_COOKIE)?.value === travelToken(password);
}
