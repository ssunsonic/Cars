"use client"

import { Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProfileHeader() {
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
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>

      {/* Profile info */}
      <div className="px-4 pb-6 pt-4">
        <div className="mx-auto flex max-w-lg items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-background">
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
              JD
            </span>
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-xl font-bold">
              Jordan Davis
            </h1>
            <p className="text-sm text-muted-foreground">
              Joined 2 weeks ago
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
