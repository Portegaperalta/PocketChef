import FetchRecipeById from '@/api/FetchRecipeById';
import { Bookmark } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'motion/react'

type Recipe = {
  id: number,
  title: string,
  image: string,
  spoonacularScore: number,
  ingredientsSumary?: string,
  BenefitSummary?: string,
}

type Props = {
  id: number
}

export default function SaveRecipeButton({ id }: Props) {
  const [isRecipeSaved, setIsRecipeSaved] = useState(false)
  const [buttonBackground, setButtonBackground] = useState(false)

  const savedRecipes = JSON.parse(sessionStorage.getItem('savedRecipes') || "[]")

  const saveRecipe = async () => {
    const recipeData = await FetchRecipeById(id)
    if (recipeData != null) {
      savedRecipes.push(recipeData)
      sessionStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
      toast("Recipe saved")
    }
  }

  const unsaveRecipe = () => {
    const savedRecipeId = id
    const savedRecipeIndex = savedRecipes.findIndex((savedRecipe: any) => savedRecipe.id === savedRecipeId)
    if (savedRecipeIndex !== -1) {
      savedRecipes.splice(savedRecipeIndex, 1)
      sessionStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
      toast("Recipe Unsaved")
    }
  }

  const checkIfRecipeIsSaved = () => {
    const recipeIsSaved = savedRecipes.some((savedRecipe: Recipe) => savedRecipe.id === id)
    if (recipeIsSaved === true) {
      setIsRecipeSaved(true)
    } else {
      setIsRecipeSaved(false)
    }
  }

  const HandleButtonClick = () => {
    setButtonBackground(!buttonBackground)
    if (isRecipeSaved === false) {
      saveRecipe()
    } else {
      unsaveRecipe()
    }
  }

  useEffect(() => {
    checkIfRecipeIsSaved()
  }, [])

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <div
        onClick={HandleButtonClick}
        title={`${isRecipeSaved ? `unsave recipe` : `save recipe`}`}
        className={`save-recipe-button cursor-pointer`}>
        <Bookmark
          color='#F6B100'
          fill={(buttonBackground || isRecipeSaved) ? `#F6B100` : `transparent`}
        />
      </div>
    </motion.div>
  )
}