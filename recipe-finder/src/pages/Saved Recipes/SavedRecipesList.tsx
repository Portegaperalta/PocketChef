import SavedRecipeCard from "@/components/SavedRecipeCard"
import { Skeleton } from "@/components/ui/skeleton"
import getFromSessionStorage from "@/utils/getFromSessionStorage"
import { useEffect, useState } from "react"

type Recipe = {
  id: number,
  title: string,
  image: string,
  spoonacularScore: number,
  ingredientsSumary?: string,
  BenefitSummary?: string,
}

export default function SavedRecipesList() {
  const [savedRecipes, setSavedRecipes] = useState<any[]>([])

  useEffect(() => {
    const savedRecipesData = getFromSessionStorage('savedRecipes')
    setSavedRecipes(savedRecipesData)
  }, [])

  if (!savedRecipes) {
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
      <div id="savedRecipesList" className="flex flex-col gap-6">
        {
          savedRecipes.map((savedRecipe: Recipe) => (
            <SavedRecipeCard key={savedRecipe.id}
              id={savedRecipe.id}
              title={savedRecipe.title}
              spoonacularScore={savedRecipe.spoonacularScore}
              image={savedRecipe.image}
            />
          ))
        }
      </div>
    </section>
  )
}