import SavedRecipeCard from "@/components/SavedRecipeCard"
import NoSavedRecipesBg from '/images/empty-illustration.svg'
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

  if (!savedRecipes || savedRecipes.length === 0) {
    return (
      <div className="mt-10 mb-20 flex flex-col text-center items-center 
      lg:items-center">
        <img src={NoSavedRecipesBg}
          alt="No saved recipes background"
          className="w-full max-w-100"
        />
        <p className="text-(--clr-secondary) text-[1.1rem] font-[500] lg:text-[1.4rem]">
          No saved Recipes!
        </p>
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