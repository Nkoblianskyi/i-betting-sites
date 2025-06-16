"use client"

import { useEffect, useState } from "react"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  league: string
}

export function LiveTicker() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMatches = async () => {
    try {
      const res = await fetch("https://www.scorebat.com/video-api/v3/")
      const data = await res.json()

      if (!data.response) return

      const upcoming = data.response
        .filter((match: any) => new Date(match.date) > new Date())
        .slice(0, 10)
        .map((match: any, index: number) => {
          const [homeTeam, awayTeam] = match.title.split(" vs ")
          const dateObj = new Date(match.date)

          return {
            id: `match-${index}`,
            homeTeam: homeTeam?.trim() || "TBD",
            awayTeam: awayTeam?.trim() || "TBD",
            date: dateObj.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            }),
            time: dateObj.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }),
            league: match.competition || "Friendly",
          }
        })

      setMatches(upcoming)
    } catch (error) {
      setMatches([
        {
          id: "1",
          homeTeam: "Man United",
          awayTeam: "Liverpool",
          date: "15 Jun",
          time: "08:00 pm",
          league: "Premier League",
        },
        {
          id: "2",
          homeTeam: "Barcelona",
          awayTeam: "Real Madrid",
          date: "16 Jun",
          time: "09:30 pm",
          league: "La Liga",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
    const interval = setInterval(fetchMatches, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-[#d3d3d3] text-black py-2 text-center">
        Loading...
      </div>
    )
  }

  if (matches.length === 0) return null

  const repeatedMatches = matches.concat(matches)

  return (
    <div className="relative overflow-hidden bg-[#d3d3d3] border-t border-black">
      {/* Fixed green label */}
      <div className="absolute left-0 top-0 bottom-0 bg-[#60c100] text-white font-bold px-4 py-2 text-sm rounded-r-full z-10 flex items-center">
        Upcoming <br /> Fixtures
      </div>

      {/* Animated scroll container */}
      <div className="w-full overflow-hidden pl-32">
        <div className="inline-block whitespace-nowrap animate-scroll">
          {repeatedMatches.map((match, index) => (
            <div
              key={`${match.id}-${index}`}
              className="inline-block px-6 py-2 border-l border-gray-500 min-w-[240px] text-center align-top"
            >
              <div className="font-semibold text-sm text-black">
                {match.homeTeam} vs {match.awayTeam}
              </div>
              <div className="text-xs text-black mt-1">
                {match.date} {match.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
