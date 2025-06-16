"use client"

import { useState, useEffect } from "react"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  competition: string
  status: string
  matchday?: number
}

export function LiveFootballTicker() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [hasData, setHasData] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Реальний API запит з вашим токеном
  const fetchMatches = async () => {
    try {
      console.log("Fetching matches from football-data.org API...")

      const response = await fetch("https://api.football-data.org/v4/matches?status=SCHEDULED,LIVE,IN_PLAY", {
        headers: {
          "X-Auth-Token": "03df4abdf8ba48fcb18241e7c39f7434",
        },
      })

      console.log("API Response status:", response.status)

      if (response.ok) {
        const data = await response.json()
        console.log("Raw API data:", data)

        const formattedMatches = data.matches.slice(0, 15).map((match: any) => ({
          id: match.id.toString(),
          homeTeam: match.homeTeam.shortName || match.homeTeam.name,
          awayTeam: match.awayTeam.shortName || match.awayTeam.name,
          date: new Date(match.utcDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
          }),
          time: new Date(match.utcDate).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          competition: match.competition.name,
          status: match.status,
          matchday: match.matchday,
        }))

        console.log("Formatted matches:", formattedMatches)
        setMatches(formattedMatches)
        setHasData(true)
      } else {
        const errorText = await response.text()
        console.error("API Error:", response.status, response.statusText, errorText)
        setHasData(false)
      }
    } catch (error) {
      console.error("Error fetching matches:", error)
      setHasData(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      fetchMatches()
      // Оновлення кожні 10 хвилин
      const interval = setInterval(fetchMatches, 10 * 60 * 1000)
      return () => clearInterval(interval)
    }
  }, [mounted])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "IN_PLAY":
      case "LIVE":
        return "text-red-500 font-bold animate-pulse"
      case "PAUSED":
        return "text-orange-500 font-bold"
      case "FINISHED":
        return "text-gray-500"
      default:
        return "text-green-600"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "IN_PLAY":
        return "LIVE"
      case "LIVE":
        return "LIVE"
      case "PAUSED":
        return "HT"
      case "FINISHED":
        return "FT"
      case "SCHEDULED":
      case "TIMED":
        return ""
      default:
        return status
    }
  }

  // Показувати завантаження
  if (!mounted || loading) {
    return (
      <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden relative h-[45px] flex items-center justify-center">
        <div className="text-gray-500 text-sm animate-pulse">⚽ Loading live fixtures...</div>
      </div>
    )
  }

  // Не показувати, якщо немає матчів
  if (!hasData || !matches || matches.length === 0) {
    console.log("No matches to display")
    return null
  }

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden relative h-[45px]">
      <div className="flex h-full">
        <div className="bg-green-600 text-white px-2 sm:px-3 lg:px-4 flex-shrink-0 flex items-center font-bold text-xs sm:text-sm z-10">
          <div className="text-center leading-tight">
            <div className="hidden sm:block">Live</div>
            <div className="hidden sm:block">Fixtures</div>
            <div className="sm:hidden">⚽</div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden h-full">
          <div className="ticker-container h-full">
            <div className="ticker-content flex h-full">
              {/* Перший набір матчів */}
              {matches.map((match, index) => (
                <div
                  key={`first-${match.id}-${index}`}
                  className="flex-shrink-0 px-3 sm:px-4 lg:px-6 border-r border-gray-200 bg-white hover:bg-gray-50 transition-colors min-w-[220px] sm:min-w-[280px] lg:min-w-[320px] h-full flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate flex-1">
                      {match.homeTeam} vs {match.awayTeam}
                    </div>
                    {getStatusText(match.status) && (
                      <div className={`text-xs ml-2 px-1 rounded ${getStatusColor(match.status)}`}>
                        {getStatusText(match.status)}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {match.time} • {match.competition}
                    {match.matchday && ` MD${match.matchday}`}
                  </div>
                </div>
              ))}

              {/* Другий набір матчів для безшовної анімації */}
              {matches.map((match, index) => (
                <div
                  key={`second-${match.id}-${index}`}
                  className="flex-shrink-0 px-3 sm:px-4 lg:px-6 border-r border-gray-200 bg-white hover:bg-gray-50 transition-colors min-w-[220px] sm:min-w-[280px] lg:min-w-[320px] h-full flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate flex-1">
                      {match.homeTeam} vs {match.awayTeam}
                    </div>
                    {getStatusText(match.status) && (
                      <div className={`text-xs ml-2 px-1 rounded ${getStatusColor(match.status)}`}>
                        {getStatusText(match.status)}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {match.time} • {match.competition}
                    {match.matchday && ` MD${match.matchday}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          overflow: hidden;
        }
        
        .ticker-content {
          animation: scroll-seamless 50s linear infinite;
          width: fit-content;
        }
        
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .ticker-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
