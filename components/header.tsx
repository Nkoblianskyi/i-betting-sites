import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <div style={{ background: "rgba(0, 0, 0, 0.15)" }}>
      <header className="text-white h-[83px]">
        <div className="container mx-auto px-2 sm:px-4 flex items-center justify-center h-20">
          <Link href="/" className="flex items-center gap-1">
            <div className="w-10 h-10 sm:w-8 sm:h-8 lg:w-14 lg:h-14 bg-transparent rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Irish Flag"
                width={60}
                height={60}
                className="sm:w-16 sm:h-16 lg:w-16 lg:h-16"
              />
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
    </div>
  )
}
