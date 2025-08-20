import SavedRecipeCard from "@/components/SavedRecipeCard"
import savedRecipes from "@/data/savedRecipes"

type recipe = {
  id: string,
  title: string,
  image: string,
  Rating?: number,
  ingredientsSumary?: string,
  BenefitSummary?: string,
}

export default function SavedRecipesList() {
  return (
    <div className="saved-recipes-list">
      <ul id="savedRecipesList" className="flex flex-col gap-6">
        {
          savedRecipes.map((savedRecipe) => (
            <SavedRecipeCard
              id={savedRecipe.id}
              title={savedRecipe.title}
              image={savedRecipe.image}
              spoonacularRating={savedRecipe.spoonacularScore}
            />
          ))
        }
      </ul>
    </div>
  )
}