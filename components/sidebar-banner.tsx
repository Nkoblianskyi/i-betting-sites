"use client"

import { Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"

interface SidebarBannerProps {
  position: "left" | "right"
  site: BettingSite
}

export function SidebarBanner({ position, site }: SidebarBannerProps) {
  return (
    <div
      className="w-full text-white rounded-lg border-2 border-yellow-500 overflow-hidden shadow-2xl relative"
      style={{
        backgroundImage: `url(/placeholder.svg?height=400&width=300&text=${position === "left" ? "Casino+Background" : "Sports+Background"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/90"></div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-yellow-500 text-black px-3 py-2 flex items-center gap-2">
          <Trophy className="w-4 h-4" />
          <span className="font-bold text-sm">Featured Site</span>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-center mb-3">
            <div className="mb-1">
              <img
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                className="h-10 w-auto mx-auto object-contain bg-white rounded p-1"
              />
            </div>
            <div className="text-lg font-semibold mb-2">{site.name}</div>

            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-lg font-bold">{site.userRating}</span>
            </div>
          </div>

          {/* Offer */}
          <div className="bg-blue-600 text-white p-3 rounded-lg mb-3 text-center">
            <div className="font-bold text-sm">{site.welcomeOffer}</div>
          </div>

          {/* CTA */}
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg text-sm">
            💎 Claim Bonus
          </Button>

          <div className="text-xs text-center text-gray-400 mt-2">18+ | GambleAware.org | T&C Apply</div>
        </div>
      </div>
    </div>
  )
}
