"use client"

import { useState } from "react"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { CTASection } from "@/components/landing/cta-section"
import { MobileNav } from "@/components/mobile-nav"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
