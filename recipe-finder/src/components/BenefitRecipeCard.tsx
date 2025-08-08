import BenefitRecipeImage from '../images/tuna-salad-img.png'
import { CircleCheck } from 'lucide-react'
import RatingLabel from './ui/RatingLabel'

export default function BenefitRecipeCard() {
  return (
    <div className="benefit-recipe-card py-2 px-4 flex gap-4 bg-(--clr-white)
    shadow-lg rounded-md">
      <div className="benefit-recipe-image">
        <img src={BenefitRecipeImage} alt="benefit recipe image" />
      </div>
      <div className="benefit-recipe-info flex items-center gap-4">
        <div className="benefit-recipe-text">
          <h3 className='benefit-recipe-title'>Tuna Salad</h3>
          <p className='text-(--clr-primary) flex gap-1'>
            <CircleCheck />Protects against cancer
          </p>
        </div>
        <div className="benefit-recipe-rating">
          <RatingLabel />
        </div>
      </div>
    </div>
  )
}