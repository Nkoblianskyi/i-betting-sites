"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface HorizontalBannerProps {
  site: BettingSite
  badgeText: string
}

export function HorizontalBanner({ site, badgeText }: HorizontalBannerProps) {
  // Calculate dynamic height based on terms text length
  const getHeight = () => {
    const termsLength = site.terms?.length || 0
    if (termsLength > 150) {
      return "h-[140px] sm:h-[160px] lg:h-[200px]" // Extra height for long terms
    } else if (termsLength > 100) {
      return "h-[130px] sm:h-[150px] lg:h-[188px]" // Medium height
    }
    return "h-[120px] sm:h-[140px] lg:h-[176px]" // Default height
  }

  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`relative rounded-lg overflow-hidden shadow-lg ${getHeight()} w-full cursor-pointer hover:shadow-2xl transition-all duration-300`}
        style={{
          backgroundImage: "url(/banner-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay for better contrast */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex">
          {/* Left side - Special Offer text (vertical) - FULL HEIGHT */}
          <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-6 sm:w-8 bg-blue-600/90">
            <div
              className="text-white font-bold text-xs sm:text-xs tracking-wide"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {badgeText}
            </div>
          </div>

          {/* Center content - Offer text, button and terms - ABSOLUTE CENTER */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="text-white text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 drop-shadow-lg">
              {site.welcomeOffer}
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 lg:py-2.5 rounded-full text-xs sm:text-sm transition-colors shadow-xl border-2 border-blue-400 mb-2">
              GET BONUS
            </Button>

            {/* Terms directly under button - 10px max */}
            <div className="text-white text-center drop-shadow-sm leading-tight max-w-md" style={{ fontSize: "10px" }}>
              <span className="block sm:hidden lg:block">
                {site.terms ||
                  "18+. GambleAware.org. New customers only. Min £10 debit card deposit. Place a £10+ bet at Evens (2.0)+ on Sports within 7 days. T&Cs Apply. Gamble Responsibly."}
              </span>
              <span className="hidden sm:block lg:hidden">
                18+. GambleAware.org. New customers only. Min £10 debit card deposit. T&Cs Apply.
              </span>
            </div>
          </div>

          {/* Right side - Site branding */}
          <div className="absolute right-3 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2">
            {/* Site name */}
            <div className="text-white text-sm sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 tracking-wider drop-shadow-lg text-right">
              {site.name.toUpperCase()}
            </div>

            {/* Rating dots */}
            <div className="flex justify-end gap-0.5 sm:gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-400 shadow-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
