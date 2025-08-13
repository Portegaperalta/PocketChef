import { useEffect, useState } from 'react'
import recipeImage from '../images/weekly-pick-img.jpg'
import FetchRecipeById from '@/api/FetchRecipeById'
import { Skeleton } from "@/components/ui/skeleton"

export default function RecipeInfo() {

  const [recipeInfo, setRecipeInfo] = useState(null)

  const giveRecipeInfo = async () => {
    const recipeData = await FetchRecipeById(649195)
    setRecipeInfo(recipeData)
  }

  useEffect(() => {
    console.log(recipeInfo)
  }, [])

  if (!recipeInfo) {
    return (
      <main className='mt-10 px-6 lg:px-30'>
        <div className="flex flex-col space-y-3 md:flex-row md:items-center md:gap-10">
          <div className="space-y-4">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-[200px] w-[340px] rounded-xl md:w-[400px] md:h-[240px] lg:w-[450px] lg:h-[260px]" />
          </div>
          <div className="space-y-2 md:space-y-4">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="mt-10 px-6 lg:px-30">
      <div className="recipe-info-content">
        <div className="recipe-info-top">
          <div onClick={giveRecipeInfo} className="recipe-info-name">
            <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
              Tuna Salad
            </h2>
          </div>
        </div>
        <div className="recipe-info-middle mt-6 md:flex md:gap-10">
          <div className="recipe-info-image">
            <img
              src={recipeImage}
              alt="recipe image"
              className='w-full max-w-100 lg:max-w-120 rounded-md'
            />
          </div>
          <div className="recipe-info-more mt-4">
            <div className="recipe-info-ingredients">
              <h3 className='text-(--clr-secondary) text-[1.2rem]
              font-[500] md:text-[1.6rem]'>
                Ingredients:
              </h3>
              <ul className='mt-2 flex flex-col gap-2 list-disc pl-4'>
                <li className='text-(--clr-secondary) text-[1rem] font-[500]
                md:text-[1.1rem]'>
                  Tuna
                </li>
                <li className='text-(--clr-secondary) text-[1rem] font-[500]
                md:text-[1.1rem]'>
                  Beans
                </li>
                <li className='text-(--clr-secondary) text-[1rem] font-[500]
                md:text-[1.1rem]'>
                  Cabbage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}