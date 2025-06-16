"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Advertiser Disclosure</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">How We Make Money</h3>
              <p className="text-sm sm:text-base text-gray-700">
                IE Best Betting Sites is an independent comparison website that helps users find the best betting sites
                in Ireland. We may receive compensation when you click on links to betting sites featured on our
                website.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Our Commitment to You</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                This compensation does not influence our rankings, reviews, or recommendations. Our editorial team
                maintains complete independence in evaluating betting sites based on factors such as:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Licensing and regulation</li>
                <li>Security and safety measures</li>
                <li>Betting odds and markets</li>
                <li>Welcome bonuses and promotions</li>
                <li>Customer service quality</li>
                <li>Payment methods and withdrawal speeds</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Transparency</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We believe in complete transparency with our users. All betting sites featured on our platform are
                clearly marked, and we only recommend operators that are licensed and regulated in Ireland or other
                reputable jurisdictions.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Your Responsibility</h3>
              <p className="text-sm sm:text-base text-gray-700">
                While we strive to provide accurate and up-to-date information, it is your responsibility to verify all
                terms and conditions directly with the betting operator before placing any bets. Always gamble
                responsibly and within your means.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ | Irish players only | Gambling can be addictive — Play safe.
          </p>
        </div>
      </div>
    </div>
  )
}
