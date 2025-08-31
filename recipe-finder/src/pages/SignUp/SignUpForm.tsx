import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import SignUpFormButton from "@/components/ui/SignUpFormButton"

export default function SignUpForm() {
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
    <section className="mt-8">
      <form
        action="#"
        id="signUpForm"
        className="flex flex-col items-center gap-6"
      >
        <div className="username-input py-2 px-4 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md
         w-full md:max-w-90 lg:max-w-100">
          <input type="text"
            id="username"
            placeholder="Username"
            autoComplete="off"
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="email-input py-2 px-4 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md
         w-full md:max-w-90 lg:max-w-100">
          <input type="email"
            id="userEmail"
            placeholder="Email"
            autoComplete="on"
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="password-input py-2 px-2 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md 
         w-full md:max-w-90 lg:max-w-100">
          <input type={`${isPasswordVisible ? `text` : `password`}`}
            id="userPassword"
            placeholder="Password"
            pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
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
        <div className="confirm-password-input py-2 px-2 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md 
         w-full md:max-w-90 lg:max-w-100">
          <input type="password"
            id="confirmUserPassword"
            placeholder="Confirm Password"
            autoComplete="off"
            onChange={updatePasswordInput}
            className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
          />
        </div>
        <div className="">
          <SignUpFormButton />
        </div>
      </form>
    </section>
  )
}