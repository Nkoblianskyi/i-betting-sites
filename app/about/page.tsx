import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About IE Best Betting Sites</h1>

          <p className="text-xl text-gray-700 mb-8 text-center font-medium">
            Your trusted guide to the best betting sites in Ireland
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At IE Best Betting Sites, our mission is to provide Irish players with the most comprehensive, accurate, and
            up-to-date information about online betting sites. We understand that choosing the right betting platform
            can be overwhelming with so many options available, which is why we've dedicated ourselves to making this
            process easier for you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Rate Betting Sites</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our rating system is built on years of experience and a deep understanding of what matters most to Irish
            bettors. We evaluate each betting site across multiple criteria to ensure our recommendations are both
            reliable and relevant.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Rating Criteria</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Licensing & Regulation:</strong> We only feature sites licensed by reputable authorities
              </li>
              <li>
                <strong>Security & Safety:</strong> Advanced encryption and responsible gambling measures
              </li>
              <li>
                <strong>Betting Markets:</strong> Variety and depth of sports and betting options
              </li>
              <li>
                <strong>Odds Quality:</strong> Competitive odds across all major sports
              </li>
              <li>
                <strong>Welcome Bonuses:</strong> Value and fairness of promotional offers
              </li>
              <li>
                <strong>Payment Methods:</strong> Variety of deposit and withdrawal options
              </li>
              <li>
                <strong>Customer Support:</strong> Responsiveness and quality of help services
              </li>
              <li>
                <strong>Mobile Experience:</strong> Quality of mobile apps and mobile sites
              </li>
              <li>
                <strong>Live Betting:</strong> In-play betting options and live streaming
              </li>
              <li>
                <strong>User Experience:</strong> Site navigation and overall usability
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Review Process</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every betting site featured on our platform undergoes a rigorous review process. Our team of experienced
            reviewers creates accounts, makes deposits, places bets, and tests customer support to provide you with
            genuine insights based on real experiences.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">Our Testing Process</h4>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>• Account registration and verification process</li>
              <li>• Deposit and withdrawal testing with real money</li>
              <li>• Betting across multiple sports and markets</li>
              <li>• Customer support response time and quality testing</li>
              <li>• Mobile app and website functionality testing</li>
              <li>• Bonus terms and conditions analysis</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Trust Our Reviews</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Independence is at the core of everything we do. While we may receive compensation when you click on links
            to betting sites, this never influences our rankings or reviews. Our editorial team maintains complete
            independence, and our ratings are based solely on the quality and features of each betting site.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Commitment to You</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Transparency</h4>
              <p className="text-green-800 text-sm">Clear disclosure of our review methodology and partnerships</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Accuracy</h4>
              <p className="text-green-800 text-sm">Regular updates to ensure all information remains current</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Responsibility</h4>
              <p className="text-green-800 text-sm">Promoting safe and responsible gambling practices</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Expertise</h4>
              <p className="text-green-800 text-sm">Reviews conducted by experienced betting industry professionals</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsible Gambling</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are committed to promoting responsible gambling. We believe that betting should be entertaining and never
            cause financial or personal problems. All betting sites we recommend must demonstrate a commitment to
            responsible gambling through:
          </p>
          <ul className="text-gray-700 space-y-1 mb-6">
            <li>• Self-exclusion tools and deposit limits</li>
            <li>• Links to gambling addiction support organizations</li>
            <li>• Age verification processes</li>
            <li>• Clear terms and conditions</li>
            <li>• Transparent bonus requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Staying Current</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The online betting industry evolves rapidly, with new sites launching and existing operators updating their
            offerings regularly. Our team continuously monitors the market to ensure our reviews and rankings reflect
            the current state of each betting site.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We update our reviews whenever significant changes occur, whether it's new payment methods, updated bonus
            offers, or changes in licensing status. This commitment to accuracy ensures you always have access to the
            most reliable information when making your betting site selection.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
            <h3 className="text-red-800 font-bold mb-3">Important Reminder</h3>
            <p className="text-red-700 mb-2">
              Gambling should be fun and entertaining. Never bet more than you can afford to lose, and always gamble
              responsibly.
            </p>
            <p className="text-red-700">
              If you feel that gambling is becoming a problem, please seek help from organizations like GambleAware,
              GamCare, or Gamblers Anonymous.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
