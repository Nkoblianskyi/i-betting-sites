"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface SidebarBannerProps {
  position: "left" | "right"
  site: BettingSite
}

const formatVotes = (votes: number) => {
  return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function SidebarBanner({ position, site }: SidebarBannerProps) {
  return (
    <Link href="#" className="block">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] overflow-hidden cursor-pointer">
        <div className="bg-yellow-500 text-black px-3 py-2 text-center font-bold text-sm">Featured Site</div>
        <div className="p-4 text-center">
          <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-10 w-auto mx-auto mb-2" />
          <div className="text-lg font-bold mb-1">{site.name}</div>
          <div className="text-2xl font-bold text-green-600 mb-1">{site.userRating}</div>
          <div className="text-xs text-gray-600 mb-3">({formatVotes(site.votes)} reviews)</div>
          <div className="bg-blue-600 text-white p-2 rounded mb-3 text-sm font-bold">{site.welcomeOffer}</div>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 text-sm transition-colors">
            Claim Bonus
          </Button>
          <div className="text-xs text-gray-500 mt-2">18+ | T&C Apply</div>
        </div>
      </div>
    </Link>
  )
}
