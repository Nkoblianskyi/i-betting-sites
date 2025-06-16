"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface InListBannerProps {
  site: BettingSite
  badgeText: string
  badgeColor: string
}

export function InListBanner({ site, badgeText, badgeColor }: InListBannerProps) {
  // Ensure consistent rendering between server and client
  const logoSrc = site.logo || "/placeholder.svg"
  const siteName = site.name || ""

  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-3 sm:p-4 lg:p-6 border-2 border-dashed border-yellow-500 my-3 sm:my-4 lg:my-6 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer hover:border-yellow-400">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/bg-2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          {/* Mobile Layout */}
          <div className="block sm:hidden">
            {/* Mobile: Badge at top center */}
            <div className="flex justify-center mb-3">
              <div className={`px-3 py-1 rounded text-white text-xs font-bold ${badgeColor}`}>{badgeText}</div>
            </div>

            {/* Mobile: Logo and Site Name */}
            <div className="flex items-center justify-between mb-3">
              <div className="bg-white p-2 rounded-lg">
                <img src={logoSrc || "/placeholder.svg"} alt={siteName} className="h-8 w-auto" />
              </div>
              <div className="text-right">
                <div className="text-white text-lg font-bold mb-1">{siteName.toUpperCase()}</div>
                <div className="flex items-center justify-end gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Offer */}
            <div className="text-center mb-3">
              <div className="text-white text-xl font-bold mb-2">
                Bet <span className="text-blue-400">€10</span> Get{" "}
                <span className="text-blue-400">€{site.bonus.match(/€(\d+)/)?.[1] || "40"}</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-full transition-colors">
                GET BONUS
              </Button>
            </div>

            {/* Mobile: Terms */}
            <div className="text-xs text-gray-400 text-center">
              18+ GambleAware.org. New customers only. T&Cs apply.
            </div>
          </div>

          {/* Tablet+ Layout */}
          <div className="hidden sm:block">
            {/* Badge positioned at top left to avoid any overlap */}
            <div className="flex justify-start mb-3">
              <div className={`px-3 py-1 rounded text-white text-sm font-bold ${badgeColor}`}>{badgeText}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 lg:gap-6">
                {/* Logo */}
                <div className="bg-white p-3 lg:p-4 rounded-lg flex-shrink-0">
                  <img src={logoSrc || "/placeholder.svg"} alt={siteName} className="h-8 lg:h-12 w-auto" />
                </div>
              </div>

              {/* Offer - Centered */}
              <div className="flex-1 text-center px-4">
                <div className="text-white text-lg lg:text-2xl font-bold mb-2">
                  Bet <span className="text-blue-400">€10</span> Get{" "}
                  <span className="text-blue-400">€{site.bonus.match(/€(\d+)/)?.[1] || "40"}</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 lg:px-8 py-2 lg:py-3 rounded-full transition-colors">
                  GET BONUS
                </Button>
                <div className="text-xs text-gray-400 mt-2">18+ GambleAware.org. New customers only. T&Cs apply.</div>
              </div>

              {/* Site name and rating - Right side */}
              <div className="text-right flex-shrink-0">
                <div className="text-white text-lg lg:text-2xl font-bold mb-2">{siteName.toUpperCase()}</div>
                <div className="flex items-center justify-end gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 lg:w-4 lg:h-4 ${i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
