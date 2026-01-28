"use client";

import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-layout min-h-screen bg-white dark:bg-gray-900">
      {children}
    </div>
  );
}
