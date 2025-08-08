import RecipeCard from "../../components/RecipeCard";

export default function HomeHealthyRecipes() {
  return (
    <section className="home-healthy-recipes">
      <div className="healthy-recipes-top">
        <div className="healthy-recipes-title">
          <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
            Healthy Recipes
          </h2>
        </div>
        <div className="healthy-recipes-links flex items-center justify-between">
          <p className="text-(--clr-primary) text-[1.4rem] font-[500]">With Features</p>
          <a href="#"
            className="text-(--clr-quick-silver) text-[1rem]"
          >
            See all
          </a>
        </div>
      </div>
      <div className="healthy-recipes-bottom flex flex-row justify-center
      md:justify-between flex-wrap">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </section>
  )
}