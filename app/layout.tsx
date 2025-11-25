import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AastanaTech - Full-Stack Software Development",
  description:
    "Professional full-stack development company specializing in React, Next.js, Node.js, and mobile solutions. Building innovative software for the modern web.",
  generator: "v0.app",
  keywords: "full-stack development, React, Next.js, Node.js, React Native, software development, web development",
  openGraph: {
    title: "AastanaTech - Full-Stack Software Development",
    description:
      "Professional full-stack development company specializing in React, Next.js, Node.js, and mobile solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
