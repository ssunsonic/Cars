"use client"

import { CheckCircle2, Star, Trophy } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "skill",
    title: "Completed: Check Tire Pressure",
    xp: 50,
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 2,
    type: "badge",
    title: "Earned: Bookworm Badge",
    xp: 100,
    time: "3 days ago",
    icon: Trophy,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 3,
    type: "skill",
    title: "Completed: Inspect Tire Tread",
    xp: 50,
    time: "4 days ago",
    icon: CheckCircle2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    id: 4,
    type: "level",
    title: "Reached Level 3",
    xp: null,
    time: "1 week ago",
    icon: Star,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    id: 5,
    type: "skill",
    title: "Completed: Check Your Oil Level",
    xp: 50,
    time: "1 week ago",
    icon: CheckCircle2,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function RecentActivity() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h3 className="mb-4 font-[family-name:var(--font-display)] text-lg font-bold">
        Recent Activity
      </h3>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${activity.bgColor}`}>
              <activity.icon className={`h-5 w-5 ${activity.color}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{activity.title}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{activity.time}</span>
                {activity.xp && (
                  <>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-primary">+{activity.xp} XP</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
