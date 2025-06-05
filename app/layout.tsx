import type React from "react"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sweet City Machine - Precision Machining Services",
  description: "Professional excavator attachments and precision machining services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
