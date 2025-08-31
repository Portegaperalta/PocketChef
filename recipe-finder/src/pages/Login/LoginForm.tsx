import { Eye } from 'lucide-react';

export default function LoginForm() {
  return (
    <section className="login-form mt-8">
      <form id="loginForm" className="flex flex-col gap-4">
        <div className="username-input">
          <input type="text"
            id="username"
            placeholder="Username"
            autoComplete="off"
            className="text-(--clr-secondary) text-[1.1rem] border-2 border-(--clr-secondary) 
            py-2 px-1 rounded-md outline-none w-full"
          />
        </div>
        <div className="password-input">
          <input type="password"
            id="userPassword"
            placeholder="Password"
            autoComplete="off"
            className="text-(--clr-secondary) text-[1.1rem] border-2 border-(--clr-secondary) 
            py-2 px-1 rounded-md outline-none w-full"
          />
        </div>
      </form>
    </section>
  )
}