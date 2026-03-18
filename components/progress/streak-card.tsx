"use client"

import { Flame } from "lucide-react"
import { cn } from "@/lib/utils"

const days = [
  { day: "M", active: true },
  { day: "T", active: true },
  { day: "W", active: true },
  { day: "T", active: true },
  { day: "F", active: true },
  { day: "S", active: false },
  { day: "S", active: false },
]

export function StreakCard() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
          <Flame className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="font-semibold">5 Day Streak!</h3>
          <p className="text-sm text-muted-foreground">
            Keep learning daily to maintain your streak
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        {days.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                item.active
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {item.active && <Flame className="h-5 w-5" />}
            </div>
            <span className="text-xs text-muted-foreground">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
