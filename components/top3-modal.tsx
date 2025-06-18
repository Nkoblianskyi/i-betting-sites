"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function Top3Modal({ bettingSites, casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = bettingSites.slice(0, 3)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-black hover:bg-gray-200 z-10 w-10 h-10 p-0 rounded-full bg-white/90"
      >
        <X className="w-8 h-8 font-bold" />
      </Button>

      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-2 md:mb-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">Best Betting Sites</h2>
        </div>

        {/* Desktop Layout (1024px+) */}
        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4">
          {top3Sites.map((site: BettingSite, index: number) => (
            <div
              key={site.id}
              className={`overflow-hidden ${
                index === 1
                  ? "w-[327px] h-[382px] border-4 border-green-primary shadow-2xl shadow-green-primary/50 rounded-lg relative z-20"
                  : "w-[255px] h-[364px] border-4 border-white rounded-lg relative z-10"
              }`}
            >
              {/* White header section */}
              <div
                className={`bg-white ${index === 1 ? "h-[115px]" : "h-[109px]"} flex items-center justify-center p-4`}
                style={{
                  borderTopLeftRadius: "calc(0.5rem - 4px)",
                  borderTopRightRadius: "calc(0.5rem - 4px)",
                }}
              >
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-18 w-auto object-contain" />
              </div>

              {/* Black content section */}
              <div
                className={`bg-black text-white ${index === 1 ? "h-[267px]" : "h-[255px]"} flex flex-col justify-between p-4 text-center`}
                style={{
                  borderBottomLeftRadius: "calc(0.5rem - 4px)",
                  borderBottomRightRadius: "calc(0.5rem - 4px)",
                }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1  mt-4">
                  {[...Array(index === 2 ? 4 : 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Offer text */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className={` ${index === 1 ? "text-2xl" : "text-xl"} font-bold mb-2`}>{site.bonus}</div>
                  <div className={` ${index === 1 ? "text-2xl" : "text-xl"}`}>{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <Button className="bg-green-primary hover:bg-green-hover text-white font-bold py-2 px-4 rounded-full text-sm w-full mb-6">
                  GET BONUS
                </Button>

                {/* Terms - ONE LINE */}
                <div className="text-xs text-gray-300 truncate px-1">18+ T&Cs apply. BeGambleAware.org</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout (768px - 1023px) - Same as desktop but scaled */}
        <div className="hidden md:flex lg:hidden items-center justify-center gap-0 w-full px-2">
          {top3Sites.map((site: BettingSite, index: number) => (
            <div
              key={site.id}
              className={`overflow-hidden ${
                index === 1
                  ? "w-[240px] h-[280px] border-4 border-green-primary shadow-2xl shadow-green-primary/50 rounded-lg relative z-20"
                  : "w-[180px] h-[260px] border-4 border-white rounded-lg relative z-10"
              }`}
            >
              {/* White header section */}
              <div
                className={`bg-white ${index === 1 ? "h-[80px]" : "h-[75px]"} flex items-center justify-center p-3`}
                style={{
                  borderTopLeftRadius: "calc(0.5rem - 3px)",
                  borderTopRightRadius: "calc(0.5rem - 3px)",
                }}
              >
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 w-auto object-contain" />
              </div>

              {/* Black content section */}
              <div
                className={`bg-black text-white ${index === 1 ? "h-[197px]" : "h-[182px]"} flex flex-col justify-between p-3 text-center`}
                style={{
                  borderBottomLeftRadius: "calc(0.5rem - 3px)",
                  borderBottomRightRadius: "calc(0.5rem - 3px)",
                }}
              >
                {/* Stars */}
                <div className="flex justify-center gap-0.5 mb-2">
                  {[...Array(index === 2 ? 4 : 5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Offer text */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className={` ${index === 1 ? "text-lg" : "text-base"} font-bold mb-1`}>{site.bonus}</div>
                  <div className={` ${index === 1 ? "text-lg" : "text-base"}`}>{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <Button className="bg-green-primary hover:bg-green-hover text-white font-bold py-1.5 px-3 rounded-full text-xs w-full mb-2">
                  GET BONUS
                </Button>

                {/* Terms - ONE LINE */}
                <div className="text-[10px] text-gray-300 truncate px-1">18+ T&Cs apply</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (до 767px) - First card prominent, others swipeable */}
        <div className="md:hidden w-full px-4">
          <div className="overflow-x-auto scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
            <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
              {top3Sites.map((site: BettingSite, index: number) => (
                <div
                  key={site.id}
                  className={`flex-shrink-0 overflow-hidden ${
                    index === 0
                      ? "w-[280px] h-[360px] border-4 border-green-primary rounded-lg relative z-20"
                      : "w-[240px] h-[340px] border-4 border-white rounded-lg relative z-10"
                  }`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  {/* White header section */}
                  <div
                    className={`bg-white ${index === 0 ? "h-[110px]" : "h-[95px]"} flex items-center justify-center p-4`}
                    style={{
                      borderTopLeftRadius: "calc(0.5rem - 4px)",
                      borderTopRightRadius: "calc(0.5rem - 4px)",
                    }}
                  >
                    <img
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      className={`${index === 0 ? "h-16" : "h-12"} w-auto object-contain`}
                    />
                  </div>

                  {/* Black content section */}
                  <div
                    className={`bg-black text-white ${index === 0 ? "h-[270px]" : "h-[245px]"} flex flex-col justify-between p-4 text-center`}
                    style={{
                      borderBottomLeftRadius: "calc(0.5rem - 4px)",
                      borderBottomRightRadius: "calc(0.5rem - 4px)",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mt-4">
                      {[...Array(index === 2 ? 4 : 5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${index === 0 ? "w-5 h-5" : "w-4 h-4"} fill-yellow-400 text-yellow-400`}
                        />
                      ))}
                    </div>

                    {/* Offer text */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className={`${index === 0 ? "text-2xl" : "text-sm"} font-bold mb-2`}>{site.bonus}</div>
                      <div className={`${index === 0 ? "text-2xl" : "text-xs"}`}>{site.welcomeOffer}</div>
                    </div>

                    {/* Button */}
                    <Button
                      className={`bg-green-primary hover:bg-green-hover text-white font-bold ${index === 0 ? "py-2 px-4 text-sm" : "py-1.5 px-3 text-xs"} rounded-full w-full mb-6`}
                    >
                      GET BONUS
                    </Button>

                    {/* Terms - ONE LINE */}
                    <div className={`${index === 0 ? "text-xs" : "text-[10px]"} text-gray-300 truncate px-1`}>
                      18+ T&Cs apply. BeGambleAware.org
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Swipe indicator */}
          <div className="flex justify-center gap-2 mt-2"></div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm">
            18+. T&C's apply. <span className="underline">Begambleaware.org</span>. Play responsibly.
          </p>
        </div>
        <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </div>
    </div>
  )
}
