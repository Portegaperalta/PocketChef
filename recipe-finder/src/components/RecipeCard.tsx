import RatingLabel from "./ui/RatingLabel";
import RecipeImage from '../images/recipe-img1.svg'

export default function RecipeCard() {
  return (
    <div className="recipe-card">
      <div className="recipe-card-top relative pb-20">
        <div className="recipe-image absolute">
          <img src={RecipeImage} alt="recipe image" />
        </div>
      </div>
      <div className="recipe-card-bottom px-4 pt-26 pb-4 flex flex-col shadow-xl
      rounded-t-full rounded-bl-3xl rounded-br-3xl">
        <div className="recipe-card-name">
          <h3 className="text-(--clr-secondary) text-[1.4rem] font-[600]">
            Keto Salad
          </h3>
        </div>
        <div className="recipe-card-info flex flex-row items-center gap-4">
          <p className="text-(--clr-quick-silver) text-[1.1rem] font-[500]">
            Beans & fruits
          </p>
          <RatingLabel />
        </div>
      </div>
    </div>
  )
}