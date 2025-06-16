"use client"

import { Button } from "@/components/ui/button"

interface HorizontalBannerProps {
  title: string
  subtitle: string
}

export function HorizontalBanner({ title, subtitle }: HorizontalBannerProps) {
  return (
    <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-lg p-8 text-center shadow-lg border-2 border-emerald-600">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-emerald-200 mb-4">{subtitle}</p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-lg">
          Learn More
        </Button>
      </div>
    </div>
  )
}
