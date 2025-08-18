import ResultCard from "../../components/ResultCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect, } from "react"
import { fetchSearchResults } from "../../api/spoonacularResults";

type Recipe = {
  id: number,
  title: string,
  image: string,
  imageType: string,
}

type Props = {
  query: string
}

export default function SearchRecipeResults({ query }: Props) {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const handleSearch = async () => {
    try {
      const data = await fetchSearchResults(query)
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (query) {
      handleSearch()
    }
  }, [query])

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
    <section className="search-recipe-results mt-10 mb-20">
      <div className="search-recipe-results-feed flex flex-col gap-8">
        {
          recipes.map((recipe) => (
            <ResultCard
              key={recipe.id}
              id={recipe.id}
              Name={recipe.title}
              image={recipe.image}
            />
          ))
        }
      </div>
    </section>
  )
}