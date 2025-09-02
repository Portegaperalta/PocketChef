import { Share2 } from "lucide-react"
import { motion } from 'motion/react'

type Props = {
  recipeId: number,
}

export default function ShareRecipeButton(props: Props) {
  const shareData = {
    title: "PocketChef",
    text: "Check out this amazing recipe!",
    url: `https://pocketchef-seven.vercel.app/Recipe/${props.recipeId}`,
  }

  const shareRecipe = async () => {
    try {
      await navigator.share(shareData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <div title="Share recipe"
        onClick={shareRecipe}
        className="share-recipe-button cursor-pointer">
        <Share2 color="#F6B100" />
      </div>
    </motion.div>
  )
}