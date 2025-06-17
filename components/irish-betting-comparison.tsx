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
import type { BettingSite } from "../types"
import { TableHeader } from "./table-header"
import { LiveTicker } from "./live-ticker"
import { HorizontalBanner } from "./horizontal-banner"

export default function IrishBettingComparison() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  // Автоматичне оновлення дати кожного місяця
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  return (
    <>
      <div className="container mx-auto px-2 max-w-[1500px] relative">
        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl-custom:grid-cols-[200px_1fr_200px] gap-3">
          {/* Left Column - Only on screens 1400px+ */}
          <div className="hidden xl-custom:block">
            {/* Empty space for hero height + some list items - опущено на 400px */}
            <div style={{ height: "1800px" }}></div>
            {/* Left Sidebar at middle of list */}
            <SidebarBanner position="left" site={bettingSites[1]} />
          </div>

          {/* Center Column - Hero + List */}
          <div className="px-2">
            {/* Hero Section - Desktop з компактним контентом */}
            <div
              className="hidden lg:block relative overflow-hidden text-white mb-2"
              style={{
                background: "rgba(0, 0, 0, 0.70)",
                height: "clamp(180px, 15vw, 291px)", // Зменшую мінімальну висоту
              }}
            >
              <div className="h-full flex flex-col justify-center text-center px-3 lg:px-4 xl:px-6 2xl:px-8">
                {/* Заголовок - дуже компактний */}
                <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-1 lg:mb-1 xl:mb-2">
                  BEST <span className="text-green-400">IRELAND</span> BETTING SITES
                </h1>

                {/* Підзаголовок */}
                <h2 className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold mb-1 lg:mb-2 xl:mb-2">
                  UPDATED FOR {getCurrentMonthYear()}
                </h2>

                {/* Опис - дуже короткий */}
                <p className="text-xs lg:text-xs xl:text-sm mb-1 lg:mb-2 xl:mb-2 max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto leading-tight">
                  Finding betting sites can be hard if you don't know where to look. Fortunately, you came to the right
                  place.
                </p>

                {/* Дрібний текст */}
                <p className="text-xs lg:text-xs xl:text-xs text-gray-300 mb-1 lg:mb-2 xl:mb-2">
                  *Each welcome offer may come with separate terms. New Customers Only. Age 18+
                </p>

                {/* Бейджі - мінімальні */}
                <div className="flex flex-wrap justify-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 mb-1 lg:mb-2 xl:mb-2">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <Shield className="w-3 h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4" />
                    <span className="text-xs lg:text-xs xl:text-sm">100% Legal</span>
                  </div>
                  <div className="flex items-center gap-1 lg:gap-2">
                    <div className="flex gap-0.5 lg:gap-1">
                      <div className="w-2 h-1.5 lg:w-3 lg:h-2 xl:w-3 xl:h-2 bg-green-500"></div>
                      <div className="w-2 h-1.5 lg:w-3 lg:h-2 xl:w-3 xl:h-2 bg-white"></div>
                      <div className="w-2 h-1.5 lg:w-3 lg:h-2 xl:w-3 xl:h-2 bg-orange-500"></div>
                    </div>
                    <span className="text-xs lg:text-xs xl:text-sm">IE Regulated</span>
                  </div>
                  <div className="flex items-center gap-1 lg:gap-2">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4" />
                    <span className="text-xs lg:text-xs xl:text-sm">Fast Withdrawals</span>
                  </div>
                </div>

                {/* Нижній текст - мінімальний */}
                <div className="text-xs lg:text-xs xl:text-xs leading-tight">
                  Play responsibly; Wagering and T&Cs apply.
                  <button
                    onClick={() => setIsAdvertiserModalOpen(true)}
                    className="underline ml-1 hover:text-green-400 transition-colors"
                  >
                    Advertiser Disclosure
                  </button>
                  <span> | </span>
                  <button
                    onClick={() => setIsTermsModalOpen(true)}
                    className="underline hover:text-green-400 transition-colors"
                  >
                    18+ T&Cs Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Section - Tablet */}
            <div
              className="hidden md:block lg:hidden h-[200px] relative overflow-hidden text-white mb-2"
              style={{ background: "rgba(0, 0, 0, 0.70)" }}
            >
              <div className="h-full flex flex-col justify-center text-center px-4">
                <h1 className="text-2xl font-bold mb-2">
                  BEST <span className="text-green-400">IRELAND</span> BETTING SITES
                </h1>
                <h2 className="text-lg font-bold mb-3">UPDATED FOR {getCurrentMonthYear()}</h2>
                <div className="flex justify-center gap-6 mb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
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
                    <Clock className="w-5 h-5" />
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
              className="md:hidden relative overflow-hidden text-white rounded-lg mb-2"
              style={{ background: "rgba(0, 0, 0, 0.70)" }}
            >
              <div className="p-4 text-center">
                <h1 className="text-lg font-bold mb-1">
                  BEST <span className="text-green-400">IRELAND</span> BETTING SITES
                </h1>
                <h2 className="text-sm font-bold mb-4">UPDATED FOR {getCurrentMonthYear()}</h2>

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
                  <span>Play responsibly. Wagering and T&Cs apply.</span>
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
                      <HorizontalBanner
                        site={bettingSites[index % bettingSites.length]}
                        badgeText={index === 2 ? "SPECIAL OFFER" : "EXCLUSIVE DEAL"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <InfoSections />
          </div>

          {/* Right Column - Only on screens 1400px+ */}
          <div className="hidden xl-custom:block">
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
