"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { unlockTravel } from "@/actions/travelAuth";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-gray-900 text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 active:scale-[0.98] transition disabled:opacity-60 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
    >
      {pending ? "Unlocking…" : "Unlock"}
    </button>
  );
}

export default function TravelLockForm() {
  const [state, formAction] = useFormState(unlockTravel, null);

  return (
    <div className="max-w-sm mx-auto text-center rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        The trip journal is private. Enter the password to read it.
      </p>
      <form action={formAction} className="flex flex-col items-center gap-3">
        <input
          type="password"
          name="password"
          required
          maxLength={200}
          placeholder="Password"
          autoComplete="current-password"
          className="w-full rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2 text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 transition"
        />
        <SubmitButton />
      </form>
      {state?.error && (
        <p className="text-sm text-red-600 dark:text-red-400 mt-3">
          {state.error}
        </p>
      )}
    </div>
  );
}
