import SavedRecipesList from "./SavedRecipesList";

export default function SavedRecipes() {
  return (
    <main className="saved-recipes px-6 py-26 md:px-16 lg:px-30">
      <section className="saved-recipes-top">
        <div className="title">
          <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
            Saved Recipes
          </h2>
        </div>
      </section>
      <SavedRecipesList />
    </main>
  )
}