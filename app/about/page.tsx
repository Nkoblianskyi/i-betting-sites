import Link from "next/link"
import { ArrowLeft, Shield, Star, Award, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Button>
            </Link>

            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">About IE Best Betting Sites</h1>
                    <p className="text-gray-600 text-lg">Your trusted guide to the best betting sites in Ireland</p>
                </div>

                <div className="prose max-w-none">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-2">Expert Reviews</h3>
                            <p className="text-gray-600 text-sm">Comprehensive analysis of every betting site</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <Award className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-2">Unbiased Rankings</h3>
                            <p className="text-gray-600 text-sm">Independent ratings based on strict criteria</p>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-2">Player Focused</h3>
                            <p className="text-gray-600 text-sm">Reviews written from the player's perspective</p>
                        </div>
                    </div>

                    <h2>Our Mission</h2>
                    <p>
                        At IE Best Betting Sites, our mission is to provide Irish players with the most comprehensive, accurate, and
                        up-to-date information about online betting sites. We understand that choosing the right betting platform
                        can be overwhelming with so many options available, which is why we've dedicated ourselves to making this
                        process easier for you.
                    </p>

                    <h2>How We Rate Betting Sites</h2>
                    <p>
                        Our rating system is built on years of experience and a deep understanding of what matters most to Irish
                        bettors. We evaluate each betting site across multiple criteria to ensure our recommendations are both
                        reliable and relevant.
                    </p>

                    <h3>Our Rating Criteria</h3>
                    <ul>
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

                    <h2>Our Review Process</h2>
                    <p>
                        Every betting site featured on our platform undergoes a rigorous review process. Our team of experienced
                        reviewers creates accounts, makes deposits, places bets, and tests customer support to provide you with
                        genuine insights based on real experiences.
                    </p>

                    <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 my-6">
                        <div className="flex items-center mb-2">
                            <Target className="w-5 h-5 text-emerald-600 mr-2" />
                            <h4 className="font-bold text-emerald-800">Our Testing Process</h4>
                        </div>
                        <ul className="text-emerald-700 text-sm space-y-1">
                            <li>• Account registration and verification process</li>
                            <li>• Deposit and withdrawal testing with real money</li>
                            <li>• Betting across multiple sports and markets</li>
                            <li>• Customer support response time and quality testing</li>
                            <li>• Mobile app and website functionality testing</li>
                            <li>• Bonus terms and conditions analysis</li>
                        </ul>
                    </div>

                    <h2>Why Trust Our Reviews</h2>
                    <p>
                        Independence is at the core of everything we do. While we may receive compensation when you click on links
                        to betting sites, this never influences our rankings or reviews. Our editorial team maintains complete
                        independence, and our ratings are based solely on the quality and features of each betting site.
                    </p>

                    <h3>Our Commitment to You</h3>
                    <ul>
                        <li>
                            <strong>Transparency:</strong> Clear disclosure of our review methodology and partnerships
                        </li>
                        <li>
                            <strong>Accuracy:</strong> Regular updates to ensure all information remains current
                        </li>
                        <li>
                            <strong>Responsibility:</strong> Promoting safe and responsible gambling practices
                        </li>
                        <li>
                            <strong>Expertise:</strong> Reviews conducted by experienced betting industry professionals
                        </li>
                    </ul>

                    <h2>Responsible Gambling</h2>
                    <p>
                        We are committed to promoting responsible gambling. We believe that betting should be entertaining and never
                        cause financial or personal problems. All betting sites we recommend must demonstrate a commitment to
                        responsible gambling through:
                    </p>
                    <ul>
                        <li>Self-exclusion tools and deposit limits</li>
                        <li>Links to gambling addiction support organizations</li>
                        <li>Age verification processes</li>
                        <li>Clear terms and conditions</li>
                        <li>Transparent bonus requirements</li>
                    </ul>

                    <h2>Staying Current</h2>
                    <p>
                        The online betting industry evolves rapidly, with new sites launching and existing operators updating their
                        offerings regularly. Our team continuously monitors the market to ensure our reviews and rankings reflect
                        the current state of each betting site.
                    </p>

                    <p>
                        We update our reviews whenever significant changes occur, whether it's new payment methods, updated bonus
                        offers, or changes in licensing status. This commitment to accuracy ensures you always have access to the
                        most reliable information when making your betting site selection.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                        <h3 className="text-blue-800 font-bold mb-3">Remember</h3>
                        <p className="text-blue-700 text-sm mb-2">
                            Gambling should be fun and entertaining. Never bet more than you can afford to lose, and always gamble
                            responsibly.
                        </p>
                        <p className="text-blue-700 text-sm">
                            If you feel that gambling is becoming a problem, please seek help from organizations like GambleAware,
                            GamCare, or Gamblers Anonymous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
