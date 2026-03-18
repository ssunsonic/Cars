"use client"

import { useState } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { LearnHeader } from "@/components/learn/learn-header"
import { CategoryGrid } from "@/components/learn/category-grid"
import { SkillList } from "@/components/learn/skill-list"
import { categories, skills } from "@/lib/learn-data"

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("learn")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.categoryId === selectedCategory)
    : []

  const selectedCategoryData = categories.find((c) => c.id === selectedCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pb-20">
        <LearnHeader 
          selectedCategory={selectedCategoryData}
          onBack={() => setSelectedCategory(null)}
        />
        
        {selectedCategory ? (
          <SkillList 
            skills={filteredSkills} 
            categoryName={selectedCategoryData?.name || ""} 
          />
        ) : (
          <CategoryGrid 
            categories={categories} 
            onSelectCategory={setSelectedCategory} 
          />
        )}
      </main>
      <MobileNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
