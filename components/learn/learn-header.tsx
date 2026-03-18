"use client"

import { ArrowLeft, Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Category {
  id: string
  name: string
  description: string
}

interface LearnHeaderProps {
  selectedCategory: Category | undefined
  onBack: () => void
}

export function LearnHeader({ selectedCategory, onBack }: LearnHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-lg items-center justify-between px-4">
        {selectedCategory ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onBack}
              className="h-9 w-9"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Go back</span>
            </Button>
            <div className="text-center">
              <h1 className="font-semibold">{selectedCategory.name}</h1>
            </div>
            <div className="w-9" /> {/* Spacer for centering */}
          </>
        ) : (
          <>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-[family-name:var(--font-display)] font-bold">
                Gearhead
              </span>
            </Link>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search skills</span>
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
