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
      <div className="w-full overflow-x-hidden">
        <div className="container mx-auto px-1 max-w-[1580px] relative">
          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[160px_1fr_160px] gap-1 lg:gap-2">
            {/* Left Column - Only on screens 1024px+ */}
            <div className="hidden lg:block w-full">
              {/* Empty space for hero height + some list items - опущено на 400px */}
              <div style={{ height: "1800px" }}></div>
              {/* Left Sidebar at middle of list */}
              <div className="w-full max-w-[160px]">
                <SidebarBanner position="left" site={bettingSites[1]} />
              </div>
            </div>

            {/* Center Column - Hero + List */}
            <div className="w-full min-w-0 px-1">
              {/* Hero Section - Desktop - РОЗТЯГНУТИЙ КОНТЕНТ */}
              <div
                className="hidden lg:block relative overflow-hidden text-white mb-2 w-full h-[200px] lg:h-[290px] xl:h-[290px] 2xl:h-[290px]"
                style={{ background: "rgba(0, 0, 0, 0.70)" }}
              >
                <div className="h-full flex flex-col justify-between text-center px-4 lg:px-6 xl:px-8 py-4 lg:py-5 gap-2 mt-3">
                  {/* Верхня частина */}
                  <div className="space-y-1">
                    {/* 1. Заголовок */}
                    <h1 className="text-lg lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold drop-shadow-lg">
                      BEST <span className="text-green-primary">IRELAND</span> BETTING SITES
                    </h1>

                    {/* 2. Підзаголовок з датою */}
                    <h2 className="text-[32px] lg:text-[32px] xl:text-[32px] 2xl:text-[32px] font-bold">
                      UPDATED FOR {getCurrentMonthYear()}
                    </h2>
                  </div>

                  {/* Середня частина */}
                  <div className="space-y-2 lg:space-y-2 mx-auto">
                    {/* 3. Опис */}
                    <p className="text-xs lg:text-xs xl:text-sm 2xl:text-sm leading-tight">
                      Discovering quality betting platforms can be challenging without proper guidance. Luckily, you've
                      found the perfect place as we understand the difficulties that bettors face and know precisely how
                      to assist them.
                    </p>

                    <p className="text-xs lg:text-sm xl:text-sm 2xl:text-sm leading-tight">
                      Beginning with the most appropriate new player promotions, carefully selected by our
                      experts.
                    </p>

                    {/* 4. Дрібний текст про терміни */}
                    <p className="text-[10px] lg:text-xs xl:text-xs 2xl:text-xs text-gray-300">
                      *Each welcome offer may come with separate terms. New Customers Only. Age 18+
                    </p>
                  </div>

                  {/* Нижня частина */}
                  <div className="space-y-2 lg:space-y-4 mt-1">
                    {/* 5. Бейджі */}
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-4 xl:gap-6">
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Shield className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span className="text-[10px] lg:text-xs xl:text-sm font-bold">100% Legal</span>
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <div className="flex gap-0.5">
                          <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-green-primary"></div>
                          <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-white"></div>
                          <div className="w-2 h-1.5 lg:w-3 lg:h-2 bg-orange-500"></div>
                        </div>
                        <span className="text-[10px] lg:text-xs xl:text-sm font-bold">IE Regulated</span>
                      </div>
                      <div className="flex items-center gap-1 lg:gap-2">
                        <Clock className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span className="text-[10px] lg:text-xs xl:text-sm font-bold">Fast Withdrawals</span>
                      </div>
                    </div>

                    {/* 6. Нижній текст */}
                    <div className="text-[9px] lg:text-[10px] xl:text-xs leading-tight text-left">
                      Play responsibly. Wagering and T&Cs apply.
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
              </div>

              {/* Hero Section - Tablet - РОЗТЯГНУТИЙ КОНТЕНТ */}
              <div
                className="hidden md:block lg:hidden h-[160px] md:h-[180px] relative overflow-hidden text-white mb-2 w-full"
                style={{ background: "rgba(0, 0, 0, 0.70)" }}
              >
                <div className="h-full flex flex-col justify-between text-center px-4 md:px-6 py-3">
                  {/* Верхня частина */}
                  <div className="space-y-1">
                    <h1 className="text-xl md:text-2xl font-bold">
                      BEST <span className="text-green-primary">IRELAND</span> BETTING SITES
                    </h1>
                    <h2 className="text-base md:text-lg font-bold">UPDATED FOR {getCurrentMonthYear()}</h2>
                  </div>

                  {/* Середня частина */}
                  <div className="flex justify-center gap-4 md:gap-6">
                    <div className="flex items-center gap-1 md:gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-xs md:text-sm font-bold">100% Legal</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <div className="flex gap-0.5 md:gap-1">
                        <div className="w-2 h-1.5 md:w-3 md:h-2 bg-green-primary"></div>
                        <div className="w-2 h-1.5 md:w-3 md:h-2 bg-white"></div>
                        <div className="w-2 h-1.5 md:w-3 md:h-2 bg-orange-500"></div>
                      </div>
                      <span className="text-xs md:text-sm font-bold">IE Regulated</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                      <Clock className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-xs md:text-sm font-bold">Fast Withdrawals</span>
                    </div>
                  </div>

                  {/* Нижня частина */}
                  <div className="text-[10px] md:text-xs">
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

              {/* Hero Section - Mobile - КОМПАКТНИЙ ДЛЯ 320-460px */}
              <div
                className="md:hidden relative overflow-hidden text-white rounded-lg mb-2 w-full"
                style={{ background: "rgba(0, 0, 0, 0.01)" }}
              >
                <div className="p-2 xs:p-3 sm:p-4 text-center">
                  {/* Заголовки - компактні */}
                  <h1 className="text-sm xs:text-base sm:text-lg font-bold mb-1">
                    BEST <span className="text-green-primary">IRELAND</span> BETTING SITES
                  </h1>
                  <h2 className="text-xs xs:text-sm sm:text-base font-bold mb-2 xs:mb-3 sm:mb-4">
                    UPDATED FOR {getCurrentMonthYear()}
                  </h2>

                  {/* Feature badges - компактні */}
                  <div className="flex justify-center gap-2 xs:gap-3 sm:gap-4 mb-2 xs:mb-3 sm:mb-4">
                    <div className="flex flex-col items-center">
                      <Shield className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mb-0.5 xs:mb-1" />
                      <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold leading-tight">100% Legal</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="flex gap-0.5 mb-0.5 xs:mb-2 mt-0.5">
                        <div className="w-1.5 h-2 xs:w-2 xs:h-3 sm:w-2 sm:h-4 bg-green-primary"></div>
                        <div className="w-1.5 h-2 xs:w-2 xs:h-3 sm:w-2 sm:h-4 bg-white"></div>
                        <div className="w-1.5 h-2 xs:w-2 xs:h-3 sm:w-2 sm:h-4 bg-orange-500"></div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold leading-tight mt-1.5">
                        IE Regulated
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Clock className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 mb-0.5 xs:mb-1" />
                      <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold leading-tight">
                        Fast Withdrawals
                      </span>
                    </div>
                  </div>

                  {/* Bottom text - дуже компактний */}
                  <div className="text-[7px] xs:text-[8px] sm:text-[9px] leading-tight space-y-0.5 xs:space-y-1">
                    <div>Play responsibly. Wagering and T&Cs apply.</div>
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

              <div className="w-full">
                <LiveTicker />
              </div>

              {/* Table Header */}
              <div className="w-full">
                <TableHeader />
              </div>

              {/* Sites List */}
              <div className="space-y-2 w-full">
                {bettingSites.map((site: BettingSite, index: number) => (
                  <div key={site.id} className="w-full">
                    <SiteCard site={site} rank={index + 1} />
                    {(index + 1) % 3 === 0 && (
                      <div className="my-3 w-full">
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

            {/* Right Column - Only on screens 1024px+ */}
            <div className="hidden lg:block w-full">
              {/* Right Sidebar at hero level */}
              <div className="w-full max-w-[160px]">
                <SidebarBanner position="right" site={bettingSites[0]} />
              </div>
            </div>
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
