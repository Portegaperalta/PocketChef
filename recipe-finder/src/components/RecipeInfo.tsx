import recipeImage from '../images/weekly-pick-img.jpg'

const recipe = {
  name: "Tuna Salad",
  ingredients: ["Tuna", "Beans", "Cabbage"],
  image: recipeImage,
}

export default function RecipeInfo() {
  return (
    <main className="mt-10 px-6 lg:px-30">
      <div className="recipe-info-content">
        <div className="recipe-info-top">
          <div className="recipe-info-name">
            <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
              {recipe.name}
            </h2>
          </div>
        </div>
        <div className="recipe-info-middle mt-6 md:flex md:gap-10">
          <div className="recipe-info-image">
            <img
              src={recipe.image}
              alt="recipe image"
              className='w-full max-w-100 lg:max-w-120 rounded-md'
            />
          </div>
          <div className="recipe-info-more mt-4">
            <div className="recipe-info-ingredients">
              <h3 className='text-(--clr-secondary) text-[1.2rem]
              font-[500] md:text-[1.6rem]'>
                Ingredients:
              </h3>
              <ul className='mt-2 flex flex-col gap-2 list-disc pl-4'>
                <li className='text-(--clr-secondary) text-[1rem] font-[500]
                md:text-[1.1rem]'>
                  Tuna
                </li>
                <li className='text-(--clr-secondary) text-[1rem] font-[500]
                md:text-[1.1rem]'>
                  Beans
                </li>
                <li className='text-(--clr-secondary) text-[1rem] font-[500]
                md:text-[1.1rem]'>
                  Cabbage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}