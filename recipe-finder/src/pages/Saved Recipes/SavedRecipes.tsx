import SavedRecipesList from "./SavedRecipesList";
import SavedRecipesTop from "./SavedRecipesTop";

export default function SavedRecipes() {
  return (
    <main className="saved-recipes px-6 py-4 mt-4 md:px-16 lg:px-30">
      <SavedRecipesTop />
      <SavedRecipesList />
    </main>
  )
}