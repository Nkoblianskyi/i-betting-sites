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

      // Показуємо всі матчі без фільтрації за датою
      const allMatches = data.response
        .slice(0, 15) // Беремо перші 15 матчів
        .map((match: any, index: number) => {
          const [homeTeam, awayTeam] = match.title.split(" - ")
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
              hour12: false,
            }),
            league: match.competition || "Friendly",
          }
        })

      setMatches(allMatches)
    } catch (error) {
      // Fallback з більшою кількістю матчів
      setMatches([
        {
          id: "1",
          homeTeam: "Man United",
          awayTeam: "Liverpool",
          date: "15 Jun",
          time: "20:00",
          league: "Premier League",
        },
        {
          id: "2",
          homeTeam: "Barcelona",
          awayTeam: "Real Madrid",
          date: "16 Jun",
          time: "21:30",
          league: "La Liga",
        },
        {
          id: "3",
          homeTeam: "Bayern Munich",
          awayTeam: "Dortmund",
          date: "17 Jun",
          time: "19:00",
          league: "Bundesliga",
        },
        {
          id: "4",
          homeTeam: "PSG",
          awayTeam: "Marseille",
          date: "18 Jun",
          time: "22:00",
          league: "Ligue 1",
        },
        {
          id: "5",
          homeTeam: "Chelsea",
          awayTeam: "Arsenal",
          date: "19 Jun",
          time: "16:00",
          league: "Premier League",
        },
        {
          id: "6",
          homeTeam: "Juventus",
          awayTeam: "AC Milan",
          date: "20 Jun",
          time: "19:15",
          league: "Serie A",
        },
        {
          id: "7",
          homeTeam: "Ajax",
          awayTeam: "PSV",
          date: "21 Jun",
          time: "18:00",
          league: "Eredivisie",
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
    return <div className="bg-[#d3d3d3] text-black py-2 text-center">Loading...</div>
  }

  if (matches.length === 0) return null

  return (
    <div className="relative overflow-hidden h-[40px]">
      {/* Scrolling content - goes under the green label */}
      <div className="absolute left-0 top-0 bottom-0 right-0 overflow-hidden bg-[#d3d3d3] border-t border-black rounded-br-lg">
        <div className="ticker-track h-full flex items-center pl-32">
          {matches
            .concat(matches)
            .concat(matches)
            .map((match, index) => (
              <div
                key={`${match.id}-${index}`}
                className="flex-shrink-0 px-6 py-2 border-l border-gray-500 min-w-[280px] text-center whitespace-nowrap"
              >
                <div className="font-semibold text-sm text-black">
                  {match.homeTeam} vs {match.awayTeam}
                </div>
                <div className="text-xs text-black mt-1">
                  {match.date} {match.time} • {match.league}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Fixed green label - on top */}
      <div className="absolute left-0 top-0 bottom-0 bg-green-primary text-white font-bold px-4 py-2 text-sm rounded-r-full z-10 flex items-center">
        <div className="text-center leading-tight">
          <div className="text-xs">Live</div>
          <div className="text-xs">Fixtures</div>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 120s linear infinite;
          width: max-content;
        }
        
        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
