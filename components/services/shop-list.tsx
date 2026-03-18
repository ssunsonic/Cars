"use client"

import { Star, MapPin, Clock, BadgeCheck, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Shop } from "@/lib/services-data"

interface ShopListProps {
  shops: Shop[]
  serviceId: string
}

export function ShopList({ shops, serviceId }: ShopListProps) {
  // Sort shops by price for the selected service
  const sortedShops = [...shops].sort((a, b) => {
    const priceA = a.prices[serviceId]?.price ?? Infinity
    const priceB = b.prices[serviceId]?.price ?? Infinity
    return priceA - priceB
  })

  const lowestPrice = sortedShops[0]?.prices[serviceId]?.price ?? 0

  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold">
            {shops.length} shops nearby
          </h2>
          <span className="text-sm text-muted-foreground">
            Sorted by price
          </span>
        </div>

        <div className="space-y-3">
          {sortedShops.map((shop, index) => {
            const price = shop.prices[serviceId]
            const isBestDeal = index === 0 && price?.price === lowestPrice
            
            return (
              <div
                key={shop.id}
                className={cn(
                  "rounded-xl border bg-card p-4 transition-colors",
                  isBestDeal 
                    ? "border-primary/50 ring-1 ring-primary/20" 
                    : "border-border hover:border-primary/30"
                )}
              >
                {isBestDeal && (
                  <div className="mb-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    Best Deal
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="font-semibold">{shop.name}</h3>
                      {shop.verified && (
                        <BadgeCheck className="h-4 w-4 text-primary" />
                      )}
                    </div>

                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                        {shop.rating} ({shop.reviewCount})
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {shop.distance}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{shop.nextAvailable}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    {price?.price === 0 ? (
                      <div className="font-[family-name:var(--font-display)] text-xl font-bold text-primary">
                        FREE
                      </div>
                    ) : (
                      <div className="font-[family-name:var(--font-display)] text-xl font-bold">
                        ${price?.price}
                      </div>
                    )}
                    <div className="text-xs text-muted-foreground">
                      {price?.details}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Book Now
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Affiliate disclosure */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          We may earn a commission when you book through Gearhead.
          This helps keep the app free.
        </p>
      </div>
    </div>
  )
}
