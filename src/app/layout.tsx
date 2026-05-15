import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/Provider";
import { Toaster } from "sonner";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Onaaga – Go Anywhere | Safe Rides Across Nigeria",
  description:
    "Onaaga is Nigeria's most trusted ride-hailing platform. Book safe, affordable rides instantly or register as a driver and start earning today.",
  keywords: "onaaga, ride booking, cab driver, keke, ride-hailing, Nigeria, Lagos, Abuja, Port Harcourt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Preloader />
        <StoreProvider>
          {children}
          <Toaster richColors position="top-right" />
        </StoreProvider>
      </body>
    </html>
  );
}
