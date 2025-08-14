import { useEffect, useState } from 'react'
import DOMPurify from "dompurify"
import FetchRecipeById from '@/api/FetchRecipeById'
import { Skeleton } from "@/components/ui/skeleton"

type Ingredient = {
  id: number,
  aisle: string,
  image: string,
  consistency: string,
  name: string,
  nameClean: string,
  original: string,
  originalName: string,
  amount: number,
  unit: string,
  meta: [],
  measures: {
    us: {
      amount: number,
      unitShort: string,
      unitLong: string
    },
    metric: {
      amount: number,
      unitShort: string,
      unitLong: string,
    }
  }
}

export default function RecipeInfo() {

  const [recipeInfo, setRecipeInfo] = useState<any>(null)

  useEffect(() => {
    const giveRecipeInfo = async () => {
      const recipeData = await FetchRecipeById(649195)
      setRecipeInfo(recipeData)
      console.log(recipeInfo)
    }
    giveRecipeInfo()
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
          <div className="recipe-info-name">
            <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
              {recipeInfo.title}
            </h2>
          </div>
        </div>
        <div className="recipe-info-middle mt-6 md:flex-col md:space-y-10">
          <div className="recipe-info-image-summary flex flex-col gap-6 md:gap-14 md:flex-row">
            <img
              src={recipeInfo.image}
              alt="recipe image"
              className='shadow-md w-full max-w-100 lg:max-w-120 rounded-md'
            />
            <div className="">
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipeInfo.summary) }}
                className='text-(--clr-secondary) text-[1.1rem]/8 text-justify
                 md:text-[1.2rem]/10 md:w-full md:max-w-200'
              ></p>
            </div>
          </div>
          <div className="recipe-info-more mt-4 flex flex-col space-y-4">
            <div className="recipe-info-orginal">
              <a href={`${recipeInfo.sourceUrl}`}
                className='text-[1.2rem] underline hover:text-(--clr-primary) duration-100 ease-in-out'
              >
                Full Instructions Here
              </a>
            </div>
            <div className="recipe-info-ingredients">
              <h3 className='text-(--clr-secondary) text-[1.2rem]
              font-[500] md:text-[1.6rem]'>
                Ingredients:
              </h3>
              <ul className='mt-2 flex flex-col gap-2 list-disc pl-4'>
                {
                  recipeInfo.extendedIngredients.map((ingredient: Ingredient) => (
                    <li key={ingredient.id} className='text-(--clr-secondary) text-[1rem] font-[500]
                     md:text-[1.1rem]'>
                      {ingredient.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}