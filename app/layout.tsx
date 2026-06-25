import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "NexGen Tutor | Online Tutoring New Zealand",
  description:
    "NexGen Tutor — expert online tutoring for Maths (NCEA), English, Chess and more. Personalized one-on-one sessions with experienced educators. First trial free.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400 text-center py-8 text-sm">
          <p className="font-semibold text-white mb-1">NexGen Tutor</p>
          <p>Online tutoring for NZ students · Expert teachers available globally</p>
          <p className="mt-1">© {new Date().getFullYear()} NexGen Tutor Limited. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
