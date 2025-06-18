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
      return "h-[100px] xs:h-[120px] sm:h-[160px] lg:h-[200px]" // Extra height for long terms
    } else if (termsLength > 100) {
      return "h-[90px] xs:h-[110px] sm:h-[150px] lg:h-[188px]" // Medium height
    }
    return "h-[80px] xs:h-[100px] sm:h-[140px] lg:h-[176px]" // Default height
  }

  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div
        className={`relative rounded-lg overflow-hidden shadow-lg ${getHeight()} w-full cursor-pointer hover:shadow-2xl transition-all duration-300`}
        style={{
          backgroundImage: `url(${site.backgroundImage || "/images/banner-sports-bg.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay for better contrast */}
        <div className="absolute inset-0 bg-black/15"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex">
          {/* Left side - Special Offer text (vertical) - FULL HEIGHT */}
          <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-4 xs:w-5 sm:w-8 bg-blue-600/90">
            <div
              className="text-white font-bold text-[8px] xs:text-[9px] sm:text-xs tracking-wide"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              {badgeText}
            </div>
          </div>

          {/* Center content - Offer text, button and terms - ABSOLUTE CENTER */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 xs:px-8 sm:px-4">
            <div className="text-white text-sm xs:text-base sm:text-2xl lg:text-3xl font-bold mb-1 xs:mb-1.5 sm:mb-3 drop-shadow-lg text-center">
              {site.welcomeOffer}
            </div>
            <Button
              className="text-white font-bold px-2 xs:px-3 sm:px-6 lg:px-8 py-1 xs:py-1.5 sm:py-2 lg:py-2.5 rounded-full text-[10px] xs:text-xs sm:text-sm transition-colors shadow-xl border-2 border-blue-400 mb-1 xs:mb-1.5 sm:mb-2"
              style={{ backgroundColor: "rgba(0, 145, 255, 1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 125, 235, 1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0, 145, 255, 1)")}
            >
              GET BONUS
            </Button>

            {/* Terms directly under button */}
            <div className="text-white text-center drop-shadow-sm leading-tight max-w-[250px] xs:max-w-[300px] sm:max-w-md text-[8px] xs:text-[9px] sm:text-[10px] lg:text-xs px-1">
              <span className="block sm:hidden lg:block">18+ | Play responsibly | GambleAware.org</span>
              <span className="hidden sm:block lg:hidden">
                18+. GambleAware.org. New customers only. Min £10 debit card deposit. T&Cs Apply.
              </span>
            </div>
          </div>

          {/* Right side - Site branding */}
          <div className="absolute right-1 xs:right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2">
            {/* Site name */}
            <div className="text-white text-[10px] xs:text-xs sm:text-xl lg:text-2xl font-bold mb-0.5 xs:mb-1 sm:mb-2 tracking-wider drop-shadow-lg text-right">
              {site.name.toUpperCase()}
            </div>

            {/* Rating dots */}
            <div className="flex justify-end gap-0.5 sm:gap-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-primary shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
