import { CircleCheck } from 'lucide-react'
import SaveRecipeButton from './ui/SaveRecipeButton'

type ResultCardProps = {
  Name: string,
  IngredientsSummary?: string,
  BenefitSummary?: string,
  image?: string,
}

export default function ResultCard(props: ResultCardProps) {
  return (
    <div className="result-card py-2 px-4 flex gap-4 items-center
     justify-between bg-(--clr-white) w-full max-w-120 shadow-lg rounded-lg
     lg:max-w-160
     ">
      <div className="benefit-recipe-img">
        <img className='w-full max-w-26 lg:max-w-50 rounded-md' src={props.image} alt={`${props.Name} image`} />
      </div>
      <div className="benefit-recipe-info lg:basis-130 flex 
      items-center">
        <div className="result-card-text">
          <a
            className='flex flex-col gap-2'
            href="#">
            <h3 className='benefit-recipe-title text-(--clr-secondary) 
              font-[600] mb-1 lg:text-[1.3rem] lg:font-[700]'>
              {props.Name}
            </h3>
            <p className='text-(--clr-quick-silver) text-[1.1rem] 
          font-[500]'>
              {props.IngredientsSummary}
            </p>
          </a>
        </div>
      </div>
      <div className="result-card-options">
        <SaveRecipeButton />
      </div>
    </div>
  )
}