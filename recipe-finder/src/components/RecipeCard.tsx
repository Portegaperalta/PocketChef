import truncateTitle from "@/utils/truncateTitle";
import RatingLabel from "./ui/RatingLabel";
import { Link } from "react-router";

type Ingredient = {
  id: number,
  name: string,
  nameClean: string,
}

type RecipeCardProps = {
  id: number,
  title: string,
  extendedIngredients?: Ingredient[],
  diets: string[]
  spoonacularScore: number,
  image: string,
}

export default function RecipeCard(props: RecipeCardProps) {
  return (
    <Link to={`/Recipe/${props.id}`}>
      <div className="recipe-card flex flex-col 
      items-center gap-2 py-6 px-6 w-full max-w-70
      shadow-md rounded-t-full">
        <div className="recipe-image w-full max-w-30 
        rounded-full">
          <img src={props.image}
            alt="recipe image"
            className="rounded-full h-28 shadow-lg"
          />
        </div>
        <div className="recipe-card-name">
          <h3 className="text-(--clr-secondary) text-[1.2rem] 
            text-center font-[600] md:text-[1.4rem]">
            {truncateTitle(props.title, 17)}
          </h3>
        </div>
        <div className="recipe-card-info flex flex-row 
        items-center gap-4">
          <p className="text-(--clr-quick-silver) text-[1.1rem]
          font-[500]">
            {`${props.diets[0]}`}
          </p>
          <RatingLabel rating={props.spoonacularScore} />
        </div>
      </div>
    </Link>
  )
}