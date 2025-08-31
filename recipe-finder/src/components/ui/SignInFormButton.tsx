import { Button } from "./button";


export default function SignInFormButton() {
  return (
    <Button type='submit'
      className='text-(--clr-secondary) text-[1.1rem] font-[500] 
      px-4 bg-(--clr-primary) cursor-pointer hover:text-(--clr-white) 
      hover:bg-(--clr-primary)'
    >
      Sign In
    </Button>
  )
}