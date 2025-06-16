"use client"

import { Trophy, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarBannerProps {
  position: "left" | "right"
}

export function SidebarBanner({ position }: SidebarBannerProps) {
  // Different content for left and right sidebars
  const leftSideContent = {
    siteName: "BETVICTOR",
    displayName: "BetVictor",
    offer: "Bet €10 → Get €30 in Free Bets",
    rating: "4.9",
  }

  const rightSideContent = {
    siteName: "PADDY POWER",
    displayName: "Paddy Power",
    offer: "Bet €10 → Get €50 in Free Bets",
    rating: "4.8",
  }

  const content = position === "left" ? leftSideContent : rightSideContent

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
                src={
                  position === "left"
                    ? "/placeholder.svg?height=40&width=120&text=BetVictor"
                    : "/placeholder.svg?height=40&width=120&text=Paddy+Power"
                }
                alt={content.displayName}
                className="h-10 w-auto mx-auto object-contain bg-white rounded p-1"
              />
            </div>
            <div className="text-lg font-semibold mb-2">{content.displayName}</div>

            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-lg font-bold">{content.rating}</span>
            </div>
          </div>

          {/* Offer */}
          <div className="bg-blue-600 text-white p-3 rounded-lg mb-3 text-center">
            <div className="font-bold text-sm">{content.offer}</div>
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
