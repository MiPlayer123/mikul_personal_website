import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel",
  description:
    "States, countries, and national parks Mikul Saravanan has visited.",
  robots: { index: false, follow: false },
};

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
