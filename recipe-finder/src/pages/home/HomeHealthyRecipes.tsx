import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
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

export default function HomeHealthyRecipes() {
  const [healthyRecipes, setHealthyRecipes] = useState<any>(null)

  const getHealthyRecipes = async () => {
    const healthyRecipesData = await FetchHealthyRecipes()
    // saves fetched recipes to session storage 
    sessionStorage.setItem('healthyRecipes', JSON.stringify(healthyRecipesData))
    setHealthyRecipes(healthyRecipesData)
  }

  useEffect(() => {
    const storedHealthyRecipes = sessionStorage.getItem('healthyRecipes')
    /* checks if fetched recipes are already in session storage 
    to avoid fetching every time */
    if (storedHealthyRecipes) {
      setHealthyRecipes(JSON.parse(storedHealthyRecipes))
    } else {
      getHealthyRecipes()
    }
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
          <p className="text-(--clr-primary) text-[1.4rem] font-[500]">
            With Features
          </p>
        </div>
      </div>
      <div className="healthy-recipes-bottom w-full">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {
            healthyRecipes.map((recipe: HealthyRecipe) => (
              <SwiperSlide key={recipe.id}>
                <RecipeCard
                  id={recipe.id}
                  title={recipe.title}
                  extendedIngredients={recipe.extendedIngredients}
                  diets={recipe.diets}
                  spoonacularScore={transformScore(recipe.spoonacularScore)}
                  image={recipe.image}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}