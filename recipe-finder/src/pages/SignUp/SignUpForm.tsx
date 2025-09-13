import { useState, useRef } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "@/context/AuthContext"
import SignUpFormButton from "@/components/ui/SignUpFormButton"

export default function SignUpForm() {

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current || !passwordRef.current) return;

    if (passwordRef.current.value !== passwordConfirmRef.current?.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      navigate('/SignIn');
    } catch (error: any) {
      setError(`Failed to create an account: ${error.message}`)
    }
    setLoading(false);
  }

  return (
    <section className="mt-8">
      <form
        id="signUpForm"
        action="#"
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center gap-6"
      >
        <div className="username-input py-2 px-4 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md
         w-full md:max-w-90 lg:max-w-100">
          <input type="text"
            id="username"
            placeholder="Username"
            autoComplete="off"
            minLength={1}
            required
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="email-input py-2 px-4 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md
         w-full md:max-w-90 lg:max-w-100">
          <input type="email"
            id="userEmail"
            ref={emailRef}
            placeholder="Email"
            autoComplete="on"
            required
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="password-input py-2 px-2 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md 
         w-full md:max-w-90 lg:max-w-100">
          <input
            type={`password`}
            id="userPassword"
            ref={passwordRef}
            placeholder="Password"
            minLength={8}
            autoComplete="new-password"
            required
            disabled={loading}
            className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
          />
          <div
            className={`show-password-btn hidden cursor-pointer`}>
            <Eye />
          </div>
          <div
            className={`hide-password-btn hidden cursor-pointer`}>
            <EyeOff />
          </div>
        </div>
        <div className="confirm-password-input py-2 px-2 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md 
         w-full md:max-w-90 lg:max-w-100">
          <input
            type="password"
            id="confirmUserPassword"
            ref={passwordConfirmRef}
            placeholder="Confirm Password"
            autoComplete="off"
            className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
          />
        </div>
        {/* error display */}
        {
          error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full max-w-90 lg:max-w-100'>
              {error}
            </div>
          )
        }
        <SignUpFormButton />
      </form>
    </section>
  );
}