"use client"

import { ChevronRight, LucideIcon } from "lucide-react"

interface ServiceType {
  id: string
  name: string
  icon: LucideIcon
  description: string
  avgPrice: { low: number; high: number }
  color: string
  bgColor: string
}

interface ServiceTypeSelectorProps {
  services: ServiceType[]
  onSelectService: (serviceId: string) => void
}

export function ServiceTypeSelector({ services, onSelectService }: ServiceTypeSelectorProps) {
  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-6">
          <h1 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
            Find Services
          </h1>
          <p className="text-muted-foreground">
            Compare prices from verified shops near you.
          </p>
        </div>

        {/* Fair price info */}
        <div className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <h3 className="mb-1 font-semibold text-primary">Know Before You Go</h3>
          <p className="text-sm text-muted-foreground">
            We show you the fair market price range so you never overpay.
          </p>
        </div>

        {/* Service types */}
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="flex w-full items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:border-primary/50"
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${service.bgColor}`}>
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-0.5 font-semibold">{service.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-sm font-medium">
                    ${service.avgPrice.low}-${service.avgPrice.high}
                  </div>
                  <div className="text-xs text-muted-foreground">avg</div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
