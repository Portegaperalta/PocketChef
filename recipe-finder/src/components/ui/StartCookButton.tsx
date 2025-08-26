import { ChefHat } from 'lucide-react';

export default function StartCookButton() {
  return (
    <div className="start-cook-btn group bg-(--clr-primary) py-1.5 px-2 
    flex flex-row items-center gap-1 rounded-lg hover:bg-(--clr-primary-hover) 
    duration-200 ease-in-out cursor-pointer">
      <ChefHat color='#FFFF'
        className='hidden group-hover:inline-block duration-200 ease-in-out' />
      <p className="text-(--clr-white) font-[500]">
        Start Cook
      </p>
    </div>
  )
}