import { Button } from "./button"
import { motion } from 'motion/react'

interface SignUpFormButtonProps {
  loading?: boolean
}

export default function SignUpFormButton({ loading }: SignUpFormButtonProps) {
  return (
    <motion.div whileTap={loading ? {} : { scale: 0.9 }}>
      <Button
        id="submitFormButton"
        type='submit'
        disabled={loading}
        className='text-(--clr-secondary) text-[1.1rem] font-[500] 
        px-4 bg-(--clr-primary) cursor-pointer hover:text-(--clr-white) 
        hover:bg-(--clr-primary)'
      >
        {loading ? 'Signing Uo...' : 'Sign Up'}
      </Button>
    </motion.div>
  )
}