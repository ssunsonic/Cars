"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { ServicesHeader } from "@/components/services/services-header"
import { ServiceTypeSelector } from "@/components/services/service-type-selector"
import { PriceComparison } from "@/components/services/price-comparison"
import { ShopList } from "@/components/services/shop-list"
import { serviceTypes, shops } from "@/lib/services-data"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("services")
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [location, setLocation] = useState("San Francisco, CA")

  const selectedServiceData = serviceTypes.find((s) => s.id === selectedService)
  const filteredShops = selectedService 
    ? shops.filter((shop) => shop.services.includes(selectedService))
    : []

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-20">
        <ServicesHeader location={location} onLocationChange={setLocation} />
        
        {selectedService && selectedServiceData ? (
          <>
            <PriceComparison 
              service={selectedServiceData}
              onBack={() => setSelectedService(null)}
            />
            <ShopList shops={filteredShops} serviceId={selectedService} />
          </>
        ) : (
          <ServiceTypeSelector 
            services={serviceTypes}
            onSelectService={setSelectedService}
          />
        )}
      </main>
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
