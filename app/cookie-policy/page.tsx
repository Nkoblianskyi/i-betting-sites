import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose max-w-none">
          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>

          <h2>How we use cookies</h2>
          <p>We use cookies for several purposes:</p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> These are necessary for the website to function properly
            </li>
            <li>
              <strong>Analytics cookies:</strong> These help us understand how visitors use our website
            </li>
            <li>
              <strong>Advertising cookies:</strong> These are used to deliver relevant advertisements
            </li>
            <li>
              <strong>Functional cookies:</strong> These remember your preferences and settings
            </li>
          </ul>

          <h2>Types of cookies we use</h2>
          <h3>Session cookies</h3>
          <p>
            These are temporary cookies that are deleted when you close your browser. They help us remember what you're
            doing as you move between pages.
          </p>

          <h3>Persistent cookies</h3>
          <p>
            These remain on your device for a set period or until you delete them. They help us recognize you when you
            return to our website.
          </p>

          <h2>Third-party cookies</h2>
          <p>We may also use third-party cookies from our partners and service providers, including:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Social media platforms for sharing content</li>
            <li>Advertising networks for targeted advertising</li>
          </ul>

          <h2>Managing cookies</h2>
          <p>You can control and manage cookies in various ways. Most browsers allow you to:</p>
          <ul>
            <li>View what cookies are stored on your device</li>
            <li>Delete cookies individually or all at once</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>

          <h2>Cookie consent</h2>
          <p>
            By continuing to use our website, you consent to our use of cookies as described in this policy. You can
            withdraw your consent at any time by adjusting your browser settings.
          </p>
        </div>
      </div>
    </div>
  )
}
