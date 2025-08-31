import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginForm() {
  const [passwordInput, setPasswordInput] = useState("")
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

  return (
    <section className="login-form mt-8">
      <form id="loginForm" className="flex flex-col gap-4">
        <div className="username-input py-2 px-4 flex flex-row 
        items-center border-2 border-(--clr-secondary) rounded-md">
          <input type="text"
            id="username"
            placeholder="Username"
            autoComplete="off"
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="password-input py-2 px-2 flex flex-row 
        items-center border-2 border-(--clr-secondary) rounded-md">
          <input type="password"
            id="userPassword"
            placeholder="Password"
            autoComplete="off"
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
      </form>
    </section>
  )
}