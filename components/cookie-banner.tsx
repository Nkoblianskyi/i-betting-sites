"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 text-white p-4 z-50 shadow-lg bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-900">
        <div className="flex-1">
          <p className="text-sm">
            We use cookies to enhance your experience on our site. By continuing to browse, you agree to our use of
            cookies.
            <Link href="/privacy-policy" className="text-green-primary hover:underline ml-1">
              Learn more about our Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="text-black border-white hover:bg-white hover:text-gray-900"
          >
            Decline
          </Button>
          <Button onClick={handleAccept} className="bg-green-primary hover:bg-green-hover text-slate-900">
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
