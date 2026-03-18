"use client"

import { MapPin, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServicesHeaderProps {
  location: string
  onLocationChange: (location: string) => void
}

export function ServicesHeader({ location, onLocationChange }: ServicesHeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-[family-name:var(--font-display)] font-bold">
            Gearhead
          </span>
        </Link>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" />
          <span className="max-w-[120px] truncate">{location}</span>
        </Button>
      </div>
    </header>
  )
}
