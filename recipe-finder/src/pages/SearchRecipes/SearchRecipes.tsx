import { useState } from "react";
import SearchRecipeForm from "./SearchRecipeForm";
import SearchRecipeResults from "./SearchRecipeResults";

export default function SearchRecipe() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="mt-4 px-6 lg:px-30">
      <SearchRecipeForm onSearch={(query => setSearchQuery(query))} />
      <SearchRecipeResults query={searchQuery} />
    </main>
  )
}