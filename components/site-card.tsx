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
  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const filledStars = Math.floor(site.rating)
  const hasHalfStar = site.rating % 1 !== 0

  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      {/* Desktop Layout */}
      <div className="hidden lg:block bg-white rounded-lg border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-[162px] relative overflow-hidden cursor-pointer">
        {/* Badge */}
        {rank <= 3 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 lg:px-3 py-1 rounded-br-lg text-xs lg:text-sm font-bold z-10">
            {rank === 1 ? "TOP BRAND" : rank === 2 ? "EXCLUSIVE OFFER" : "TRENDING"}
          </div>
        )}

        {/* Main Content - Адаптивна сітка */}
        <div className="h-[130px] grid 2xl:grid-cols-[200px_2fr_180px_120px_180px] xl:grid-cols-[180px_2fr_160px_110px_160px] lg:grid-cols-[140px_2fr_130px_90px_130px] gap-1 lg:gap-2 items-center px-2 lg:px-4">
          {/* BOOKMAKER */}
          <div className="flex justify-center items-center h-full">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="2xl:h-24 xl:h-24 lg:h-24 w-auto object-contain mt-6"
            />
          </div>

          {/* BONUS OFFER */}
          <div className="text-center flex flex-col justify-center h-full px-1 lg:px-2">
            <div className="text-[10px] lg:text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
            <div className="2xl:text-xl xl:text-lg lg:text-sm font-bold text-gray-900 mb-1 truncate">{site.bonus}</div>
            <div className="2xl:text-lg xl:text-base lg:text-xs font-semibold text-gray-800 truncate">
              {site.welcomeOffer}
            </div>
          </div>

          {/* USER RATING */}
          <div className="text-center flex flex-col justify-center h-full">
            <div className="text-[9px] lg:text-xs text-gray-600 mb-1 lg:mb-2 truncate">
              Rate it! ({formatVotes(site.votes)})
            </div>
            <div className="flex justify-center gap-0.5 lg:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 lg:w-4 lg:h-4 ${
                    i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* SCORE */}
          <div className="text-center flex flex-col justify-center h-full">
            <div className="2xl:text-4xl xl:text-3xl lg:text-2xl font-bold text-green-600">
              {site.rating.toFixed(1)}
            </div>
          </div>

          {/* VISIT SITE */}
          <div className="text-center flex flex-col justify-center h-full">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold 2xl:px-4 xl:px-3 lg:px-2 py-1.5 lg:py-2 rounded-full 2xl:text-sm xl:text-xs lg:text-[10px] w-full mb-1 transition-colors">
              GET BONUS
            </Button>
            <div className="text-[9px] lg:text-xs text-gray-500 truncate">Visit {site.name}</div>
          </div>
        </div>

        {/* Terms */}
        <div className="h-[32px] bg-gray-50 flex items-center justify-center 2xl:text-xs xl:text-[10px] lg:text-[9px] text-gray-500 px-2 lg:px-4 overflow-hidden">
          <div className="truncate text-center leading-tight">
            {/* {site.terms && site.terms.length > 100
              ? `${site.terms.substring(0, 100)}...`
              : site.terms || "18+ | Play responsibly | GambleAware.org | Safe gaming practices apply"} */}
              18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer">
        {/* Badge for top 3 positions */}
        {rank <= 3 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-br-lg text-xs font-bold z-10">
            {rank === 1 ? "TOP BRAND" : rank === 2 ? "EXCLUSIVE OFFER" : "TRENDING"}
          </div>
        )}

        <div className="p-3 pt-6">
          {/* Grid Layout for Tablet */}
          <div className="grid grid-cols-[100px_1fr_120px_80px_120px] gap-3 items-center mb-3">
            {/* Logo */}
            <div className="flex justify-center">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
            </div>

            {/* Bonus */}
            <div className="text-center">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
              <div className="text-lg font-bold text-gray-900 mb-1 truncate">{site.bonus}</div>
              <div className="text-sm font-semibold text-gray-800 truncate">{site.welcomeOffer}</div>
            </div>

            {/* Rating */}
            <div className="text-center">
              <div className="text-xs text-gray-600 mb-1 truncate">({formatVotes(site.votes)})</div>
              <div className="flex justify-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < filledStars || (i === filledStars && hasHalfStar)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Score */}
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{site.rating.toFixed(1)}</div>
            </div>

            {/* Button */}
            <div className="text-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-2 rounded-full text-xs w-full transition-colors">
                GET BONUS
              </Button>
            </div>
          </div>

          {/* Terms */}
          <div className="pt-2 border-t border-gray-100 text-gray-500 text-xs text-center leading-3">
            18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer mt-2">
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
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
            </div>

            {/* Welcome Bonus */}
            <div className="text-center flex-1 ml-4">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
              <div className="text-lg font-bold text-gray-900 mb-1">{site.bonus}</div>
              <div className="text-sm font-semibold text-gray-800">{site.welcomeOffer}</div>
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
                    className={`w-3 h-3 ${
                      i < filledStars || (i === filledStars && hasHalfStar)
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
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full text-sm transition-colors">
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
    </Link>
  )
}
