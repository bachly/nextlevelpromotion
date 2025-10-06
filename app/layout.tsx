import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playful - Aceternity UI Pro Template",
  description:
    "A modern and playful template designed for SaaS and marketing websites.",
};

export const viewport: Viewport = {
  themeColor: "#0d72ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white`}>{children}</body>
    </html>
  );
}
