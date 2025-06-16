import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose max-w-none">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our
            newsletter, or contact us for support.
          </p>

          <h3>Personal Information</h3>
          <ul>
            <li>Name and email address</li>
            <li>IP address and browser information</li>
            <li>Usage data and preferences</li>
            <li>Cookie and tracking data</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Send you updates and promotional materials</li>
            <li>Analyze usage patterns and trends</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your
            consent, except as described in this policy.
          </p>

          <h2>4. Cookies</h2>
          <p>
            We use cookies to enhance your experience on our site. You can choose to disable cookies through your
            browser settings, but this may affect site functionality.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>6. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>
        </div>
      </div>
    </div>
  )
}
