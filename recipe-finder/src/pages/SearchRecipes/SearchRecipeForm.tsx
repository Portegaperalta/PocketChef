import { Search } from "lucide-react"
import { useState, useEffect, type ChangeEvent } from "react"

export default function SearchRecipeForm() {

  return (
    <section className="search-recipe-form hidden md:inline-block">
      <div className="search-recipe-form-content">
        <form
          action="#"

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