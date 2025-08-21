import FetchRecipeById from '@/api/FetchRecipeById';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';

type Props = {
  id: number
}

export default function SaveRecipeButton(props: Props) {
  const [buttonBackground, setButtonBackground] = useState(false)
  const [savedRecipe, setSavedRecipe] = useState<any>(null)

  const saveRecipe = async () => {
    const recipeData = await FetchRecipeById(props.id)
    setSavedRecipe(recipeData)
    console.log(savedRecipe)
  }

  const HandleButtonClick = () => {
    setButtonBackground(!buttonBackground)
    saveRecipe()
  }

  return (
    <div
      onClick={HandleButtonClick}
      title='Save recipe'
      className={`save-recipe-button cursor-pointer`}>
      <Bookmark color='#F6B100' fill={buttonBackground ? `#F6B100` : `transparent`} />
    </div>
  )
}