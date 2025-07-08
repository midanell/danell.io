import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danell.IO",
  description: "Danell.IO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased`}>
        <header className="flex items-center justify-center p-4">Danell.IO</header>
        <main>{children}</main>
        <footer className="sticky bottom-0 flex w-full items-center justify-center gap-4 bg-white p-8">
          <Link href="/">Home</Link>
          <Link href="/impressum">Imprint</Link>
          <Link href="/contact">Contact</Link>
        </footer>
      </body>
    </html>
  );
}
