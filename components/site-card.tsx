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
        <div className="h-[130px] grid lg:grid-cols-[1fr_2fr_1fr_1fr_1fr] xl:grid-cols-[200px_2fr_180px_120px_180px] gap-2 items-center px-4">
          {/* BOOKMAKER */}
          <div className="flex justify-center items-center h-full">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="lg:w-[140px] lg:h-[80px] xl:w-[160px] xl:h-[90px] 2xl:w-[200px] 2xl:h-[100px] object-contain mt-4"
            />
          </div>

          {/* BONUS OFFER */}
          <div className="text-center flex flex-col justify-center h-full px-2">
            <div className="text-[10px] lg:text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 mb-1 truncate">{site.bonus}</div>
            <div className="lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-900 truncate">
              {site.welcomeOffer}
            </div>
          </div>

          {/* USER RATING */}
          <div className="text-center flex flex-col justify-center h-full">
            <div className="text-[9px] lg:text-xs text-black mb-1 lg:mb-2 truncate">
              Rate it! ({formatVotes(site.votes)})
            </div>
            <div className="flex justify-center gap-0.5 lg:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 ${
                    i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* SCORE */}
          <div className="text-center flex flex-col justify-center h-full">
            <div className="lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-green-600 mt-2">
              {site.rating.toFixed(1)}
            </div>
          </div>

          {/* VISIT SITE */}
          <div className="text-center flex flex-col justify-center items-center h-full">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold lg:px-2 xl:px-3 2xl:px-4 py-1.5 lg:py-2 rounded-full lg:text-sm xl:text-lg 2xl:text-lg w-full lg:max-w-[120px] xl:max-w-[130px] 2xl:max-w-[140px] lg:h-[45px] xl:h-[50px] 2xl:h-[54px] mb-1 transition-colors">
              GET BONUS
            </Button>
            <div className="text-[8px] lg:text-[9px] xl:text-xs text-gray-500 truncate underline">
              Visit {site.name}
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="h-[32px] bg-gray-50 flex items-center justify-center 2xl:text-xs xl:text-[10px] lg:text-[9px] text-gray-500 px-2 lg:px-4 overflow-hidden">
          <div className="truncate text-center leading-tight">
            {/* {site.terms || "18+ | Play responsibly | GambleAware.org | Safe gaming practices apply"} */}
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

        <div className="p-3 pt-6 min-h-[140px]">
          {/* Grid Layout for Tablet */}
          <div className="grid md:grid-cols-[200px_1fr_120px_80px_120px] gap-3 items-center mb-3">
            {/* Logo */}
            <div className="flex justify-center items-center h-full">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[200px] h-[100px] object-contain flex-shrink-0"
              />
            </div>

            {/* Bonus */}
            <div className="text-center">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
              <div className="text-xl font-bold text-gray-900 mb-1 truncate">{site.bonus}</div>
              <div className="text-xl font-bold text-gray-900 truncate">{site.welcomeOffer}</div>
            </div>

            {/* Rating */}
            <div className="text-center">
              <div className="text-xs text-gray-600 mb-1 truncate">({formatVotes(site.votes)})</div>
              <div className="flex justify-center gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
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
            {/* {site.terms && site.terms.length > 80
              ? `${site.terms.substring(0, 80)}...`
              : site.terms || "18+ | Play responsibly | GambleAware.org | Safe gaming practices apply"} */}
            18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer mt-2">
        {/* Badge for top 3 positions */}
        {rank === 1 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-20">
            TOP BRAND
          </div>
        )}
        {rank === 2 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-20">
            EXCLUSIVE OFFER
          </div>
        )}
        {rank === 3 && (
          <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-xs font-bold z-20">
            TRENDING
          </div>
        )}

        {/* Main Content Container */}
        <div className="grid grid-cols-2">
          {/* Left Column: Gray background with logo and rating - FULL HEIGHT */}
          <div className="bg-[rgb(242,242,242)] flex flex-col justify-center items-center pt-4 pb-2 rounded-l-lg">
            {/* Logo */}
            <div className="mb-4">
              <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-20 w-auto object-contain mt-5" />
            </div>

            {/* Bottom section with stars and rating */}
            <div className="grid grid-cols-2 gap-2 w-full pl-4">
              {/* Left column: Stars and Rate it */}
              <div className="flex flex-col items-center justify-center mt-4">
                {/* Stars */}
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Rate it text */}
                <div className="text-[10px] text-black">Rate it ({formatVotes(site.votes)})</div>
              </div>

              {/* Right column: Score */}
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-green-600">{site.rating.toFixed(1)}</div>
                <div className="text-[10px] text-black">Our Score</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bonus and Button */}
          <div className="flex flex-col justify-between  pb-1 pt-6 px-3">
            {/* Welcome Bonus */}
            <div className="text-center mt-4">
              <div className="text-[10px] text-black uppercase font-normal">WELCOME BONUS</div>
              <div className="text-xl font-bold text-gray-900 leading-tight">{site.bonus}</div>
              <div className="text-xl font-bold text-gray-900 leading-tight">{site.welcomeOffer}</div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full text-lg transition-colors w-full">
                GET BONUS
              </Button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="px-4 pt-3 pb-4 border-t border-gray-100 text-gray-500 text-xs text-center leading-3">
          18+ | Play responsibly | GambleAware.org
        </div>
      </div>
    </Link>
  )
}
