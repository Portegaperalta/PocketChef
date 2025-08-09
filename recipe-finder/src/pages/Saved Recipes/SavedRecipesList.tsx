type recipe = {
  id: string,
  name: string,
  image: string,
  Rating?: number,
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