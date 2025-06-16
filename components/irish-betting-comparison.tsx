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
import { LiveTicker } from "./live-football-ticker"


export default function IrishBettingComparison() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      {/* Main Layout Container */}
      <div className="container mx-auto px-2 sm:px-4 max-w-[1400px] relative">
        <div className="flex gap-2 sm:gap-4">
          {/* Left Sidebar */}
          <div className="hidden md:block w-48 flex-shrink-0 relative">
            <div className="sticky top-[calc(100vh-400px)]">
              <SidebarBanner position="left" site={bettingSites[1]} />
            </div>
          </div>

          {/* Main Content Column */}
          <div className="flex-1 min-w-0 max-w-4xl mx-auto">
            {/* Hero Section - removed bottom margin */}
            <div>
              <div className="relative text-white overflow-hidden bg-black bg-opacity-60 py-6 md:py-8">
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                    BEST <span className="text-green-400">IRELAND</span> BETTING SITES
                  </h1>
                  <h2 className="text-sm sm:text-base lg:text-xl font-bold mb-4 sm:mb-6 text-white">
                    UPDATED FOR JUNE 2025
                  </h2>

                  {/* Desktop content */}
                  <div className="hidden md:block mb-6">
                    <p className="text-sm lg:text-base mb-4 leading-relaxed max-w-4xl mx-auto">
                      Finding betting sites can be hard if you don't know where to look. Fortunately, you came to the
                      right place as here we are aware of the need that punters are facing and know exactly how to help
                      them.
                    </p>
                    <p className="text-xs text-gray-300 mb-6">
                      *Each welcome offer may come with separate terms, conditions & wagering requirements. Click "GET
                      BONUS" for full details. New Customers Only. Age 18+
                    </p>
                  </div>

                  {/* Feature badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 bg-black/20 md:bg-transparent backdrop-blur-sm rounded-full md:rounded-none px-3 py-2 md:px-0 md:py-0">
                      <Shield className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold">100% Legal</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/20 md:bg-transparent backdrop-blur-sm rounded-full md:rounded-none px-3 py-2 md:px-0 md:py-0">
                      <div className="w-4 h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-4 h-3 bg-white rounded-sm"></div>
                      <div className="w-4 h-3 bg-orange-500 rounded-sm"></div>
                      <span className="text-sm font-semibold ml-1">IE Regulated</span>
                    </div>
                    <div className="flex items-center gap-2 bg-black/20 md:bg-transparent backdrop-blur-sm rounded-full md:rounded-none px-3 py-2 md:px-0 md:py-0">
                      <Clock className="w-4 h-4 text-white" />
                      <span className="text-sm font-semibold">Fast Withdrawals</span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="text-xs text-white/90">
                    <div className="md:hidden bg-black/20 backdrop-blur-sm rounded-full px-3 py-2 inline-block">
                      <div className="mb-1">Play responsibly; Wagering and T&Cs apply.</div>
                      <div>
                        <button
                          onClick={() => setIsAdvertiserModalOpen(true)}
                          className="underline hover:text-white transition-colors"
                        >
                          Advertiser Disclosure
                        </button>
                        <span> | </span>
                        <button
                          onClick={() => setIsTermsModalOpen(true)}
                          className="underline hover:text-white transition-colors"
                        >
                          18+ T&Cs Apply
                        </button>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <span>Play responsibly; Wagering and T&Cs apply. </span>
                      <button
                        onClick={() => setIsAdvertiserModalOpen(true)}
                        className="underline hover:text-white transition-colors"
                      >
                        Advertiser Disclosure
                      </button>
                      <span> | </span>
                      <button
                        onClick={() => setIsTermsModalOpen(true)}
                        className="underline hover:text-white transition-colors"
                      >
                        18+ T&Cs Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Football Ticker - conditionally rendered */}
            <LiveTicker />

            {/* Sites List */}
            <div className="space-y-2 mt-5">
              {bettingSites.map((site: BettingSite, index: number) => (
                <div key={site.id}>
                  <SiteCard site={site} rank={index + 1} />

                  {/* In-list banner after every 3rd element */}
                  {(index + 1) % 3 === 0 && (
                    <div className="mt-2 mb-2">
                      <InListBanner
                        site={bettingSites[index % bettingSites.length]} // Детермінований вибір замість Math.random()
                        badgeText={index === 2 ? "SPECIAL OFFER" : "EXCLUSIVE DEAL"}
                        badgeColor={index === 2 ? "bg-blue-600" : "bg-red-600"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Info Sections */}
            <InfoSections />
          </div>

          {/* Right Sidebar */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-6">
              <SidebarBanner position="right" site={bettingSites[0]} />
            </div>
          </div>
        </div>
      </div>

      {/* Modals and Banners */}
      <Top3Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
