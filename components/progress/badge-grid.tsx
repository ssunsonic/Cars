"use client"

import { Award, Zap, Target, Shield, Wrench, BookOpen, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const badges = [
  {
    id: "first-lesson",
    name: "First Steps",
    description: "Complete your first lesson",
    icon: Zap,
    earned: true,
    earnedDate: "2 weeks ago",
  },
  {
    id: "tire-master",
    name: "Tire Basics",
    description: "Complete 3 tire-related skills",
    icon: Target,
    earned: true,
    earnedDate: "1 week ago",
  },
  {
    id: "week-streak",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    icon: Award,
    earned: false,
    progress: "5/7 days",
  },
  {
    id: "fluid-check",
    name: "Fluid Expert",
    description: "Master all fluid checks",
    icon: Shield,
    earned: false,
    progress: "2/5 skills",
  },
  {
    id: "diy-pro",
    name: "DIY Pro",
    description: "Complete 10 skills",
    icon: Wrench,
    earned: false,
    progress: "4/10 skills",
  },
  {
    id: "bookworm",
    name: "Bookworm",
    description: "Spend 5 hours learning",
    icon: BookOpen,
    earned: true,
    earnedDate: "3 days ago",
  },
]

export function BadgeGrid() {
  const earnedCount = badges.filter((b) => b.earned).length

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold">
          Badges
        </h3>
        <span className="text-sm text-muted-foreground">
          {earnedCount} / {badges.length} earned
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {badges.map((badge) => (
          <button
            key={badge.id}
            className={cn(
              "flex flex-col items-center gap-2 rounded-xl border p-3 transition-colors",
              badge.earned
                ? "border-primary/30 bg-primary/5"
                : "border-border bg-muted/30"
            )}
          >
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full",
                badge.earned
                  ? "bg-primary/20"
                  : "bg-muted"
              )}
            >
              {badge.earned ? (
                <badge.icon className="h-6 w-6 text-primary" />
              ) : (
                <Lock className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div className="text-center">
              <div className={cn(
                "text-xs font-medium",
                !badge.earned && "text-muted-foreground"
              )}>
                {badge.name}
              </div>
              {badge.earned ? (
                <div className="text-[10px] text-muted-foreground">
                  {badge.earnedDate}
                </div>
              ) : (
                <div className="text-[10px] text-primary">
                  {badge.progress}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
