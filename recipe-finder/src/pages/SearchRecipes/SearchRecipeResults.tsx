import ResultCard from "../../components/ResultCard";
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
  useEffect(() => {
    if (query) {
      handleSearch()
    }
  }, [query])

  const handleSearch = async () => {
    try {
      const data = await fetchSearchResults(query)
      setRecipes(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="search-recipe-results mt-10 mb-40">
      <div className="search-recipe-results-feed flex flex-col gap-8">
        {
          recipes.map((recipe) => (
            <ResultCard
              key={recipe.id}
              Name={recipe.title}
              image={recipe.image}
            />
          ))
        }
      </div>
    </section>
  )
}