import { Search } from "lucide-react"
import { useState } from "react"

type Props = {
  onSearch: (query: string) => void
}

export default function SearchRecipeForm({ onSearch }: Props) {
  let [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(searchQuery = e.target.value)
  }

  const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <section className="search-recipe-form hidden md:inline-block">
      <div className="search-recipe-form-content">
        <form
          id="searchRecipeForm"
          action="#"
          onSubmit={handleFormSubmission}
          className=" py-2 px-2 flex flex-row items-center gap-3
           w-full max-w-64 bg-(--clr-white) border-2 border-(--clr-quick-silver)
          rounded-sm">
          <input type="text"
            onChange={handleSearch}
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