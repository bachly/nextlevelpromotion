import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playful - Aceternity UI Pro Template",
  description:
    "A modern and playful template designed for SaaS and marketing websites.",
  themeColor: "#0a5acc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a5acc" />
      </head>
      <body className={`${inter.className} antialiased bg-white`}>{children}</body>
    </html>
  );
}
