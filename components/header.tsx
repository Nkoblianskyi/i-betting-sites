import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <div style={{ background: "rgba(0, 0, 0, 0.70)" }}>
      <header className="text-white h-[83px]">
        <div className="container mx-auto px-4 flex items-center justify-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="Irish Flag" width={24} height={24} />
            </div>
            <h1 className="text-2xl font-bold">
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
