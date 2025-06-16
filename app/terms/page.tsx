import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&text=Stadium+Background)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-emerald-800/95 to-emerald-900/95 backdrop-blur-sm text-white py-6">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            </div>
            <p className="text-emerald-200">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using IE Best Betting Sites, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>

              <h2>2. Website Purpose</h2>
              <p>
                This website provides information and reviews about betting sites available in Ireland. We are an
                independent comparison service and do not operate any gambling services ourselves.
              </p>

              <h2>3. Age Restrictions</h2>
              <p>
                You must be at least 18 years old to use this website. Gambling is restricted to adults only. We take
                age verification seriously and encourage responsible gambling.
              </p>

              <h2>4. Information Accuracy</h2>
              <p>
                While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy of all
                content. Betting odds, bonuses, and terms may change without notice.
              </p>

              <h2>5. Third-Party Links</h2>
              <p>
                Our website contains links to third-party betting sites. We are not responsible for the content, terms,
                or practices of these external sites. Please review their terms and conditions before use.
              </p>

              <h2>6. Responsible Gambling</h2>
              <p>We promote responsible gambling and encourage users to:</p>
              <ul>
                <li>Set limits on time and money spent gambling</li>
                <li>Never gamble more than you can afford to lose</li>
                <li>Seek help if gambling becomes a problem</li>
                <li>Use self-exclusion tools when necessary</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of IE Best
                Betting Sites and is protected by copyright laws.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                We shall not be liable for any direct, indirect, incidental, or consequential damages arising from your
                use of this website or the information contained herein.
              </p>

              <h2>9. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
                protect your information.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting on this website.
              </p>

              <h2>11. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of Ireland.</p>

              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                Email: legal@iebestbettingsites.com
                <br />
                Address: Dublin, Ireland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
