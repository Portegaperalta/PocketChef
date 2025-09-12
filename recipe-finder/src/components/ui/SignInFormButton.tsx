import { Button } from "./button";
import { motion } from 'motion/react'

interface SignInFormButtonProps {
  loading?: boolean;
}

export default function SignInFormButton({ loading = false }: SignInFormButtonProps) {
  return (
    <motion.div whileTap={loading ? {} : { scale: 0.9 }}>
      <Button type='submit'
        id="submitFormButton"
        className='text-(--clr-secondary) text-[1.1rem] font-[500] 
      px-4 bg-(--clr-primary) cursor-pointer hover:text-(--clr-white) 
      hover:bg-(--clr-primary)'
      >
        {
          loading ? `Signing In...` : `Sign In`
        }
      </Button>
    </motion.div>
  )
}