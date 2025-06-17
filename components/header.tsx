import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <div style={{ background: "rgba(0, 0, 0, 0.15)" }}>
      <header className="text-white h-[83px]">
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-center h-20">
          <Link href="/" className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Image src="/logo.png" alt="Irish Flag" width={16} height={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            <h1 className="text-xs sm:text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">
              <span className="text-green-400">BEST </span>
              <span className="text-white">IRISH </span>
              <span className="text-orange-500">BETTING </span>
              <span className="text-green-400">SITES</span>
            </h1>
          </Link>
        </div>
      </header>
    </div>
  )
}
