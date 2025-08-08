import BenefitRecipeCard from "../../components/BenefitRecipeCard"
import MungBeanSaladImage from "../../images/mung-salad-img.png"
import PastaSaladImage from "../../images/pasta-salad-img.png"
import TunaSaladImage from "../../images/tuna-salad-img.png"
import CaesarSaladImage from "../../images/caesar-salad-img.png"

type recipeWithBenefit = {
  Name: string,
  Feature: string,
  Rating: number,
  ImageUrl: string
}

const recipesWithBenefits: recipeWithBenefit[] = [
  {
    Name: "Mung Bean Salad",
    Feature: "Reduces Chronic Disease Risk",
    Rating: 4.3,
    ImageUrl: MungBeanSaladImage,
  },
  {
    Name: "Pasta Salad",
    Feature: "Protects against cancer",
    Rating: 4.1,
    ImageUrl: PastaSaladImage,
  },
  {
    Name: "Tuna salad",
    Feature: "Helps with Blood Pressure",
    Rating: 4.8,
    ImageUrl: TunaSaladImage,
  },
  {
    Name: "Mung Bean Salad",
    Feature: "Reduces Chronic Disease Risk",
    Rating: 4.3,
    ImageUrl: MungBeanSaladImage,
  },
  {
    Name: "Caesar Salad",
    Feature: "Boosts Immunity System",
    Rating: 3.4,
    ImageUrl: CaesarSaladImage,
  }
]

export default function BenefitRecipeList() {
  return (
    <div className="benefit-recipe-list flex flex-col gap-4 md:gap-6 lg:gap-8">
      {
        recipesWithBenefits.map((recipe) => (
          <BenefitRecipeCard
            recipeName={recipe.Name}
            recipeFeature={recipe.Feature}
            recipeRating={recipe.Rating}
            recipeImageUrl={recipe.ImageUrl}
          />
        ))
      }
    </div>
  )
}