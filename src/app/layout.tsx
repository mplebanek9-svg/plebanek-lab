import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plebanek Lab - Michigan State University",
  description: "Welcome to the Plebanek Lab in the Departments of Medicine and Physiology at Michigan State University where we study the roles of myeloid cells in cancer. We use transgenic models, functinoal genomics, and single-cell omics to understand how myeloid cells contribute to tumor progression and immune evasion."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
