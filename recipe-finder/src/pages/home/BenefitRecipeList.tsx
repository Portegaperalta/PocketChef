import { Skeleton } from "@/components/ui/skeleton"
import BenefitRecipeCard from "../../components/BenefitRecipeCard"
import MungBeanSaladImage from "../../images/mung-salad-img.png"
import PastaSaladImage from "../../images/pasta-salad-img.png"
import TunaSaladImage from "../../images/tuna-salad-img.png"
import CaesarSaladImage from "../../images/caesar-salad-img.png"
import { useEffect, useState } from "react"
import FetchRecipesWithBenefits from "@/api/FetchRecipesWithBenefits"

type recipeWithBenefit = {
  id: number,
  title: string,
  Feature: string,
  Rating: number,
  image: string
}

const recipesWithBenefits: recipeWithBenefit[] = [
  {
    id: 1,
    title: "Mung Bean Salad",
    Feature: "Reduces Chronic Disease Risk",
    Rating: 4.3,
    image: MungBeanSaladImage,
  },
  {
    id: 2,
    title: "Pasta Salad",
    Feature: "Protects against cancer",
    Rating: 4.1,
    image: PastaSaladImage,
  },
  {
    id: 3,
    title: "Tuna salad",
    Feature: "Helps with Blood Pressure",
    Rating: 4.8,
    image: TunaSaladImage,
  },
  {
    id: 4,
    title: "Mung Bean Salad",
    Feature: "Reduces Chronic Disease Risk",
    Rating: 4.3,
    image: MungBeanSaladImage,
  },
  {
    id: 5,
    title: "Caesar Salad",
    Feature: "Boosts Immunity System",
    Rating: 3.4,
    image: CaesarSaladImage,
  }
]

export default function BenefitRecipeList() {
  const [recipes, setRecipes] = useState<any>(null)

  const getRecipes = async () => {
    const data = await FetchRecipesWithBenefits()
    setRecipes(data)
    console.log(data)
  }

  useEffect(() => {
    getRecipes()
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
    <div className="benefit-recipe-list flex flex-col gap-6 
    md:gap-6 lg:gap-12">
      {
        recipes.map((recipe: recipeWithBenefit) => (
          <BenefitRecipeCard
            key={recipe.id}
            Name={recipe.title}
            Feature={recipe.Feature}
            Rating={recipe.Rating}
            ImageUrl={recipe.image}
          />
        ))
      }
    </div>
  )
}