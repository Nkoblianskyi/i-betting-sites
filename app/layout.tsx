import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IE Best Betting Sites - Top Irish Betting Sites 2025",
  description: "Find the best betting sites in Ireland. Compare bonuses, odds, and features of top Irish bookmakers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
