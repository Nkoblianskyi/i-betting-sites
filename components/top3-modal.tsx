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
  const [activeTab, setActiveTab] = useState<"betting" | "casino">("betting")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const currentSites = activeTab === "betting" ? bettingSites : casinoSites
  const top3Sites = currentSites.slice(0, 3)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-1 sm:p-2 lg:p-4 overflow-hidden">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white/20 z-10"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </Button>

      <div className="w-full h-full flex flex-col justify-center max-w-xs sm:max-w-2xl lg:max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-2 sm:mb-3 lg:mb-6">
          <h2 className="text-lg sm:text-xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 lg:mb-4">
            Best Betting Sites
          </h2>
        </div>

        {/* Cards - Mobile: Stack, Tablet: 2+1, Desktop: 3 in row */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <div className="space-y-1 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-2 lg:gap-6 w-full max-w-5xl">
            {top3Sites.map((site, index) => (
              <div
                key={site.id}
                className={`bg-white rounded-lg p-1.5 sm:p-2 lg:p-6 text-center relative ${
                  index === 1 ? "border-2 sm:border-4 border-green-500 lg:transform lg:scale-105" : ""
                }`}
              >
                {/* Logo */}
                <div className="mb-1 sm:mb-1.5 lg:mb-4">
                  <img
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    className="h-8 sm:h-12 lg:h-24 w-auto mx-auto object-contain"
                  />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-0.5 sm:gap-1 mb-1 sm:mb-1.5 lg:mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Site Name */}
                <div className="mb-1 sm:mb-1.5 lg:mb-3">
                  <h3 className="text-xs sm:text-sm lg:text-xl font-bold text-gray-800">{site.name}</h3>
                </div>

                {/* Rating and Votes */}
                <div className="mb-1.5 sm:mb-2 lg:mb-4">
                  <div className="text-sm sm:text-base lg:text-2xl font-bold text-emerald-600 mb-0.5">
                    {site.rating}
                  </div>
                  <div className="text-xs sm:text-xs lg:text-sm text-gray-500">({site.votes.toLocaleString()})</div>
                </div>

                {/* Button */}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-1 sm:py-1.5 lg:py-3 text-xs sm:text-xs lg:text-lg rounded-lg mb-1 sm:mb-1.5 lg:mb-3">
                  VISIT SITE
                </Button>

                {/* Terms - Hidden on mobile, minimal on tablet */}
                <div className="hidden sm:block text-xs lg:text-xs text-gray-500 leading-tight">
                  {index === 0 && (
                    <span className="sm:hidden lg:inline">
                      18+ | Play responsibly | GambleAware.org | Safe gaming practices apply
                    </span>
                  )}
                  {index === 0 && <span className="sm:inline lg:hidden">18+ | Play responsibly</span>}

                  {index === 1 && (
                    <span className="sm:hidden lg:inline">
                      18+ | Gambling can be addictive | Seek help if needed | Play within your limits
                    </span>
                  )}
                  {index === 1 && <span className="sm:inline lg:hidden">18+ | Play responsibly</span>}

                  {index === 2 && (
                    <span className="sm:hidden lg:inline">
                      18+ | Set limits before you play | GambleAware.org | Responsible gambling
                    </span>
                  )}
                  {index === 2 && <span className="sm:inline lg:hidden">18+ | Play responsibly</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-1 sm:mt-2 lg:mt-6">
          <p className="text-white text-xs sm:text-xs lg:text-sm">
            18+. T&C's apply. <span className="underline">Begambleaware.org</span>. Play responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
