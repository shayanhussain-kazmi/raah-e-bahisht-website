import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { asset, SITE_ORIGIN, SITE_URL } from "@/lib/paths";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Raah-e-Bahisht — A Journey of Faith",
  description:
    "Quran, Hadith, Duas, Ziyarat, Salaat and more — Raah-e-Bahisht brings the daily practice of Shia faith into one quiet, considered companion.",
  openGraph: {
    title: "Raah-e-Bahisht — A Journey of Faith",
    description:
      "Quran, Hadith, Duas, Ziyarat, Salaat and more — one companion for the daily journey of faith.",
    url: siteUrl,
    siteName: "Raah-e-Bahisht",
    images: [asset("/logo/lockup.jpeg")],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raah-e-Bahisht — A Journey of Faith",
    description:
      "Quran, Hadith, Duas, Ziyarat, Salaat and more — one companion for the daily journey of faith.",
    images: [asset("/logo/lockup.jpeg")],
  },
  icons: {
    icon: asset("/logo/app-icon.png"),
    apple: asset("/logo/app-icon.png"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased bg-navy-950 text-ivory">
        {/* Respects the OS-level reduced-motion setting app-wide: transform
            entrances become simple opacity crossfades automatically. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
