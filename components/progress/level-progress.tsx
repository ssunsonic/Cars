"use client"

import { Star } from "lucide-react"

const currentXP = 475
const levelXP = 1000
const level = 3

export function LevelProgress() {
  const progress = (currentXP / levelXP) * 100

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Current Level</div>
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Level {level}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
            {currentXP}
          </div>
          <div className="text-sm text-muted-foreground">/ {levelXP} XP</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2 h-3 overflow-hidden rounded-full bg-secondary">
        <div 
          className="h-full rounded-full bg-primary transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        {levelXP - currentXP} XP to Level {level + 1}
      </p>
    </div>
  )
}
