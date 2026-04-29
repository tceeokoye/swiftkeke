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
  title: "Book Ride – Go Anywhere | Safe Rides Across Nigeria",
  description:
    "Book Ride is Nigeria's most trusted ride-hailing platform. Book safe, affordable rides instantly or register as a driver and start earning today.",
  keywords: "book ride, ride booking, cab driver, keke, ride-hailing, Nigeria, Lagos, Abuja, Port Harcourt",
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
