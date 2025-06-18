import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

const nunitoSans = Nunito_Sans({ subsets: ["latin"] })

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
      <body className={nunitoSans.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
