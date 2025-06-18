"use client"

export function InfoSections() {
  return (
    <div className="mt-16">
      {/* Main Guide Section with Background */}
      <section className="relative rounded-lg overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 px-4 py-6 lg:py-8 text-white flex flex-col items-center text-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-yellow-400">
            Your Complete Guide to Irish Betting Platforms
          </h2>

          <div className="space-y-4 w-full">
            <p className="text-gray-200 leading-relaxed text-sm">
              Selecting the right betting platform can be overwhelming with numerous options available across Ireland.
              That's why it's crucial to understand exactly what features matter most to you - whether you prioritize
              competitive odds, attractive welcome bonuses, user-friendly interfaces, or excellent mobile experiences.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Our comprehensive evaluation process</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                We conduct thorough assessments of every betting platform featured on our site. Our expert team
                personally tests each operator, examining crucial aspects including odds competitiveness, platform
                usability, live betting features, streaming services, cashout options, customer support quality, payment
                methods, and promotional offerings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Finding your perfect betting match</h3>
              <p className="text-gray-200 leading-relaxed text-sm mb-2">
                Every bettor has unique preferences and requirements. Start by identifying which sports and markets
                interest you most, then verify that your chosen operators provide comprehensive coverage of those areas.
              </p>
              <p className="text-gray-200 leading-relaxed text-sm">
                Additionally, pay close attention to each operator's odds margins and payout percentages. Superior odds
                significantly improve your long-term profitability and overall betting success.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Maximizing promotional opportunities</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                The competitive nature of today's betting industry means operators constantly innovate their promotional
                strategies to attract and retain customers. Welcome bonuses have become increasingly sophisticated,
                offering substantial value to new players who understand how to leverage them effectively.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-4 border-t border-gray-600 w-full">
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                THIS CONTENT IS PROTECTED BY COPYRIGHT. ALL SERVICES AND OFFERS ARE EXCLUSIVELY FOR IRISH RESIDENTS AGED
                18 AND ABOVE.
              </p>
              <p>
                ADDITIONAL RESTRICTIONS MAY APPLY INCLUDING AGE VERIFICATION, GEOGRAPHICAL LIMITATIONS, AND RESIDENCY
                REQUIREMENTS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
