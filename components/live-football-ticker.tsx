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

  // Demo data that will be used since API has CORS issues
  const demoMatches: Match[] = [
    {
      id: "1",
      homeTeam: "Liverpool",
      awayTeam: "Chelsea",
      date: "16 Jun",
      time: "17:30",
      competition: "Premier League",
      status: "SCHEDULED",
      matchday: 38,
    },
    {
      id: "2",
      homeTeam: "Barcelona",
      awayTeam: "Atletico Madrid",
      date: "16 Jun",
      time: "20:00",
      competition: "La Liga",
      status: "SCHEDULED",
    },
    {
      id: "3",
      homeTeam: "Bayern Munich",
      awayTeam: "RB Leipzig",
      date: "16 Jun",
      time: "18:30",
      competition: "Bundesliga",
      status: "IN_PLAY",
    },
    {
      id: "4",
      homeTeam: "PSG",
      awayTeam: "Lyon",
      date: "16 Jun",
      time: "21:00",
      competition: "Ligue 1",
      status: "SCHEDULED",
    },
    {
      id: "5",
      homeTeam: "Inter Milan",
      awayTeam: "Juventus",
      date: "16 Jun",
      time: "19:45",
      competition: "Serie A",
      status: "SCHEDULED",
    },
    {
      id: "6",
      homeTeam: "Real Madrid",
      awayTeam: "Sevilla",
      date: "17 Jun",
      time: "22:00",
      competition: "La Liga",
      status: "SCHEDULED",
    },
    {
      id: "7",
      homeTeam: "Man United",
      awayTeam: "Tottenham",
      date: "17 Jun",
      time: "16:00",
      competition: "Premier League",
      status: "SCHEDULED",
    },
    {
      id: "8",
      homeTeam: "Borussia Dortmund",
      awayTeam: "Bayer Leverkusen",
      date: "17 Jun",
      time: "15:30",
      competition: "Bundesliga",
      status: "SCHEDULED",
    },
    {
      id: "9",
      homeTeam: "AC Milan",
      awayTeam: "Napoli",
      date: "17 Jun",
      time: "20:45",
      competition: "Serie A",
      status: "SCHEDULED",
    },
    {
      id: "10",
      homeTeam: "Arsenal",
      awayTeam: "Manchester City",
      date: "18 Jun",
      time: "14:00",
      competition: "Premier League",
      status: "LIVE",
    },
  ]

  // Simulate API fetch but use demo data directly due to CORS issues
  const fetchMatches = async () => {
    try {
      // Skip actual API calls due to CORS issues
      console.log("Using demo data due to CORS issues with the API")

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Use demo data
      setMatches(demoMatches)
      setHasData(true)
    } catch (error) {
      console.error("Error:", error)
      setHasData(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Only run on client side after component is mounted
    if (mounted) {
      fetchMatches()
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

  // Don't render anything if no data or still loading on server
  if (!mounted || (loading && !hasData)) {
    return null
  }

  // Don't render if no matches after loading
  if (!loading && (!matches || matches.length === 0)) {
    return null
  }

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden relative h-[45px]">
      <div className="flex h-full">
        <div className="bg-green-600 text-white px-2 sm:px-3 lg:px-4 flex-shrink-0 flex items-center font-bold text-xs sm:text-sm z-10">
          <div className="text-center leading-tight">
            <div className="hidden sm:block">Today's</div>
            <div className="hidden sm:block">Fixtures</div>
            <div className="sm:hidden">Live</div>
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
          animation: scroll-seamless 40s linear infinite;
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
