import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khushbu Mandal — Web Developer",
  description:
    "Personal portfolio of Khushbu Mandal — a passionate web developer building modern, responsive applications with Next.js, React, and TypeScript.",
  keywords: [
    "Khushbu Mandal",
    "Web Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Khushbu Mandal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
