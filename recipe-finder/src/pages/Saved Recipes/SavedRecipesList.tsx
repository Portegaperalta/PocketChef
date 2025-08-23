import SavedRecipeCard from "@/components/SavedRecipeCard"
import { Skeleton } from "@/components/ui/skeleton"
import getFromSessionStorage from "@/utils/getFromSessionStorage"
import { useEffect, useState } from "react"

type Recipe = {
  id: number,
  title: string,
  image: string,
  spoonacularScore?: number | undefined,
  ingredientsSumary?: string,
  BenefitSummary?: string,
}

export default function SavedRecipesList() {
  const [recipes, setRecipes] = useState<any[]>([])

  if (!recipes) {
    return (
      <div className="mt-10 mb-20">
        <div className="flex flex-col gap-6 lg:gap-12 ">
          <Skeleton className="h-[70px] w-full md:max-w-[340px] lg:max-w-[500px]" />
          <Skeleton className="h-[70px] w-full md:max-w-[340px] lg:max-w-[500px]" />
          <Skeleton className="h-[70px] w-full md:max-w-[340px] lg:max-w-[500px]" />
          <Skeleton className="h-[70px] w-full md:max-w-[340px] lg:max-w-[500px]" />
          <Skeleton className="h-[70px] w-full md:max-w-[340px] lg:max-w-[500px]" />
        </div>
      </div>
    )
  }

  return (
    <section className="saved-recipes-list mt-6">
      <ul id="savedRecipesList" className="flex flex-col gap-6">

      </ul>
    </section>
  )
}