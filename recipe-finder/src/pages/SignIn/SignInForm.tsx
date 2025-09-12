import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { FirebaseError } from 'firebase/app';
import SignInFormButton from '@/components/ui/SignInFormButton';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function LoginForm(): React.FC {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): {
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
        <input type={`password`}
          id="userPassword"
          placeholder="Password"
          autoComplete="off"
          required
          className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
        />
      </div>
      <div className="submit-form-button text-center">
        <SignInFormButton />
      </div>
    </form>
  </section>
)
}