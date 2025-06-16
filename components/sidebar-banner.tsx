"use client"

import Link from "next/link"
import type { BettingSite } from "../types"

interface SidebarBannerProps {
  position: "left" | "right"
  site: BettingSite
}

export function SidebarBanner({ position, site }: SidebarBannerProps) {
  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-[600px] w-full"
        style={{
          backgroundImage: "url(sidebar-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 text-center text-white">
          {/* Top section */}
          <div className="">
            {/* Site name */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-wider text-white drop-shadow-lg">{site.name.toUpperCase()}</h2>
            </div>

            {/* Rating dots */}
            <div className="flex justify-center gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i < Math.floor(site.rating) ? "bg-green-400" : "bg-green-400"}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="pb-8">
            {/* Offer text */}
            <div className="mb-4">
              <div
                className="text-white font-bold mb-1 drop-shadow-lg"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "22px",
                }}
              >
                {site.welcomeOffer}
              </div>
              <div
                className="text-white font-bold mb-4 drop-shadow-lg"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "22px",
                }}
              >
                {site.bonus}
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="w-full hover:opacity-80 transition-opacity"
              style={{
                display: "flex",
                width: "99.714px",
                height: "24px",
                flexDirection: "column",
                justifyContent: "center",
                flexShrink: 0,
                color: "#FF5100",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "20px",
                background: "transparent",
                border: "none",
                margin: "0 auto",
              }}
            >
              Claim now!
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
