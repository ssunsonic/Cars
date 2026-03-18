"use client"

import { ArrowLeft, Info, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceType {
  id: string
  name: string
  icon: LucideIcon
  description: string
  avgPrice: { low: number; high: number }
  color: string
  bgColor: string
}

interface PriceComparisonProps {
  service: ServiceType
  onBack: () => void
}

export function PriceComparison({ service, onBack }: PriceComparisonProps) {
  return (
    <div className="border-b border-border bg-card px-4 py-4">
      <div className="mx-auto max-w-lg">
        {/* Back button and title */}
        <div className="mb-4 flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onBack}
            className="h-9 w-9"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Go back</span>
          </Button>
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${service.bgColor}`}>
              <service.icon className={`h-5 w-5 ${service.color}`} />
            </div>
            <div>
              <h1 className="font-semibold">{service.name}</h1>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </div>

        {/* Price range visualization */}
        <div className="rounded-xl border border-border bg-background p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Fair price range</span>
            <Button variant="ghost" size="sm" className="h-7 px-2">
              <Info className="mr-1 h-3.5 w-3.5" />
              <span className="text-xs">How we calculate</span>
            </Button>
          </div>
          
          <div className="mb-2 flex items-end justify-between">
            <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">
              ${service.avgPrice.low}
            </span>
            <span className="text-muted-foreground">to</span>
            <span className="font-[family-name:var(--font-display)] text-3xl font-bold">
              ${service.avgPrice.high}
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-1/3 rounded-full bg-primary" />
          </div>
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>Best deals</span>
            <span>Dealership prices</span>
          </div>
        </div>
      </div>
    </div>
  )
}
