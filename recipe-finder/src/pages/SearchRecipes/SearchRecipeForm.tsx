import { Search } from "lucide-react"
import { useState } from "react"

export default function SearchRecipeForm() {
  let [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    setSearchQuery(searchQuery = e.target.value)
    console.log(searchQuery)
  }

  return (
    <section className="search-recipe-form hidden md:inline-block">
      <div className="search-recipe-form-content">
        <form
          id="searchRecipeForm"
          action="#"
          onSubmit={handleSearch}
          className=" py-2 px-2 flex flex-row 
          items-center gap-3 w-full max-w-64 bg-(--clr-white) 
          border-2 border-(--clr-quick-silver) rounded-sm">
          <input type="text"
            placeholder="Search recipes"
            className="text-(--clr-secondary) font-[500] outline-none"
          />
          <button type="submit"
            className="cursor-pointer"
          >

            <Search color="#9F9F9F" />
          </button>
        </form>
      </div>
    </section>
  )
}