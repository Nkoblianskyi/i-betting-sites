import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="text-white h-[60px] mb-4">
      <div className="container mx-auto px-2 sm:px-4 flex items-center justify-center h-full">
        <Link href="/" className="flex items-center gap-1">
          <div className="w-10 h-10 sm:w-8 sm:h-8 lg:w-14 lg:h-14 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="sm:w-10 sm:h-12 lg:w-16 lg:h-16" />
          </div>
          <h1 className="text-xs sm:text-lg md:text-xl lg:text-3xl font-bold whitespace-nowrap">
            <span className="text-green-primary">BEST </span>
            <span className="text-white">IRISH </span>
            <span className="text-orange-500">BETTING </span>
            <span className="text-green-primary">SITES</span>
          </h1>
        </Link>
      </div>
    </header>
  )
}
