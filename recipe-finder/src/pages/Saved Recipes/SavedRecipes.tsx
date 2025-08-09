import SavedRecipesList from "./SavedRecipesList";
import SavedRecipesTop from "./SavedRecipesTop";

export default function SavedRecipes() {
  return (
    <main className="saved-recipes mt-4 px-6 lg:px-3">
      <SavedRecipesTop />
      <SavedRecipesList />
    </main>
  )
}