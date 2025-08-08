import { CircleCheck } from 'lucide-react'
import RatingLabel from './ui/RatingLabel'

type BenefitRecipeCardProps = {
  recipeName: string,
  recipeFeature: string,
  recipeRating: number,
  recipeImageUrl: string
}

export default function BenefitRecipeCard(props: BenefitRecipeCardProps) {
  return (
    <div className="benefit-recipe-card py-2 px-4 flex gap-4 items-center 
     bg-(--clr-white) shadow-lg rounded-lg">
      <div className="benefit-recipe-image py-1">
        <img src={props.recipeImageUrl}
          alt="benefit recipe image"
          className='w-full max-w-25 h-15 md:max-w-26 md:h-18 lg:max-w-40 lg:h-20'
        />
      </div>
      <div className="benefit-recipe-info lg:basis-130 flex items-center">
        <div className="benefit-recipe-text">
          <h3 className='benefit-recipe-title text-(--clr-secondary) 
          font-[600] mb-1 lg:text-[1.4rem] lg:font-[700]'>
            {props.recipeName}
          </h3>
          <p className='text-(--clr-primary) text-[.9rem] font-[500] flex 
          gap-1 items-center md:text-[1rem] lg:text-[1.1rem] '>
            <CircleCheck />{props.recipeFeature}
          </p>
        </div>
      </div>
      <div className="benefit-recipe-rating hidden lg:inline-block">
        <RatingLabel rating={props.recipeRating} />
      </div>
    </div>
  )
}