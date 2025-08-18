import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard";
import { Skeleton } from "@/components/ui/skeleton";
import FetchHealthyRecipes from "@/api/FetchHealthyRecipes";
import transformScore from "@/utils/transformScore";

type HealthyRecipe = {
  id: number,
  title: string,
  diets: string[]
  extendedIngredients?: any[],
  spoonacularScore: number,
  image: string,
}

/* const featuresRecipes: HealthyRecipe[] = [
  {
    id: 1,
    Name: "Keto Salad",
    ingredientsSumary: "Beans & Fruits",
    Rating: 4.5,
    ImageUrl: KetoSaladCardImg,
  },
  {
    id: 2,
    Name: "Sewers Salad",
    ingredientsSumary: "Chicken & dal",
    Rating: 4.5,
    ImageUrl: SewersSaladCardImg,
  },
  {
    id: 3,
    Name: "Keto Salad",
    ingredientsSumary: "Beans & Fruits",
    Rating: 4.5,
    ImageUrl: KetoSaladCardImg,
  },
  {
    id: 4,
    Name: "Sewers Salad",
    ingredientsSumary: "Chicken & dal",
    Rating: 4.5,
    ImageUrl: SewersSaladCardImg,
  },
] */

export default function HomeHealthyRecipes() {
  const [healthyRecipes, setHealthyRecipes] = useState<any>(null)

  const getHealthyRecipes = async () => {
    const healthyRecipesData = await FetchHealthyRecipes()
    console.log(healthyRecipesData)
    setHealthyRecipes(healthyRecipesData)
  }

  useEffect(() => {
    getHealthyRecipes()
  }, [])

  if (!healthyRecipes) {
    return (
      <div className="mt-4 md:mt-6 lg:mt-8">
        <div className="flex flex-row gap-6 lg:gap-12 md:justify-between flex-wrap">
          <Skeleton className="h-[200px] w-full rounded-t-full
           md:max-w-[340px] lg:max-w-[300px]" />
          <Skeleton className="h-[200px] w-full rounded-t-full
           md:max-w-[340px] lg:max-w-[300px]" />
          <Skeleton className="h-[200px] w-full rounded-t-full
           md:max-w-[340px] lg:max-w-[300px]" />
          <Skeleton className="h-[200px] w-full rounded-t-full
           md:max-w-[340px] lg:max-w-[300px]" />
        </div>
      </div>
    )
  }

  return (
    <section className="home-healthy-recipes mt-4 md:mt-6 lg:mt-8">
      <div className="healthy-recipes-top">
        <div className="healthy-recipes-title">
          <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
            Healthy Recipes
          </h2>
        </div>
        <div className="healthy-recipes-links flex items-center justify-between">
          <p className="text-(--clr-primary) text-[1.4rem] font-[500]">With Features</p>
          <a href="#"
            className="text-(--clr-quick-silver) text-[1rem]"
          >
            See all
          </a>
        </div>
      </div>
      <div className="healthy-recipes-bottom flex flex-row justify-center
      md:justify-between flex-wrap">
        {
          healthyRecipes.map((recipe: HealthyRecipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              extendedIngredients={recipe.extendedIngredients}
              diets={recipe.diets}
              spoonacularScore={transformScore(recipe.spoonacularScore)}
              image={recipe.image}
            />
          ))
        }
      </div>
    </section>
  )
}