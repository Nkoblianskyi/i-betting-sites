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
            Guide to The Best Betting Sites in Ireland
          </h2>

          <div className="space-y-4 w-full">
            <p className="text-gray-200 leading-relaxed text-sm">
              Choosing a new betting site can be quite a challenge as there are many different betting sites to choose
              from in Ireland. It is therefore important that you are aware in advance of exactly what you are looking
              for in a bookmaker, whether you are looking for the highest odds, the most competitive bonus offers and
              promotions, or whether the ease of use and a good mobile platform are more important for you.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">How do we rank these betting sites?</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                We rank the above betting sites based on thorough tests. It is important for us to test all the
                different parts of each betting site, to give as accurate a rating as possible. We visit all the
                bookmakers' websites and evaluate them on the basis of, among other things, odds level, ease of use and
                navigation, live betting, live streaming, cash out, customer service, deposit and payout options,
                welcome bonuses, etc.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Which betting sites is the best for you?</h3>
              <p className="text-gray-200 leading-relaxed text-sm mb-2">
                As mentioned, there are many different things to keep in mind when researching which bookmaker best
                suits your needs and interests. First of all, you should consider which sports you want to play on and
                check if the bookmakers offer odds on exactly the sports, leagues and tournaments that you want to play
                on.
              </p>
              <p className="text-gray-200 leading-relaxed text-sm">
                In addition, it is also important to know the bookmakers' odds level and repayment rates. The higher the
                odds of a bookmaker, the better your chances of beating the bookmaker and making money from your bets.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Where do you find the best betting sites bonus</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Competition in the bookmaker industry is fiercer and more intense than ever before, which is why
                bookmakers are constantly trying to attract customers in new ways. In recent years, bookmaker bonuses
                have become one of the primary ways to attract new customers and steal customers from competitors.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-4 border-t border-gray-600 w-full">
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                REPRODUCTION OF THIS WEBSITE, IN WHOLE OR IN PART, IS STRICTLY PROHIBITED. THE OFFERS AND SERVICES
                FEATURED IN THIS WEBSITE ARE APPLICABLE SOLELY FOR PLAYERS LOCATED IN THE UK AND OVER THE AGE OF 18.
              </p>
              <p>
                THERE MIGHT BE ADDITIONAL RESTRICTIONS CONCERNING THE AFORESAID SERVICES SUCH AS AGE LIMITATIONS AS WELL
                AS TERRITORY AND RESIDENCE LIMITATIONS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
