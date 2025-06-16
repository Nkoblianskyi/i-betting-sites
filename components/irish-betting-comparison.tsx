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

export default function IrishBettingComparison() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      {/* Hero Section - Mobile: transparent with stadium, Desktop: solid gray */}
      <div className="relative text-white h-[180px] sm:h-[220px] lg:h-[290px] flex items-center">
        {/* Mobile background with stadium image */}
        <div
          className="absolute inset-0 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Desktop solid background */}
        <div className="absolute inset-0 hidden lg:block bg-gray-900/50"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2">
            BEST <span className="text-green-400">IRELAND</span> BETTING SITES
          </h1>
          <h2 className="text-sm sm:text-lg lg:text-2xl font-bold mb-3 sm:mb-4 text-white lg:text-gray-200">
            UPDATED FOR JUNE 2025
          </h2>

          {/* Desktop content - hidden on mobile */}
          <div className="hidden lg:block max-w-4xl mx-auto mb-4">
            <p className="text-base mb-2 leading-relaxed">
              Finding betting sites can be hard if you don't know where to look. Fortunately, you came to the right
              place as here we are aware of the need that punters are facing and know exactly how to help them.
            </p>
            <p className="text-base mb-3 leading-relaxed">
              Starting with the most suitable new customer offers for June, specifically hand-picked by us.
            </p>
            <p className="text-xs text-gray-300 mb-4">
              *Each welcome offer may come with separate terms, conditions & wagering requirements. Click "GET BONUS"
              for full details. New Customers Only. Age 18+
            </p>
          </div>

          {/* Feature badges - Different styles for mobile vs desktop */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 sm:gap-2 lg:bg-transparent bg-black/20 backdrop-blur-sm rounded-full lg:rounded-none px-2 py-1 lg:px-0 lg:py-0">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              <span className="text-xs sm:text-sm lg:text-base font-semibold">100% Legal</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 lg:bg-transparent bg-black/20 backdrop-blur-sm rounded-full lg:rounded-none px-2 py-1 lg:px-0 lg:py-0">
              <div className="w-3 h-2 sm:w-4 sm:h-3 lg:w-5 lg:h-4 bg-green-500 rounded-sm"></div>
              <div className="w-3 h-2 sm:w-4 sm:h-3 lg:w-5 lg:h-4 bg-white rounded-sm"></div>
              <div className="w-3 h-2 sm:w-4 sm:h-3 lg:w-5 lg:h-4 bg-orange-500 rounded-sm"></div>
              <span className="text-xs sm:text-sm lg:text-base font-semibold ml-1">IE Regulated</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 lg:bg-transparent bg-black/20 backdrop-blur-sm rounded-full lg:rounded-none px-2 py-1 lg:px-0 lg:py-0">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              <span className="text-xs sm:text-sm lg:text-base font-semibold">Fast Withdrawals</span>
            </div>
          </div>

          {/* Disclaimer - Different styles for mobile vs desktop */}
          <div className="text-xs lg:text-sm text-white/90 lg:text-gray-300">
            {/* Mobile version - compact with background */}
            <div className="lg:hidden bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
              <div className="mb-1">Play responsibly. Wagering and T&Cs apply.</div>
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

            {/* Desktop version - original layout */}
            <div className="hidden lg:block">
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

      {/* Main Layout Container - Reduced top margin */}
      <div className="container mx-auto px-2 sm:px-4 py-5 max-w-[1400px]">
        <div className="flex gap-2 sm:gap-4">
          {/* Left Sidebar - visible on tablets+ */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <div className="flex flex-col justify-end h-full">
              <div className="sticky bottom-6">
                <SidebarBanner position="left" site={bettingSites[1]} />
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="flex-1 min-w-0 max-w-4xl">
            {/* Sites List - Reduced spacing */}
            <div className="space-y-2">
              {bettingSites.map((site: BettingSite, index: number) => (
                <div key={site.id}>
                  <SiteCard site={site} rank={index + 1} />

                  {/* In-list banner after every 3rd element */}
                  {(index + 1) % 3 === 0 && (
                    <div className="mt-2 mb-2">
                      <InListBanner
                        site={bettingSites[Math.floor(Math.random() * 3)]}
                        badgeText={index === 2 ? "SPECIAL OFFER" : "EXCLUSIVE DEAL"}
                        badgeColor={index === 2 ? "bg-blue-600" : "bg-red-600"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - visible on tablets+ */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-6">
              <SidebarBanner position="right" site={bettingSites[0]} />
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <InfoSections />
      </div>

      {/* Modals and Banners */}
      <Top3Modal bettingSites={bettingSites} casinoSites={[]} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
