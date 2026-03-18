"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-lg">
        <div className="overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground">
          <h2 className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            Ready to stop guessing?
          </h2>
          <p className="mb-6 text-primary-foreground/80">
            Join thousands of car owners who stopped overpaying and started understanding their vehicles.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="w-full font-semibold"
          >
            <Link href="/learn">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
          <p>No credit card required. Start learning today.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Support</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
