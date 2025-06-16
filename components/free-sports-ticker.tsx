"use client"

import { useState, useEffect } from "react"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  status: string
}

export function FreeSportsTicker() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  // Безкоштовний API football-data.org
  const fetchMatches = async () => {
    try {
      // Без API ключа можна робити 10 запитів на хвилину
      const response = await fetch("https://api.football-data.org/v4/matches?status=SCHEDULED", {
        headers: {
          // Для більшої кількості запитів зареєструйся та додай:
          // 'X-Auth-Token': 'твій_безкоштовний_ключ'
        },
      })

      if (response.ok) {
        const data = await response.json()
        const formattedMatches = data.matches.slice(0, 15).map((match: any) => ({
          id: match.id,
          homeTeam: match.homeTeam.shortName || match.homeTeam.name,
          awayTeam: match.awayTeam.shortName || match.awayTeam.name,
          date: new Date(match.utcDate).toLocaleDateString("uk-UA", {
            day: "2-digit",
            month: "short",
          }),
          time: new Date(match.utcDate).toLocaleTimeString("uk-UA", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: match.status,
        }))
        setMatches(formattedMatches)
      }
    } catch (error) {
      console.error("Помилка API:", error)
      // Fallback дані
      setMatches([
        {
          id: "1",
          homeTeam: "Man United",
          awayTeam: "Liverpool",
          date: "15 Jun",
          time: "20:00",
          status: "SCHEDULED",
        },
        {
          id: "2",
          homeTeam: "Barcelona",
          awayTeam: "Real Madrid",
          date: "16 Jun",
          time: "21:30",
          status: "SCHEDULED",
        },
        {
          id: "3",
          homeTeam: "Bayern",
          awayTeam: "Dortmund",
          date: "17 Jun",
          time: "19:00",
          status: "SCHEDULED",
        },
        {
          id: "4",
          homeTeam: "Chelsea",
          awayTeam: "Arsenal",
          date: "18 Jun",
          time: "16:00",
          status: "SCHEDULED",
        },
        {
          id: "5",
          homeTeam: "PSG",
          awayTeam: "Marseille",
          date: "19 Jun",
          time: "22:00",
          status: "SCHEDULED",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
    // Оновлення кожні 10 хвилин (щоб не перевищити ліміт)
    const interval = setInterval(fetchMatches, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-green-600 text-white py-3 overflow-hidden">
        <div className="animate-pulse text-center">⚽ Завантаження матчів...</div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3 overflow-hidden relative shadow-lg">
      {/* Фіксований лейбл */}
      <div className="absolute left-0 top-0 bottom-0 bg-green-800 px-4 flex items-center z-10 shadow-lg">
        <div className="text-center">
          <div className="font-bold text-sm">⚽ Upcoming</div>
          <div className="font-bold text-xs">Fixtures</div>
        </div>
      </div>

      {/* Бігучий контент */}
      <div className="animate-scroll flex items-center pl-24">
        {matches.concat(matches).map((match, index) => (
          <div
            key={`${match.id}-${index}`}
            className="flex items-center whitespace-nowrap mx-6 bg-green-500/30 rounded-full px-4 py-2"
          >
            <span className="font-semibold text-sm">
              {match.homeTeam} <span className="text-yellow-300">vs</span> {match.awayTeam}
            </span>
            <span className="ml-3 text-green-200 text-xs">
              📅 {match.date} ⏰ {match.time}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
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
