import RatingLabel from './ui/RatingLabel'
import AOS from 'aos';
import 'aos/dist/aos.css';
import transformScore from '@/utils/transformScore';
import { Link } from 'react-router';

type BenefitRecipeCardProps = {
  id: number,
  Name: string,
  rating: number,
  ImageUrl: string,
}

AOS.init();

export default function BenefitRecipeCard(props: BenefitRecipeCardProps) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
      className="benefit-recipe-card py-2 px-4 flex gap-4 items-center 
        bg-(--clr-white) shadow-lg rounded-lg">
      <div className="benefit-recipe-image py-1">
        <img src={props.ImageUrl}
          alt="benefit recipe image"
          className='w-full max-w-25 h-15 rounded-md md:max-w-26 md:h-18 
            lg:max-w-40 lg:h-20'
        />
      </div>
      <div className="benefit-recipe-info lg:basis-130 flex items-center">
        <Link to={`/Recipe-with-benefits/${props.id}`}>
          <div className="benefit-recipe-text">
            <h3 className='benefit-recipe-title text-(--clr-secondary) 
          font-[600] mb-1 lg:text-[1.4rem] lg:font-[700]'>
              {props.Name}
            </h3>
          </div>
        </Link>
      </div>
      <div className="benefit-recipe-rating hidden lg:inline-block">
        <RatingLabel rating={transformScore(props.rating)} />
      </div>
    </div>
  )
}