import truncateTitle from "@/utils/truncateTitle";
import RatingLabel from "./ui/RatingLabel";

type Ingredient = {
  id: number,
  name: string,
  nameClean: string,
}

type RecipeCardProps = {
  title: string,
  extendedIngredients?: Ingredient[],
  diets: string[]
  spoonacularScore: number,
  image: string,
}

export default function RecipeCard(props: RecipeCardProps) {
  return (
    <a href="#">
      <div className="recipe-card flex flex-col items-center gap-2 py-6 px-6 
      w-full max-w-70 shadow-lg rounded-t-full">
        <div className="recipe-image w-full max-w-30 rounded-full">
          <img src={props.image}
            alt="recipe image"
            className="rounded-full h-28 shadow-lg"
          />
        </div>
        <div className="recipe-card-name">
          <h3 className="text-(--clr-secondary) text-[1.4rem] 
            font-[600]">
            {truncateTitle(props.title)}
          </h3>
        </div>
        <div className="recipe-card-info flex flex-row items-center
           gap-4">
          <p className="text-(--clr-quick-silver) text-[1.1rem]
             font-[500]">
            {`${props.extendedIngredients[0].nameClean} & ${props.extendedIngredients[1].nameClean}`}
          </p>
          <RatingLabel rating={props.spoonacularScore} />
        </div>
      </div>
    </a>
  )
}