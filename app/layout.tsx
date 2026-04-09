import Header from "@/components/header";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import FloatingDuck from "@/components/floating-duck";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://mikulsaravanan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mikul Saravanan | Engineer, Builder, Founder",
    template: "%s | Mikul Saravanan",
  },
  description:
    "Mikul Saravanan is a Columbia University student, Egleston Scholar, and engineer passionate about robotics, AI, startups, and finance.",
  keywords: [
    "Mikul Saravanan",
    "Columbia University",
    "software engineer",
    "robotics",
    "AI",
    "startups",
    "portfolio",
    "wild",
    "Wagoo",
    "finance",
  ],
  authors: [{ name: "Mikul Saravanan" }],
  creator: "Mikul Saravanan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mikul Saravanan",
    title: "Mikul Saravanan | Engineer, Builder, Founder",
    description:
      "Columbia University student, Egleston Scholar, and engineer passionate about robotics, AI, startups, and finance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikul Saravanan | Engineer, Builder, Founder",
    description:
      "Columbia University student, Egleston Scholar, and engineer passionate about robotics, AI, startups, and finance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mikul Saravanan",
              url: "https://mikulsaravanan.com",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Columbia University",
              },
              knowsAbout: [
                "Robotics",
                "Artificial Intelligence",
                "Software Engineering",
                "Startups",
                "Finance",
              ],
              sameAs: [
                "https://github.com/MiPlayer123",
                "https://linkedin.com/in/mikulsaravanan",
              ],
            }),
          }}
        />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className=" bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <Analytics />
            <SpeedInsights />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
          <FloatingDuck />
        </ThemeContextProvider>

        </body>
    </html>
  );
}
