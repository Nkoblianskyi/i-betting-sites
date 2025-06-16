"use client"

import { Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function SiteCard({ site, rank }: SiteCardProps) {
  // Calculate number of filled stars based on rating
  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 >= 0.5

  // Fix hydration issue by using consistent number formatting
  const formatVotes = (votes: number) => {
    // Always use the same format to avoid hydration mismatch
    return votes.toLocaleString("en-US")
  }

  return (
    <Link href="#" className="block">
      {/* Mobile Layout (до 768px) */}
      <div className="md:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
        {/* Badge for top 3 positions */}
        {rank === 1 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-10">
            TOP BRAND
          </div>
        )}
        {rank === 2 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-10">
            EXCLUSIVE OFFER
          </div>
        )}
        {rank === 3 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-10">
            TRENDING
          </div>
        )}

        <div className="p-4 pt-8">
          {/* Top Row: Logo and Welcome Bonus */}
          <div className="flex items-start justify-between mb-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 w-auto object-contain" />
            </div>

            {/* Welcome Bonus */}
            <div className="text-center flex-1 ml-4">
              <div className="text-xs text-gray-600 mb-1">WELCOME BONUS</div>
              <div className="text-lg font-bold text-gray-900 mb-1">
                Get Up To €{site.bonus.match(/€(\d+)/)?.[1] || "50"}
              </div>
              <div className="text-sm text-gray-700">In Free Bets</div>
            </div>
          </div>

          {/* Bottom Row: Rating, Score, Button */}
          <div className="flex items-center justify-between">
            {/* Rating Section */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < filledStars || (i === filledStars && hasHalfStar)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-600">Votes ({formatVotes(site.votes)})</div>
            </div>

            {/* Score Section */}
            <div className="text-center mx-4">
              <div className="text-3xl font-bold text-green-600">{site.rating.toFixed(1)}</div>
              <div className="text-xs text-gray-600">Our Score</div>
            </div>

            {/* Button Section */}
            <div className="flex-shrink-0">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full text-sm">
                GET BONUS
              </Button>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-3 pt-3 border-t border-gray-100 text-gray-500 text-xs leading-3">
            18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
          </div>
        </div>
      </div>

      {/* Tablet Layout (768px - 1280px) */}
      <div className="hidden md:block xl:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden">
        {/* Badge for top 3 positions */}
        {rank === 1 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-br-lg text-xs font-bold z-10">
            TOP BRAND
          </div>
        )}
        {rank === 2 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-br-lg text-xs font-bold z-10">
            EXCLUSIVE OFFER
          </div>
        )}
        {rank === 3 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-br-lg text-xs font-bold z-10">
            TRENDING
          </div>
        )}

        {/* Tablet Content - Вертикальний layout для планшета */}
        <div className="p-4 pt-8">
          {/* Top Section: Logo and Site Name */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 w-auto object-contain" />
              <div>
                <div className="text-lg font-bold text-gray-900">{site.name}</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                        }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({formatVotes(site.votes)})</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">{site.rating.toFixed(1)}</div>
              <div className="text-xs text-gray-600">Our Score</div>
            </div>
          </div>

          {/* Middle Section: Bonus Info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="text-center">
              <div className="text-xs text-gray-600 mb-1">WELCOME BONUS</div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                Get Up To €{site.bonus.match(/€(\d+)/)?.[1] || "50"}
              </div>
              <div className="text-sm text-gray-700 mb-3">In Free Bets</div>
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-2 rounded-full">
                GET BONUS
              </Button>
            </div>
          </div>

          {/* Terms */}
          <div className="text-gray-500 text-xs leading-3 text-center">
            18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
          </div>
        </div>
      </div>

      {/* Desktop Layout (1280px+) */}
      <div className="hidden xl:block bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden h-40">
        {/* Badge for top 3 positions */}
        {rank === 1 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-10">
            TOP BRAND
          </div>
        )}
        {rank === 2 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-10">
            EXCLUSIVE OFFER
          </div>
        )}
        {rank === 3 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-10">
            TRENDING
          </div>
        )}

        {/* Main Content - Fixed height minus terms */}
        <div className="h-32 px-4 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="w-40 flex-shrink-0">
            <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 w-auto object-contain" />
          </div>

          {/* Welcome Bonus Section */}
          <div className="flex-1 text-center px-4">
            <div className="text-xs text-gray-600 mb-1">WELCOME BONUS</div>
            <div className="text-lg font-bold text-gray-900 mb-1">
              Get Up To €{site.bonus.match(/€(\d+)/)?.[1] || "50"}
            </div>
            <div className="text-sm text-gray-700">In Free Bets</div>
          </div>

          {/* Rating Section */}
          <div className="text-center px-4">
            <div className="text-xs text-gray-600 mb-1">Rate it! ({formatVotes(site.votes)})</div>
            <div className="flex items-center justify-center gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < filledStars || (i === filledStars && hasHalfStar)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                    }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Info className="w-3 h-3 text-gray-400" />
            </div>
          </div>

          {/* Score Section */}
          <div className="text-center px-4">
            <div className="text-4xl font-bold text-green-600">{site.rating.toFixed(1)}</div>
          </div>

          {/* Button Section */}
          <div className="w-32 flex-shrink-0 text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-full text-sm w-full mb-1">
              GET BONUS
            </Button>
            <div className="text-xs text-gray-500">Visit {site.name}</div>
          </div>
        </div>

        {/* Terms Section - Fixed height */}
        <div className="h-8 bg-gray-50 px-4 flex items-center text-gray-500 text-xs leading-3">
          18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
        </div>
      </div>
    </Link>
  )
}
