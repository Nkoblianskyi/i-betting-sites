"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Terms & Conditions</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">General Terms</h3>
              <p className="text-sm sm:text-base text-gray-700">
                By using IE Best Betting Sites, you agree to comply with and be bound by the following terms and
                conditions. These terms apply to all users of our website and services.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Age Restrictions</h3>
              <p className="text-sm sm:text-base text-gray-700">
                You must be at least 18 years old to use this website. We take age verification seriously and promote
                responsible gambling practices. If you are under 18, please leave this website immediately.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Responsible Gambling</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                We are committed to promoting responsible gambling. Please remember:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Only gamble with money you can afford to lose</li>
                <li>Set time and spending limits before you start</li>
                <li>Never chase your losses</li>
                <li>Take regular breaks from gambling</li>
                <li>Seek help if gambling becomes a problem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Information Accuracy</h3>
              <p className="text-sm sm:text-base text-gray-700">
                While we strive to provide accurate and up-to-date information about betting sites, bonuses, and
                promotions, we cannot guarantee the accuracy of all content. Terms and conditions may change without
                notice.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Third-Party Links</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our website contains links to third-party betting sites. We are not responsible for the content, terms,
                or practices of these external sites. Always review their terms and conditions before use.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Limitation of Liability</h3>
              <p className="text-sm sm:text-base text-gray-700">
                IE Best Betting Sites shall not be liable for any direct, indirect, incidental, or consequential damages
                arising from your use of this website or the information contained herein.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2">Help & Support</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                If you need help with gambling addiction, please contact:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>
                  <strong>GambleAware:</strong> www.gambleaware.org
                </li>
                <li>
                  <strong>GamCare:</strong> www.gamcare.org.uk
                </li>
                <li>
                  <strong>Gamblers Anonymous:</strong> www.gamblersanonymous.org.uk
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ | Wagering and T&Cs apply | Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
