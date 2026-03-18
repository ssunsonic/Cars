"use client"

const steps = [
  {
    number: "01",
    title: "Pick a skill",
    description: "Choose from categories like tires, oil, brakes, or electrical.",
  },
  {
    number: "02",
    title: "Learn & practice",
    description: "Watch quick videos, read guides, and test your knowledge with quizzes.",
  },
  {
    number: "03",
    title: "Earn XP & badges",
    description: "Track your progress and unlock achievements as you master new skills.",
  },
  {
    number: "04",
    title: "Find fair service",
    description: "When you need help, compare prices from verified shops nearby.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-secondary/50 px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-8 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
          How it works
        </h2>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-[23px] top-8 h-[calc(100%-64px)] w-px bg-border" />
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-4">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="mb-1 font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
