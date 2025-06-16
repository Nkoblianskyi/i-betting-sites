"use client"

import { useState } from "react"
import { Shield, Clock, Gift } from "lucide-react"
import { SiteCard } from "./components/site-card"
import { SidebarBanner } from "./components/sidebar-banner"
import { Top3Modal } from "./components/top3-modal"
import { CookieBanner } from "./components/cookie-banner"
import { InfoSections } from "./components/info-sections"
import { AdvertiserDisclosureModal } from "./components/advertiser-disclosure-modal"
import { TermsModal } from "./components/terms-modal"
import { bettingSites, casinoSites } from "./data/mock-data"
import { InListBanner } from "./components/in-list-banner"

export default function IrishBettingComparison() {
  const [activeTab, setActiveTab] = useState<"betting" | "casino">("betting")
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  const currentSites = activeTab === "betting" ? bettingSites : casinoSites

  return (
    <>
      {/* Main Layout Container */}
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-[1400px]">
        <div className="flex gap-2 sm:gap-4">
          {/* Left Sidebar - visible on tablets+ */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <div className="flex flex-col justify-end h-full">
              <div className="sticky bottom-6">
                <SidebarBanner position="left" />
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="flex-1 min-w-0 max-w-4xl">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-800/95 to-emerald-900/95 backdrop-blur-sm text-white rounded-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 text-center">
              <div className="mb-3 sm:mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  BEST IRISH {activeTab.toUpperCase()} SITES
                </h2>
                <p className="text-emerald-200 text-sm sm:text-base lg:text-lg">
                  UPDATED FOR {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }).toUpperCase()}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm mb-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>100% Legal</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>IE Regulated</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Gift className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Fast Withdrawals</span>
                </div>
              </div>

              {/* Disclaimer Text */}
              <div className="text-xs text-emerald-200/80 leading-relaxed">
                <p className="mb-1">Play responsibly; Wagering and T&Cs apply.</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => setIsAdvertiserModalOpen(true)}
                    className="underline hover:text-white transition-colors"
                  >
                    Advertiser Disclosure
                  </button>
                  <span>|</span>
                  <button
                    onClick={() => setIsTermsModalOpen(true)}
                    className="underline hover:text-white transition-colors"
                  >
                    18+ T&Cs Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Sites List */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              {currentSites.map((site, index) => (
                <div key={site.id}>
                  <SiteCard site={site} rank={index + 1} />

                  {/* In-list banner after 3rd place - visible on all devices */}
                  {index === 2 && (
                    <InListBanner
                      site={currentSites[Math.floor(Math.random() * 3)]}
                      badgeText="SPECIAL OFFER"
                      badgeColor="bg-blue-600"
                    />
                  )}

                  {/* In-list banner after 6th place - visible on all devices */}
                  {index === 5 && (
                    <InListBanner
                      site={currentSites[Math.floor(Math.random() * 3)]}
                      badgeText="EXCLUSIVE DEAL"
                      badgeColor="bg-red-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - visible on tablets+ */}
          <div className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-6">
              <SidebarBanner position="right" />
            </div>
          </div>
        </div>

        {/* Info Sections */}
        <InfoSections />
      </div>

      {/* Modals and Banners */}
      <Top3Modal bettingSites={bettingSites} casinoSites={casinoSites} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
