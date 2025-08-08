import SearchRecipeForm from "./SearchRecipeForm";
import SearchRecipeResults from "./SearchRecipeResults";

export default function SearchRecipe() {
  return (
    <main className="mt-4 px-6 lg:px-30">
      <SearchRecipeForm />
      <SearchRecipeResults />
    </main>
  )
}