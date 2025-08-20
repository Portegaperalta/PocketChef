import SavedRecipeCard from "@/components/SavedRecipeCard"

type Recipe = {
  id: number,
  title: string,
  image: string,
  spoonacularScore?: number,
  ingredientsSumary?: string,
  BenefitSummary?: string,
}

export default function SavedRecipesList() {
  return (
    <div className="saved-recipes-list">
      <ul id="savedRecipesList" className="flex flex-col gap-6">

      </ul>
    </div>
  )
}