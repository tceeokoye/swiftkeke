import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SwiftKeke – Drive With Us | Rider Onboarding",
  description:
    "Join SwiftKeke as a driver. Register today and start earning. Safe, verified, and rewarding rides across Nigeria.",
  keywords: "keke driver, cab driver, ride-hailing, Nigeria, register, swiftkeke, onboarding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
