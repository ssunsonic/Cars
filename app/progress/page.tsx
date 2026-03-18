"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { ProfileHeader } from "@/components/progress/profile-header"
import { StatsGrid } from "@/components/progress/stats-grid"
import { LevelProgress } from "@/components/progress/level-progress"
import { BadgeGrid } from "@/components/progress/badge-grid"
import { StreakCard } from "@/components/progress/streak-card"
import { RecentActivity } from "@/components/progress/recent-activity"

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("progress")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-20">
        <ProfileHeader />
        <div className="px-4 py-6">
          <div className="mx-auto max-w-lg space-y-6">
            <LevelProgress />
            <StatsGrid />
            <StreakCard />
            <BadgeGrid />
            <RecentActivity />
          </div>
        </div>
      </main>
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
