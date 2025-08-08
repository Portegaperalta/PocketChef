import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form action="#" className=" py-2 px-2 flex flex-row items-center gap-3 bg-(--clr-white)
      rounded-sm">
        <button type="submit">
          <Search color="#9F9F9F" />
        </button>
        <input type="text"
          placeholder="Search recipes"
          className="text-(--clr-secondary) font-[500] outline-none"
        />
      </form>
    </div>
  )
}