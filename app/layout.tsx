import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Door2Fix – Smartphone & Tablet Repair at Your Doorstep",
  description:
    "Fast, reliable smartphone and tablet repairs delivered right to your door. Screen replacement, battery, charging port, water damage and more. Same-day service available.",
  keywords: [
    "phone repair",
    "doorstep repair",
    "screen replacement",
    "battery replacement",
    "Door2Fix",
  ],
  openGraph: {
    title: "Door2Fix – Smartphone & Tablet Repair at Your Doorstep",
    description:
      "Professional phone repair service that comes to you. Book online, get fixed same day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
