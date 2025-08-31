import { Button } from "./button";
import { motion } from 'motion/react'

export default function SignInFormButton() {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Button type='submit'
        id="submitFormButton"
        className='text-(--clr-secondary) text-[1.1rem] font-[500] 
      px-4 bg-(--clr-primary) cursor-pointer hover:text-(--clr-white) 
      hover:bg-(--clr-primary)'
      >
        Sign In
      </Button>
    </motion.div>
  )
}