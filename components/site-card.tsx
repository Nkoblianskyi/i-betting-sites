"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function SiteCard({ site, rank }: SiteCardProps) {
  return (
    <Link href="#" className="block">
      <div className="bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        {/* Header with rank and rating */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-t-lg">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                #{rank}
              </div>
              <span className="font-semibold text-xs sm:text-sm">USER RATING</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-xs sm:text-sm">SCORE</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-xs sm:text-sm">VISIT SITE</span>
            </div>
          </div>
        </div>

        <div className="p-1.5 sm:p-2">
          {/* Mobile Layout - Stacked */}
          <div className="block sm:hidden">
            {/* Mobile: Logo and Badge Row */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex-shrink-0">
                <img
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  className="h-12 w-24 object-contain bg-gray-50 rounded p-1"
                />
              </div>

              <div className="flex flex-col items-end gap-1">
                {/* Badge for top 3 positions */}
                {rank === 1 && (
                  <div className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">TOP BRAND</div>
                )}
                {rank === 2 && (
                  <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">TOP OFFER</div>
                )}
                {rank === 3 && (
                  <div className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">TRENDING</div>
                )}

                {/* Mobile: Rating */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < Math.floor(site.userRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-lg font-bold text-emerald-600">{site.rating}</div>
                </div>
              </div>
            </div>

            {/* Mobile: Bonus Info */}
            <div className="bg-emerald-100 p-2 rounded mb-2">
              <div className="text-xs text-gray-600">WELCOME BONUS</div>
              <div className="font-bold text-emerald-800 text-sm">{site.welcomeOffer}</div>
            </div>

            {/* Mobile: CTA Button */}
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded text-sm">
              GET BONUS
            </Button>
          </div>

          {/* Tablet+ Layout - Single Row */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-4 justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 relative w-32 lg:w-[200px]">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="h-12 lg:h-16 w-32 lg:w-[200px] object-contain bg-gray-50 rounded p-2"
              />
              {/* Badge for top 3 positions */}
              {rank === 1 && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                  TOP BRAND
                </div>
              )}
              {rank === 2 && (
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                  TOP OFFER
                </div>
              )}
              {rank === 3 && (
                <div className="absolute -top-2 -right-2 bg-green-600 text-white px-1.5 py-0.5 rounded-full text-xs font-bold">
                  TRENDING
                </div>
              )}
            </div>

            {/* Bonus Info */}
            <div className="flex-1 min-w-0 max-w-40 lg:max-w-[200px]">
              <div className="bg-emerald-100 p-2 rounded">
                <div className="text-xs text-gray-600">WELCOME BONUS</div>
                <div className="font-bold text-emerald-800 text-sm truncate">{site.welcomeOffer}</div>
              </div>
            </div>

            {/* Rating */}
            <div className="text-center flex-shrink-0 w-16 lg:w-20">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 lg:w-3 lg:h-3 ${
                      i < Math.floor(site.userRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-base lg:text-lg font-bold text-emerald-600">{site.rating}</div>
              <div className="text-xs text-gray-500 hidden lg:block">({site.votes})</div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0 w-20 lg:w-28">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2 lg:px-4 py-2 rounded text-xs lg:text-sm whitespace-nowrap">
                GET BONUS
              </Button>
              <div className="text-xs text-gray-500 text-center mt-1 hidden lg:block">18+ | T&C Apply</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
