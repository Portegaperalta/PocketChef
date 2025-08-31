import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

export default function LoginForm() {
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
            className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
          />
          <div className="show-password-btn">
            <Eye />
          </div>
          <div className="hide-password-btn hidden">
            <EyeOff />
          </div>
        </div>
      </form>
    </section>
  )
}