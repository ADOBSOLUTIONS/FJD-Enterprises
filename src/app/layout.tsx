import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FJD Enterprises",
  description:
    "FJD is a trusted provider of comprehensive construction and restoration services, delivering exceptional solutions for residential, commercial, and industrial projects. With years of expertise, the company specializes in building new structures, renovating existing spaces, and restoring properties to their original condition after damage or wear. Construction Projects: From concept to completion, FJD handles the design, planning, and execution of new builds, ensuring superior craftsmanship and attention to detail. Restoration Services: Experts in reviving properties affected by time, weather, or unexpected disasters, the company restores buildings to their former glory while preserving structural integrity and aesthetic appeal. Renovation & Remodeling: Whether it’s modernizing a home, upgrading commercial facilities, or tailoring spaces to specific needs, FJD transforms visions into reality with creative and practical solutions. Services: Design, Renovations, Drywall, Tile Work, Masonry and Cleaning Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
