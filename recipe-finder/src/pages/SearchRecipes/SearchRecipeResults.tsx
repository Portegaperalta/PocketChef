import ResultCard from "../../components/ResultCard";
import { useState, useEffect, type ChangeEvent } from "react"
import { fetchSearchResults } from "../../api/spoonacularResults";

type Recipe = {
  id: number,
  title: string,
  imageUrl: string,
  imageType: string,
}

export default function SearchRecipeResults() {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const handleSearch = async () => {
    try {
      const data = await fetchSearchResults("potato")
      setRecipes(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="search-recipe-results mt-10 mb-40">
      <div className="" onClick={handleSearch}><p>search</p></div>
      <div className="search-recipe-results-feed flex flex-col gap-8">
        {
          recipes.map((recipe) => (
            <ResultCard
              key={recipe.id}
              Name={recipe.title}
            />
          ))
        }
      </div>
    </section>
  )
}