import RatingLabel from "./ui/RatingLabel";

type RecipeCardProps = {
  Name: string,
  ingredientsSumary: string,
  Rating: number,
  ImageUrl: string,
}

export default function RecipeCard(props: RecipeCardProps) {
  return (
    <a href="#">
      <div className="recipe-card">
        <div className="recipe-card-top relative pb-20">
          <div className="recipe-image absolute">
            <img src={props.ImageUrl}
              alt="recipe image"
              className=""
            />
          </div>
        </div>
        <div className="recipe-card-bottom px-4 pt-26 pb-4 flex flex-col
       shadow-lg rounded-t-full">
          <div className="recipe-card-name">
            <h3 className="text-(--clr-secondary) text-[1.4rem] font-[600]">
              {props.Name}
            </h3>
          </div>
          <div className="recipe-card-info flex flex-row items-center gap-4">
            <p className="text-(--clr-quick-silver) text-[1.1rem] font-[500]">
              {props.ingredientsSumary}
            </p>
            <RatingLabel rating={props.Rating} />
          </div>
        </div>
      </div>
    </a>
  )
}