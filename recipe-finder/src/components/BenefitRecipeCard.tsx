import RatingLabel from './ui/RatingLabel'
import AOS from 'aos';
import 'aos/dist/aos.css';
import transformScore from '@/utils/transformScore';
import { Link } from 'react-router';
import truncateTitle from '@/utils/truncateTitle';
import { useState } from 'react';

type BenefitRecipeCardProps = {
  id: number,
  Name: string,
  rating: number,
  ImageUrl: string,
}

AOS.init();

export default function BenefitRecipeCard(props: BenefitRecipeCardProps) {
  return (
    <Link to={`/Recipe-with-benefits/${props.id}`} className='group'>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
        className="benefit-recipe-card py-2 px-4 flex gap-4 items-center 
        bg-(--clr-white) shadow-lg rounded-lg">
        <div className="benefit-recipe-image w-full py-10 max-w-25 rounded-md 
         bg-cover bg-no-repeat md:max-w-26 md:h-18 lg:max-w-40 lg:py-12"
          style={{ backgroundImage: `url(${props.ImageUrl})` }}
        >
        </div>
        <div className="benefit-recipe-info lg:basis-130 flex items-center">
          <div className="benefit-recipe-text">
            <h3 className="benefit-recipe-title text-(--clr-secondary) 
              font-[600] mb-1 duration-75 ease-in-out lg:text-[1.4rem]
              group-hover:text-(--clr-primary)">
              {truncateTitle(props.Name, 42)}
            </h3>
          </div>
        </div>
        <div className="benefit-recipe-rating hidden lg:inline-block">
          <RatingLabel rating={transformScore(props.rating)} />
        </div>
      </div>
    </Link>
  )
}