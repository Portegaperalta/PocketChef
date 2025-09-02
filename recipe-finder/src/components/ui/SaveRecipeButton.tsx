import FetchRecipeById from '@/api/FetchRecipeById';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'motion/react'

type Props = {
  id: number
}

export default function SaveRecipeButton(props: Props) {
  const [isRecipeSaved, setIsRecipeSaved] = useState(false)
  const [buttonBackground, setButtonBackground] = useState(false)

  const savedRecipes = JSON.parse(sessionStorage.getItem('savedRecipes') || "[]")

  const saveRecipe = async () => {
    const recipeData = await FetchRecipeById(props.id)
    if (recipeData != null) {
      savedRecipes.push(recipeData)
      sessionStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
    }
  }

  const HandleButtonClick = async () => {
    setButtonBackground(!buttonBackground)
    await saveRecipe()
    toast("Recipe saved")
  }

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <div
        onClick={HandleButtonClick}
        title='Save recipe'
        className={`save-recipe-button cursor-pointer`}>
        <Bookmark color='#F6B100' fill={buttonBackground ? `#F6B100` : `transparent`} />
      </div>
    </motion.div>
  )
}