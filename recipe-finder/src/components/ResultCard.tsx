import { CircleCheck } from 'lucide-react'
import AddToFavoriteButton from './ui/AddToFavoriteButton'
import SaveRecipeButton from './ui/SaveRecipeButton'

type ResultCardProps = {
  Name: string,
  IngredientsSummary: string,
  BenefitSummary: string,
}

export default function ResultCard(props: ResultCardProps) {
  return (
    <div className="result-card py-2 px-4 flex gap-4 
    items-center justify-between bg-(--clr-white) shadow-lg rounded-lg">
      <div className="benefit-recipe-info lg:basis-130 flex 
      items-center">
        <div className="result-card-text">
          <h3 className='benefit-recipe-title text-(--clr-secondary) 
              font-[600] mb-1 lg:text-[1.4rem] lg:font-[700]'>
            {props.Name}
          </h3>
          <p className='text-(--clr-quick-silver) text-[1.1rem] 
          font-[500]'>
            {props.IngredientsSummary}
          </p>
          <p className='text-(--clr-primary) text-[.9rem] font-[500] 
          flex gap-1 items-center md:text-[1rem] lg:text-[1.1rem] '>
            <CircleCheck /> {props.BenefitSummary}
          </p>
        </div>
      </div>
      <div className="result-card-options">
        <SaveRecipeButton />
      </div>
    </div>
  )
}