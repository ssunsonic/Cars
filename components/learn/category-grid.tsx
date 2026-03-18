"use client"

import { ChevronRight, LucideIcon } from "lucide-react"

interface Category {
  id: string
  name: string
  icon: LucideIcon
  description: string
  skillCount: number
  color: string
  bgColor: string
}

interface CategoryGridProps {
  categories: Category[]
  onSelectCategory: (categoryId: string) => void
}

export function CategoryGrid({ categories, onSelectCategory }: CategoryGridProps) {
  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-6">
          <h1 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            Learn
          </h1>
          <p className="text-muted-foreground">
            Master essential car skills, one lesson at a time.
          </p>
        </div>

        {/* Progress summary */}
        <div className="mb-6 rounded-xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Your progress</span>
            <span className="text-sm font-medium text-primary">4 / 47 skills</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div 
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(4 / 47) * 100}%` }}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="flex w-full items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${category.bgColor}`}>
                <category.icon className={`h-6 w-6 ${category.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-0.5 font-semibold">{category.name}</h3>
                <p className="truncate text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {category.skillCount}
                </span>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
