"use client"

import React, { useEffect, useState } from "react"

type Match = {
  utcDate: string
  homeTeam: { name: string }
  awayTeam: { name: string }
  score: {
    fullTime: { home: number | null; away: number | null }
  }
}

export default function LiveFootballTicker() {
  const [matches, setMatches] = useState<Match[]>([])

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const today = new Date().toISOString().split("T")[0]
        const res = await fetch(
          `https://api.football-data.org/v4/matches?dateFrom=${today}&dateTo=${today}`,
          {
            headers: {
              "X-Auth-Token": "03df4abdf8ba48fcb18241e7c39f7434",
            },
          }
        )

        const data = await res.json()
        const allMatches: Match[] = data.matches || []

        const filtered = allMatches.filter(
          (m) => m.homeTeam?.name && m.awayTeam?.name
        )

        const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 10)

        setMatches(random)
      } catch (err) {
        console.error("Failed to fetch matches", err)
      }
    }

    fetchMatches()
  }, [])

  if (matches.length === 0) {
    return null
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden py-2">
      <div className="marquee whitespace-nowrap flex gap-8 animate-marquee">
        {matches.map((match, i) => {
          const time = new Date(match.utcDate).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })

          const score = match.score.fullTime
          const hasScore =
            typeof score.home === "number" && typeof score.away === "number"

          return (
            <div key={i} className="inline-block">
              <span className="text-sm">
                {time} – {match.homeTeam.name} vs {match.awayTeam.name}
                {hasScore && ` (${score.home}:${score.away})`}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
