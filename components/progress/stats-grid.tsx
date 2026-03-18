"use client"

import { BookOpen, Trophy, Clock, Flame } from "lucide-react"

const stats = [
  {
    icon: BookOpen,
    value: "4",
    label: "Skills Learned",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Trophy,
    value: "3",
    label: "Badges Earned",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Clock,
    value: "2.5h",
    label: "Time Spent",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Flame,
    value: "5",
    label: "Day Streak",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-border bg-card p-4"
        >
          <div className={`mb-2 inline-flex rounded-lg p-2 ${stat.bgColor}`}>
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
          </div>
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
