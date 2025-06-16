import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black bg-opacity-50 text-white">
      <div className="container mx-auto px-4 py-3 sm:py-4 lg:py-6">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            {/* Logo - responsive sizing */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
              <Image src="/logo.png" alt="Irish Flag" width={20} height={20} className="sm:w-6 sm:h-6" />
            </div>

            {/* Text - responsive and colored like Irish flag */}
            <div className="text-center">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide leading-tight">
                <span className="text-green-600">BEST </span>
                <span className="text-white">IRISH </span>
                <span className="text-orange-500">BETTING </span>
                <span className="text-green-600">SITES</span>
              </h1>

            
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
