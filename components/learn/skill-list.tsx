"use client"

import { CheckCircle2, Clock, Lock, Star, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import type { Skill } from "@/lib/learn-data"

interface SkillListProps {
  skills: Skill[]
  categoryName: string
}

const difficultyColors = {
  beginner: "bg-emerald-500/10 text-emerald-500",
  intermediate: "bg-amber-500/10 text-amber-500",
  advanced: "bg-rose-500/10 text-rose-500",
}

const difficultyLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
}

export function SkillList({ skills, categoryName }: SkillListProps) {
  const completedCount = skills.filter((s) => s.completed).length

  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-lg">
        {/* Category progress */}
        <div className="mb-6 rounded-xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{categoryName} progress</span>
            <span className="text-sm font-medium text-primary">
              {completedCount} / {skills.length} completed
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div 
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(completedCount / skills.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Skills list */}
        <div className="space-y-3">
          {skills.map((skill) => (
            <Link
              key={skill.id}
              href={skill.locked ? "#" : `/learn/${skill.categoryId}/${skill.id}`}
              className={cn(
                "flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors",
                skill.locked 
                  ? "cursor-not-allowed opacity-60" 
                  : "hover:border-primary/50"
              )}
              onClick={(e) => skill.locked && e.preventDefault()}
            >
              {/* Status indicator */}
              <div className="mt-0.5 shrink-0">
                {skill.locked ? (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                    <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                ) : skill.completed ? (
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                ) : (
                  <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/30" />
                )}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className={cn(
                  "mb-1 font-medium",
                  skill.completed && "text-muted-foreground line-through"
                )}>
                  {skill.title}
                </h3>
                <p className="mb-2 text-sm text-muted-foreground line-clamp-2">
                  {skill.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-medium",
                    difficultyColors[skill.difficulty]
                  )}>
                    {difficultyLabels[skill.difficulty]}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {skill.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-primary">
                    <Star className="h-3 w-3" />
                    {skill.xp} XP
                  </span>
                </div>
              </div>

              {!skill.locked && (
                <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
