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
      {/* Desktop Layout - FLEXBOX З РІВНИМИ ПРОМІЖКАМИ */}
      <div className="hidden lg:block bg-white rounded-lg border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-[162px] relative overflow-hidden cursor-pointer">
        {/* Badge */}
        {rank <= 3 && (
          <div className="absolute top-0 left-0 bg-green-primary text-white px-3 py-1 rounded-br-lg text-sm font-bold z-10">
            {rank === 1 ? "TOP BRAND" : rank === 2 ? "EXCLUSIVE OFFER" : "TRENDING"}
          </div>
        )}

        {/* Main Content - ЗБАЛАНСОВАНА АДАПТАЦІЯ */}
        <div className="h-[130px] flex items-center px-4 xl:px-6">
          {/* BOOKMAKER - 24% */}
          <div className="flex-[0_0_24%] flex justify-center items-center h-full pr-2 xl:pr-4">
            <img
              src={site.logo || "/placeholder.svg"}
              alt={site.name}
              className="w-[170px] xl:w-[200px] h-[85px] xl:h-[100px] object-contain mt-4"
            />
          </div>

          {/* BONUS OFFER - 22% */}
          <div className="flex-[0_0_22%] text-center flex flex-col justify-center h-full px-2 xl:px-4">
            <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
            <div className="text-lg xl:text-xl font-black text-gray-900 mb-0.5 leading-tight break-words">
              {site.bonus}
            </div>
            <div className="text-lg xl:text-xl font-black text-gray-900 leading-tight break-words">
              {site.welcomeOffer}
            </div>
          </div>

          {/* USER RATING - 19% */}
          <div className="flex-[0_0_19%] text-center flex flex-col justify-center h-full px-2 xl:px-4">
            <div className="text-xs text-black mb-0.5">Rate it! ({formatVotes(site.votes)})</div>
            <div className="flex justify-center gap-0.5 xl:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 xl:w-5 h-4 xl:h-5 ${i < Math.floor(site.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* SCORE - 14% */}
          <div className="flex-[0_0_14%] text-center flex flex-col justify-center h-full px-2 xl:px-4">
            <div
              className="text-[44px] xl:text-[56px] font-bold leading-none"
              style={{
                fontFamily: "Nunito Sans",
                color: "rgba(91, 152, 15, 1)",
              }}
            >
              {site.rating.toFixed(1)}
            </div>
          </div>

          {/* VISIT SITE - 21% */}
          <div className="flex-[0_0_21%] text-center flex flex-col justify-center items-center h-full pl-2 xl:pl-4">
            <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-2 xl:px-4 py-2 rounded-full text-xs xl:text-sm w-[130px] xl:w-[160px] h-[38px] xl:h-[45px] mb-1 transition-colors">
              GET BONUS
            </Button>
            <div className="text-xs text-gray-500 underline">Visit {site.name}</div>
          </div>
        </div>

        {/* Terms */}
        <div className="h-[32px] bg-gray-50 flex items-center justify-center text-xs text-gray-500 px-6 overflow-hidden">
          <div className="truncate text-center leading-tight">
            18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
          </div>
        </div>
      </div>

      {/* Tablet Layout - FLEXBOX З РІВНИМИ ПРОМІЖКАМИ */}
      <div className="hidden md:block lg:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer">
        {/* Badge for top 3 positions */}
        {rank <= 3 && (
          <div className="absolute top-0 left-0 bg-green-primary text-white px-2 py-1 rounded-br-lg text-xs font-bold z-10">
            {rank === 1 ? "TOP BRAND" : rank === 2 ? "EXCLUSIVE OFFER" : "TRENDING"}
          </div>
        )}

        <div className="p-4 pt-6 min-h-[140px]">
          {/* FLEXBOX Layout for Tablet - РІВНІ ПРОМІЖКИ */}
          <div className="flex items-center mb-3">
            {/* Logo - 25% */}
            <div className="flex-[0_0_25%] flex justify-center items-center h-full pr-3">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="w-[160px] h-[80px] object-contain flex-shrink-0"
              />
            </div>

            {/* Bonus - 20% */}
            <div className="flex-[0_0_20%] text-center px-3">
              <div className="text-xs text-gray-600 uppercase font-normal mb-1">Welcome Bonus</div>
              <div className="text-base font-black text-gray-900 mb-0.5 leading-tight break-words">{site.bonus}</div>
              <div className="text-base font-black text-gray-900 leading-tight break-words">{site.welcomeOffer}</div>
            </div>

            {/* Rating - 20% */}
            <div className="flex-[0_0_20%] text-center px-3">
              <div className="text-xs text-gray-600 mb-0.5">({formatVotes(site.votes)})</div>
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < filledStars || (i === filledStars && hasHalfStar)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Score - 15% */}
            <div className="flex-[0_0_15%] text-center px-3">
              <div
                className="text-[40px] font-bold leading-none"
                style={{
                  fontFamily: "Nunito Sans",
                  color: "rgba(91, 152, 15, 1)",
                }}
              >
                {site.rating.toFixed(1)}
              </div>
            </div>

            {/* Button - 20% */}
            <div className="flex-[0_0_20%] text-center pl-3">
              <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-3 py-2 rounded-full text-xs w-[120px] mx-auto transition-colors">
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

      {/* Mobile Layout - БЕЗ ЗМІН */}
      <div className="md:hidden bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden cursor-pointer mt-2">
        {/* Badge for top 3 positions */}
        {rank === 1 && (
          <div className="absolute top-0 left-0 bg-green-primary text-white px-3 py-1 rounded-br-lg text-xs font-bold z-20">
            TOP BRAND
          </div>
        )}
        {rank === 2 && (
          <div className="absolute top-0 left-0 bg-green-primary text-white px-3 py-1 rounded-br-lg text-xs font-bold z-20">
            EXCLUSIVE OFFER
          </div>
        )}
        {rank === 3 && (
          <div className="absolute top-0 left-0 bg-green-primary text-white px-3 py-1 rounded-br-lg text-xs font-bold z-20">
            TRENDING
          </div>
        )}

        {/* Main Content Container */}
        <div className="grid grid-cols-2">
          {/* Left Column: Gray background with logo and rating - FULL HEIGHT */}
          <div className="bg-[rgb(242,242,242)] flex flex-col justify-center items-center pt-4 pb-2 rounded-l-lg">
            {/* Logo */}
            <div className="mb-4">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="h-16 w-auto sm:h-20 object-contain mt-5"
              />
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
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${i < filledStars || (i === filledStars && hasHalfStar)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>

                {/* Rate it text */}
                <div className="text-[9px] sm:text-[10px] text-black">Rate it ({formatVotes(site.votes)})</div>
              </div>

              {/* Right column: Score */}
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl font-bold" style={{ color: "rgba(91, 152, 15, 1)" }}>
                  {site.rating.toFixed(1)}
                </div>
                <div className="text-[9px] sm:text-[10px] text-black">Our Score</div>
              </div>
            </div>
          </div>

          {/* Right Column: Bonus and Button */}
          <div className="flex flex-col justify-between  pb-1 pt-6 px-3">
            {/* Welcome Bonus */}
            <div className="text-center mt-4">
              <div className="text-[9px] sm:text-[10px] text-black uppercase font-normal">WELCOME BONUS</div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{site.bonus}</div>
              <div className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{site.welcomeOffer}</div>
            </div>

            {/* Button */}
            <div className="flex justify-center">
              {/* Mobile Button */}
              <Button className="bg-green-primary hover:bg-green-hover text-white font-bold px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg transition-colors w-full">
                GET BONUS
              </Button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="px-4 pt-3 pb-4 border-t border-gray-100 text-gray-500 text-[10px] sm:text-xs text-center leading-3">
          18+ | Play responsibly | GambleAware.org
        </div>
      </div>
    </Link>
  )
}
