"use client";

import React from 'react'
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/wild") return null;

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Mikul. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel Hosting. Inspiration from ByteGrad.
      </p>
    </footer>
  )
}
