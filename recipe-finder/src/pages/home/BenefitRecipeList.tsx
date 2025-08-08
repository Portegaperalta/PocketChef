import BenefitRecipeCard from "../../components/BenefitRecipeCard"
import MungBeanSaladImage from "../../images/mung-salad-img.png"
import PastaSaladImage from "../../images/pasta-salad-img.png"
import TunaSaladImage from "../../images/tuna-salad-img.png"
import CaesarSaladImage from "../../images/caesar-salad-img.png"

type recipeWithBenefit = {
  id: number,
  Name: string,
  Feature: string,
  Rating: number,
  ImageUrl: string
}

const recipesWithBenefits: recipeWithBenefit[] = [
  {
    id: 1,
    Name: "Mung Bean Salad",
    Feature: "Reduces Chronic Disease Risk",
    Rating: 4.3,
    ImageUrl: MungBeanSaladImage,
  },
  {
    id: 2,
    Name: "Pasta Salad",
    Feature: "Protects against cancer",
    Rating: 4.1,
    ImageUrl: PastaSaladImage,
  },
  {
    id: 3,
    Name: "Tuna salad",
    Feature: "Helps with Blood Pressure",
    Rating: 4.8,
    ImageUrl: TunaSaladImage,
  },
  {
    id: 4,
    Name: "Mung Bean Salad",
    Feature: "Reduces Chronic Disease Risk",
    Rating: 4.3,
    ImageUrl: MungBeanSaladImage,
  },
  {
    id: 5,
    Name: "Caesar Salad",
    Feature: "Boosts Immunity System",
    Rating: 3.4,
    ImageUrl: CaesarSaladImage,
  }
]

export default function BenefitRecipeList() {
  return (
    <div className="benefit-recipe-list flex flex-col gap-6 
    md:gap-6 lg:gap-12">
      {
        recipesWithBenefits.map((recipe) => (
          <BenefitRecipeCard
            key={recipe.id}
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