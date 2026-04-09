import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wild Mode",
  description: "An experimental showcase of Mikul Saravanan's projects in a unique interactive format.",
  robots: { index: false, follow: false },
};

export default function WildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
