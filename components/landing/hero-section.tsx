"use client"

import { ArrowRight, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12">
      {/* Background gradient effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-lg">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
            Gearhead
          </span>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-primary">Never get scammed again</span>
        </div>

        {/* Main headline */}
        <h1 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-balance">
          Car maintenance,{" "}
          <span className="text-primary">decoded.</span>
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
          Learn the skills every car owner needs. Find fair prices. 
          Level up from clueless to confident.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="w-full text-base font-semibold">
            <Link href="/learn">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full text-base">
            <Link href="/services">
              Find Services Near Me
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-4">
          <div className="text-center">
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground">Skills to learn</div>
          </div>
          <div className="text-center border-x border-border">
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-accent">$420</div>
            <div className="text-xs text-muted-foreground">Avg. saved/year</div>
          </div>
          <div className="text-center">
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">10K+</div>
            <div className="text-xs text-muted-foreground">Verified shops</div>
          </div>
        </div>
      </div>
    </section>
  )
}
