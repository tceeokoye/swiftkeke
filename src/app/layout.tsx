import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/store/Provider";
import { Toaster } from "sonner";
import Preloader from "@/components/Preloader";
 
export const metadata: Metadata = {
  title: "OnaAga – Go Anywhere | Safe Rides Across Nigeria",
  description:
    "OnaAga is Nigeria's most trusted ride-hailing platform. Book safe, affordable rides instantly or register as a driver and start earning today.",
  keywords: "OnaAga, ride booking, cab driver, keke, ride-hailing, Nigeria, Lagos, Abuja, Port Harcourt",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Preloader />
        <StoreProvider>
          {children}
          <Toaster richColors position="top-right" />
        </StoreProvider>
      </body>
    </html>
  );
}
