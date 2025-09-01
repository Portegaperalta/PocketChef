import SignInFormButton from '@/components/ui/SignInFormButton';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginForm() {
  const [_passwordInput, setPasswordInput] = useState("")
  const [isPasswordVisible, SetIsPasswordVisible] = useState(false)

  const updatePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
  }

  const showPassword = () => {
    SetIsPasswordVisible(true)
  }

  const hidePassword = () => {
    SetIsPasswordVisible(false)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="login-form mt-8 w-full">
      <form
        id="signInForm"
        action="#"
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-6 items-center">
        <div className="username-input py-2 px-4 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md
         w-full max-w-90 lg:max-w-100">
          <input type="text"
            id="username"
            placeholder="Username"
            autoComplete="off"
            required
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="password-input py-2 px-2 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md 
         w-full max-w-90 lg:max-w-100">
          <input type={`${isPasswordVisible ? `text` : `password`}`}
            id="userPassword"
            placeholder="Password"
            autoComplete="off"
            required
            onChange={updatePasswordInput}
            className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
          />
          <div
            onClick={showPassword}
            className={`show-password-btn ${isPasswordVisible ? `hidden` : `inline-block`} 
            cursor-pointer`}>
            <Eye />
          </div>
          <div
            onClick={hidePassword}
            className={`hide-password-btn hidden ${isPasswordVisible ? `inline-block` : `hidden`} 
            cursor-pointer`}>
            <EyeOff />
          </div>
        </div>
        <div className="submit-form-button text-center">
          <SignInFormButton />
        </div>
      </form>
    </section>
  )
}