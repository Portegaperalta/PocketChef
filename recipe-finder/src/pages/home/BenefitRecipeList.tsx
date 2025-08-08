import BenefitRecipeCard from "../../components/BenefitRecipeCard"
import MungBeanSaladImage from "../../images/mung-salad-img.png"
import PastaSaladImage from "../../images/pasta-salad-img.png"
import TunaSaladImage from "../../images/tuna-salad-img.png"
import CaesarSaladImage from "../../images/caesar-salad-img.png"

type recipeWithBenefit = {
  recipeName: string,
  recipeFeature: string,
  recipeRating: number,
  recipeImageUrl: string
}

const recipesWithBenefits: recipeWithBenefit[] = [
  {
    recipeName: "Mung Bean Salad",
    recipeFeature: "Reduces Chronic Disease Risk",
    recipeRating: 4.3,
    recipeImageUrl: MungBeanSaladImage,
  },
  {
    recipeName: "Pasta Salad",
    recipeFeature: "Protects against cancer",
    recipeRating: 4.1,
    recipeImageUrl: PastaSaladImage,
  },
  {
    recipeName: "Tuna salad",
    recipeFeature: "Helps with Blood Pressure",
    recipeRating: 4.8,
    recipeImageUrl: TunaSaladImage,
  },
  {
    recipeName: "Mung Bean Salad",
    recipeFeature: "Reduces Chronic Disease Risk",
    recipeRating: 4.3,
    recipeImageUrl: MungBeanSaladImage,
  },
  {
    recipeName: "Caesar Salad",
    recipeFeature: "Boosts Immunity System",
    recipeRating: 3.4,
    recipeImageUrl: CaesarSaladImage,
  }
]

export default function BenefitRecipeList() {
  return (
    <div className="benefit-recipe-list flex flex-col gap-4">
      {
        recipesWithBenefits.map((recipe) => (
          <BenefitRecipeCard
            recipeName={recipe.recipeName}
            recipeFeature={recipe.recipeFeature}
            recipeRating={recipe.recipeRating}
            recipeImageUrl={recipe.recipeImageUrl}
          />
        ))
      }
    </div>
  )
}