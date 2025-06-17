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
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">Best Betting Sites</h2>
        </div>

        {/* Desktop Layout (1024px+) */}
        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4">
          {top3Sites.map((site: BettingSite, index: number) => (
            <div
              key={site.id}
              className={`overflow-hidden ${
                index === 1
                  ? "w-[357px] h-[382px] border-4 border-green-700 shadow-2xl shadow-green-700/50 rounded-lg relative z-20"
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
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
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
                  <div className="text-lg font-bold mb-2">{site.bonus}</div>
                  <div className="text-base">{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <Button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full text-sm w-full mb-6">
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
                  ? "w-[240px] h-[280px] border-3 border-green-700 shadow-2xl shadow-green-700/50 rounded-lg relative z-20"
                  : "w-[180px] h-[260px] border-3 border-white rounded-lg relative z-10"
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
                  <div className="text-sm font-bold mb-1">{site.bonus}</div>
                  <div className="text-xs">{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <Button className="bg-green-700 hover:bg-green-800 text-white font-bold py-1.5 px-3 rounded-full text-xs w-full mb-2">
                  GET BONUS
                </Button>

                {/* Terms - ONE LINE */}
                <div className="text-[10px] text-gray-300 truncate px-1">18+ T&Cs apply</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout (до 767px) - Вертикальний стек */}
        <div className="md:hidden w-full px-3 max-h-[70vh] overflow-y-auto">
          <div className="space-y-3">
            {top3Sites.map((site: BettingSite, index: number) => (
              <div
                key={site.id}
                className={`overflow-hidden w-full ${
                  index === 1
                    ? "h-[120px] border-2 border-green-700 shadow-lg shadow-green-700/30 rounded-lg"
                    : "h-[110px] border-2 border-white rounded-lg"
                }`}
              >
                <div className="flex h-full">
                  {/* Logo section */}
                  <div
                    className={`bg-white ${index === 1 ? "w-[80px]" : "w-[70px]"} flex items-center justify-center p-2`}
                    style={{
                      borderTopLeftRadius: "calc(0.5rem - 2px)",
                      borderBottomLeftRadius: "calc(0.5rem - 2px)",
                    }}
                  >
                    <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-10 w-auto object-contain" />
                  </div>

                  {/* Content section */}
                  <div
                    className="bg-black text-white flex-1 flex flex-col justify-center p-3 text-center"
                    style={{
                      borderTopRightRadius: "calc(0.5rem - 2px)",
                      borderBottomRightRadius: "calc(0.5rem - 2px)",
                    }}
                  >
                    {/* Stars */}
                    <div className="flex justify-center gap-0.5 mb-1">
                      {[...Array(index === 2 ? 4 : 5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Offer text */}
                    <div className="mb-2">
                      <div className="text-xs font-bold">
                        {site.bonus} {site.welcomeOffer}
                      </div>
                    </div>

                    {/* Button */}
                    <Button className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-4 rounded-full text-xs w-full mb-1">
                      GET BONUS
                    </Button>

                    {/* Terms */}
                    <div className="text-[9px] text-gray-300 truncate">18+ T&Cs apply</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm">
            18+. T&C's apply. <span className="underline">Begambleaware.org</span>. Play responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
