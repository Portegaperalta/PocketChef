import { useState } from "react";
import SearchRecipeForm from "./SearchRecipeForm";
import SearchRecipeResults from "./SearchRecipeResults";
import HomeMainAdd from "../home/HomeMainAdd";

export default function SearchRecipe() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="mt-4 px-6 lg:px-30">
      <SearchRecipeForm onSearch={(query => setSearchQuery(query))} />
      <div className="searh-query-title">
        <p className={`text-(--clr-secondary) text-[1.4rem] font-[600]
          mt-4 ${searchQuery === "" ? `hidden` : `inline-block`}`}>
          {`Results for: ${searchQuery}`}
        </p>
      </div>
      <SearchRecipeResults query={searchQuery} />
      <HomeMainAdd />
    </main>
  )
}