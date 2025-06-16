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
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Demo data that will be used if API fails
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
      awayTeam: "Man City",
      date: "18 Jun",
      time: "17:30",
      competition: "Premier League",
      status: "SCHEDULED",
    },
  ]

  const fetchMatches = async () => {
    try {
      setError(null)

      // Get today's date in correct format (yyyy-MM-dd)
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)
      const dayAfter = new Date(today)
      dayAfter.setDate(dayAfter.getDate() + 2)

      const formatDate = (date: Date) => {
        return date.toISOString().split("T")[0]
      }

      const todayStr = formatDate(today)
      const tomorrowStr = formatDate(tomorrow)
      const dayAfterStr = formatDate(dayAfter)

      console.log(`Fetching matches for dates: ${todayStr} to ${dayAfterStr}`)

      // Try different approaches to get matches
      const endpoints = [
        // Today's matches
        `https://api.football-data.org/v4/matches?dateFrom=${todayStr}&dateTo=${todayStr}`,
        // Next few days
        `https://api.football-data.org/v4/matches?dateFrom=${todayStr}&dateTo=${dayAfterStr}`,
        // Premier League scheduled matches
        `https://api.football-data.org/v4/competitions/PL/matches?status=SCHEDULED`,
        // Champions League scheduled matches
        `https://api.football-data.org/v4/competitions/CL/matches?status=SCHEDULED`,
        // All scheduled matches (no date filter)
        `https://api.football-data.org/v4/matches?status=SCHEDULED`,
      ]

      let allMatches: any[] = []

      for (const endpoint of endpoints) {
        try {
          console.log(`Trying: ${endpoint}`)

          const response = await fetch(endpoint, {
            method: "GET",
            headers: {
              "X-Auth-Token": "03df4abdf8ba48fcb18241e7c39f7434",
              "Content-Type": "application/json",
            },
          })

          console.log(`Response status: ${response.status}`)

          if (response.ok) {
            const data = await response.json()
            console.log(`Matches found: ${data.matches?.length || 0}`)

            if (data.matches && data.matches.length > 0) {
              // Filter for upcoming matches only
              const upcomingMatches = data.matches.filter((match: any) => {
                const matchDate = new Date(match.utcDate)
                const now = new Date()
                return matchDate > now || match.status === "IN_PLAY" || match.status === "LIVE"
              })

              allMatches = [...allMatches, ...upcomingMatches]
              console.log(`Added ${upcomingMatches.length} upcoming matches`)
            }
          } else {
            const errorText = await response.text()
            console.log(`Failed ${endpoint}: ${response.status} - ${errorText}`)
          }
        } catch (err) {
          console.log(`Error with ${endpoint}:`, err)
        }

        // If we have enough matches, break early
        if (allMatches.length >= 10) {
          break
        }
      }

      if (allMatches.length > 0) {
        // Remove duplicates and sort by date
        const uniqueMatches = allMatches
          .filter((match, index, self) => index === self.findIndex((m) => m.id === match.id))
          .sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())

        const formattedMatches = uniqueMatches.slice(0, 15).map((match: any) => {
          const matchDate = new Date(match.utcDate)
          return {
            id: match.id.toString(),
            homeTeam: match.homeTeam.shortName || match.homeTeam.name,
            awayTeam: match.awayTeam.shortName || match.awayTeam.name,
            date: matchDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            }),
            time: matchDate.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
            competition: match.competition.name,
            status: match.status,
            matchday: match.matchday,
          }
        })

        setMatches(formattedMatches)
        console.log(`Successfully loaded ${formattedMatches.length} matches`)
        return
      }

      // If no matches found, use demo data
      console.log("No API matches found, using demo data")
      setError("Using demo data")
      setMatches(demoMatches)
    } catch (error) {
      console.error("All endpoints failed:", error)
      setError("Using demo data")
      setMatches(demoMatches)
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
      const interval = setInterval(fetchMatches, 5 * 60 * 1000)
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

  // Show loading state initially to avoid hydration mismatch
  if (loading || !mounted) {
    return (
      <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden h-[45px] flex items-center justify-center">
        <div className="animate-pulse text-center text-gray-600 text-xs sm:text-sm">⚽ Loading matches...</div>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden relative h-[45px]">
      <div className="flex h-full">
        <div className="bg-green-600 text-white px-2 sm:px-3 lg:px-4 flex-shrink-0 flex items-center font-bold text-xs sm:text-sm">
          <div className="text-center leading-tight">
            <div className="hidden sm:block">Today's</div>
            <div className="hidden sm:block">Fixtures</div>
            <div className="sm:hidden">Live</div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden h-full">
          <div className="animate-scroll flex h-full">
            {matches.concat(matches).map((match, index) => (
              <div
                key={`${match.id}-${index}`}
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

      {error && (
        <div className="absolute top-1 right-1 bg-yellow-100 text-yellow-800 px-2 py-0.5 text-xs rounded">
          Demo Mode
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
