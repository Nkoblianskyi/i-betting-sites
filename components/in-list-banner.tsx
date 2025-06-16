"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface HorizontalBannerProps {
  site: BettingSite
  badgeText: string
}

export function HorizontalBanner({ site, badgeText }: HorizontalBannerProps) {
  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className="relative rounded-lg overflow-hidden shadow-lg h-[120px] w-full cursor-pointer hover:shadow-2xl transition-all duration-300"
        style={{
          backgroundImage: "url(/images/horizontal-banner-design.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          {/* Left side - Special Offer text (vertical) */}
          <div className="h-full flex items-center justify-center w-16 bg-blue-600/80">
            <div
              className="text-white font-bold text-xs tracking-wider"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {badgeText}
            </div>
          </div>

          {/* Football image */}
          <div className="flex items-center justify-center w-24 h-full">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">⚽</span>
              </div>
            </div>
          </div>

          {/* Center content - Offer text and button */}
          <div className="flex-1 text-center px-4">
            <div className="text-white text-xl font-bold mb-2">{site.welcomeOffer}</div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full text-sm transition-colors shadow-lg">
              GET BONUS
            </Button>
          </div>

          {/* Right side - Site branding */}
          <div className="text-right pr-6">
            {/* Site name */}
            <div className="text-white text-2xl font-bold mb-1 tracking-wider">{site.name.toUpperCase()}</div>

            {/* Rating dots */}
            <div className="flex justify-end gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-green-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-full">
          <div className="text-white text-xs opacity-90 text-center px-4">
            18+. GambleAware.org. New GB customers only. Min £10 debit card deposit. Place a £10+ bet at Evens (2.0)+ on
            Sports within 7 days. Opt in for £20 in f...
            <span className="text-orange-300 underline ml-1 cursor-pointer">Read More</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
