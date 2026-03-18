"use client"

import { BookOpen, DollarSign, Trophy, Wrench } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Learn the Basics",
    description: "Bite-sized lessons on everything from tire changes to engine diagnostics.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    title: "Know Fair Prices",
    description: "See what services should actually cost before you walk into any shop.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Trophy,
    title: "Level Up",
    description: "Earn XP, unlock badges, and track your journey from newbie to pro.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Wrench,
    title: "Find Trusted Shops",
    description: "Compare prices from verified mechanics in your area. Book with confidence.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
          Everything you need
        </h2>
        <p className="mb-8 text-muted-foreground">
          One app to learn, save money, and find reliable service.
        </p>

        <div className="grid gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.bgColor}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
