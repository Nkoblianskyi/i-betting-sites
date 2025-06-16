"use client"

import { useState } from "react"
import { Shield, Clock } from "lucide-react"
import { SiteCard } from "./site-card"
import { SidebarBanner } from "./sidebar-banner"
import { Top3Modal } from "./top3-modal"
import { CookieBanner } from "./cookie-banner"
import { InfoSections } from "./info-sections"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { bettingSites } from "../data/mock-data"
import { InListBanner } from "./in-list-banner"
import type { BettingSite } from "../types"
import { TableHeader } from "./table-header"
import { LiveTicker } from "./live-football-ticker"

export default function IrishBettingComparison() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <div className="container mx-auto px-2 max-w-[1500px] relative">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-3">
          {/* Left Column */}
          <div className="hidden lg:block">
            {/* Empty space for hero height + some list items */}
            <div style={{ height: "1200px" }}></div>
            {/* Left Sidebar at middle of list */}
            <SidebarBanner position="left" site={bettingSites[1]} />
          </div>

          {/* Center Column - Hero + List */}
          <div className="px-2">
            {/* Hero Section - Desktop */}
            <div
              className="hidden md:block h-[291px] relative overflow-hidden text-white mb-2"
              style={{ background: "rgba(0, 0, 0, 0.70)" }}
            >
              <div className="h-full flex flex-col justify-center text-center px-2.5">
                <h1 className="text-3xl font-bold mb-2">
                  BEST <span className="text-green-400">IRELAND</span> BETTING SITES
                </h1>
                <h2 className="text-xl font-bold mb-3">UPDATED FOR JUNE 2025</h2>
                <p className="text-sm mb-3 max-w-2xl mx-auto">
                  Finding betting sites can be hard if you don't know where to look. Fortunately, you came to the right
                  place.
                </p>
                <p className="text-xs text-gray-300 mb-4">
                  *Each welcome offer may come with separate terms. New Customers Only. Age 18+
                </p>
                <div className="flex justify-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">100% Legal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-2 bg-green-500"></div>
                      <div className="w-3 h-2 bg-white"></div>
                      <div className="w-3 h-2 bg-orange-500"></div>
                    </div>
                    <span className="text-sm">IE Regulated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Fast Withdrawals</span>
                  </div>
                </div>
                <div className="text-xs">
                  Play responsibly; Wagering and T&Cs apply.
                  <button onClick={() => setIsAdvertiserModalOpen(true)} className="underline ml-1">
                    Advertiser Disclosure
                  </button>
                  <span> | </span>
                  <button onClick={() => setIsTermsModalOpen(true)} className="underline">
                    18+ T&Cs Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Section - Mobile */}
            <div
              className="md:hidden relative overflow-hidden text-white rounded-lg"
              style={{ background: "rgba(0, 0, 0, 0.70)" }}
            >
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold mb-1">
                  BEST <span className="text-green-400">IRELAND</span> BETTING SITES
                </h1>
                <h2 className="text-sm font-bold mb-4">UPDATED FOR JUNE 2025</h2>

                {/* Feature badges */}
                <div className="flex justify-center gap-4 mb-4">
                  <div className="flex flex-col items-center">
                    <Shield className="w-6 h-6 mb-1" />
                    <span className="text-xs">100% Legal</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 mb-1">
                      <div className="w-2 h-4 bg-green-500"></div>
                      <div className="w-2 h-4 bg-white"></div>
                      <div className="w-2 h-4 bg-orange-500"></div>
                    </div>
                    <span className="text-xs">IE Regulated</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-6 h-6 mb-1" />
                    <span className="text-xs">Fast Withdrawals</span>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="flex justify-between items-center text-xs">
                  <span>Play responsibly; Wagering and T&Cs apply.</span>
                  <div>
                    <button onClick={() => setIsAdvertiserModalOpen(true)} className="underline">
                      Advertiser Disclosure
                    </button>
                    <span> | </span>
                    <button onClick={() => setIsTermsModalOpen(true)} className="underline">
                      18+ T&Cs Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <LiveTicker />

            {/* Table Header */}
            <TableHeader />

            {/* Sites List */}
            <div className="space-y-2">
              {bettingSites.map((site: BettingSite, index: number) => (
                <div key={site.id}>
                  <SiteCard site={site} rank={index + 1} />
                  {(index + 1) % 3 === 0 && (
                    <div className="my-3">
                      <InListBanner
                        site={bettingSites[index % bettingSites.length]}
                        badgeText={index === 2 ? "SPECIAL OFFER" : "EXCLUSIVE DEAL"}
                        badgeColor={index === 2 ? "bg-blue-600" : "bg-red-600"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <InfoSections />
          </div>

          {/* Right Column */}
          <div className="hidden lg:block">
            {/* Right Sidebar at hero level */}
            <SidebarBanner position="right" site={bettingSites[0]} />
          </div>
        </div>
      </div>

      <Top3Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
