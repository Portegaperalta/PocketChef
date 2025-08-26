import { Skeleton } from "@/components/ui/skeleton"
import BenefitRecipeCard from "../../components/BenefitRecipeCard"
import { useEffect, useState } from "react"
import FetchRecipesWithBenefits from "@/api/FetchRecipesWithBenefits"

type recipeWithBenefit = {
  id: number,
  diet?: string
  title: string,
  spoonacularScore: number,
  image: string
}

export default function BenefitRecipeList() {
  const [recipes, setRecipes] = useState<any>(null)

  const getRecipes = async () => {
    const data = await FetchRecipesWithBenefits()
    // saves fetched recipes to session storage 
    sessionStorage.setItem('recipesWithBenefits', JSON.stringify(data))
    setRecipes(data)
  }

  useEffect(() => {
    const storedRecipesWithBenefits = sessionStorage.getItem('recipesWithBenefits')
    if (storedRecipesWithBenefits) {
      setRecipes(JSON.parse(storedRecipesWithBenefits))
    } else {
      getRecipes()
    }
  }, [])

  if (!recipes) {
    return (
      <div className="">
        <div className="flex flex-col gap-6 lg:gap-12 ">
          <Skeleton className="h-[88px] w-full md:max-w-[340px] lg:max-w-[700px]" />
          <Skeleton className="h-[88px] w-full md:max-w-[340px] lg:max-w-[700px]" />
          <Skeleton className="h-[88px] w-full md:max-w-[340px] lg:max-w-[700px]" />
          <Skeleton className="h-[88px] w-full md:max-w-[340px] lg:max-w-[700px]" />
          <Skeleton className="h-[88px] w-full md:max-w-[340px] lg:max-w-[700px]" />
        </div>
      </div>
    )
  }

  return (
    <div className="benefit-recipe-list flex flex-col gap-8 
    md:gap-8 lg:gap-12">
      {
        recipes.map((recipe: recipeWithBenefit) => (
          <BenefitRecipeCard
            key={recipe.id}
            id={recipe.id}
            Name={recipe.title}
            rating={recipe.spoonacularScore}
            ImageUrl={recipe.image}
          />
        ))
      }
    </div>
  )
}