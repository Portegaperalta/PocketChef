import { Button } from "./button"
import { motion } from 'motion/react'

export default function SignUpFormButton() {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button id="submitFormButton" type='submit'
        className='text-(--clr-secondary) text-[1.1rem] font-[500] 
      px-4 bg-(--clr-primary) cursor-pointer hover:text-(--clr-white) 
      hover:bg-(--clr-primary)'
      >
        Sign Up
      </Button>
    </motion.div>
  )
}