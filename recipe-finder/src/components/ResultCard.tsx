import SaveRecipeButton from './ui/SaveRecipeButton'
import { Link } from 'react-router'

type ResultCardProps = {
  id: number,
  Name: string,
  IngredientsSummary?: string,
  BenefitSummary?: string,
  image?: string,
}

export default function ResultCard(props: ResultCardProps) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-once="true"
      className="result-card py-2 px-4 flex gap-4 items-center
      group justify-between bg-(--clr-white) w-full max-w-120 
      shadow-lg rounded-lg h-full lg:max-w-160">
      <div className="benefit-recipe-img">
        <img className='w-full max-w-26 lg:max-w-50 rounded-md' src={props.image} alt={`${props.Name} image`} />
      </div>
      <div className="benefit-recipe-info lg:basis-130 flex 
           items-center">
        <div className="result-card-text">
          <Link to={`/recipe/${props.id}`}
            className='flex flex-col gap-2'>
            <h3 className='benefit-recipe-title text-(--clr-secondary) 
              font-[600] mb-1 group-hover:text-(--clr-primary) duration-75 ease-in-out lg:text-[1.3rem] lg:font-[700]'>
              {props.Name}
            </h3>
            <p className='text-(--clr-quick-silver) text-[1.1rem] 
               font-[500]'>
              {props.IngredientsSummary}
            </p>
          </Link>
        </div>
      </div>
      <div className="result-card-options">
        <SaveRecipeButton id={props.id} />
      </div>
    </div>
  )
}