import { Share2 } from "lucide-react"
import { motion } from 'motion/react'

export default function ShareRecipeButton() {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <div className="share-recipe-button cursor-pointer" title="Share recipe">
        <Share2 color="#F6B100" />
      </div>
    </motion.div>
  )
}