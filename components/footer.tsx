import Link from "next/link"
import Image from "next/image"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        {/* Responsible Gambling Partners */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold mb-4">Responsible Gambling Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link href="https://gambleaware.org/">
              <img src="/gamble.webp" alt="GambleAware" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamcare.org/">
              <img src="/gamecare.svg" alt="GamCare" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gordonmoody.com/">
              <img src="/gordon.png" alt="Gordon Moody" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://gamblersanonymous.org/">
              <img src="/anonymos.avif" alt="Gamblers Anonymous" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
            <Link href="https://egba.org/">
              <img src="/egba.png" alt="EGBA" className="h-8 bg-white rounded px-2 py-1" />
            </Link>
          </div>
        </div>

        {/* Logo and Site Name */}
        <div className="mb-6">
          <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Image src="/logo.png" alt="Irish Flag" width={32} height={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif tracking-wide">
                <span className="text-green-400">IE Best</span> <span className="text-white">Betting</span>{" "}
                <span className="text-orange-400">Sites</span>
              </h3>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            ABOUT US
          </Link>
          <Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">
            COOKIE POLICY
          </Link>
          <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
            PRIVACY POLICY
          </Link>
        </div>


        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 mb-1 text-sm">© 2025 IE Best Betting Sites. All rights reserved.</p>
          <p className="text-red-400 font-bold text-sm">
            18+ | Irish players only | Gambling can be addictive — Play safe.
          </p>
        </div>
      </div>
    </footer>
  )
}
