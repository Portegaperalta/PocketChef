import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { FirebaseError } from 'firebase/app';
import { useNavigate } from 'react-router';
import SignInFormButton from '@/components/ui/SignInFormButton';
import ShowPasswordButton from '@/components/ui/ShowPasswordButton';
import HidePasswordButton from '@/components/ui/HidePasswordButton';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/')
    } catch (error) {
      console.error(`Login error: ${error}`);
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            setError('No user found with this email');
            break;
          case 'auth/wrong-password':
            setError('Incorrect password');
            break;
          case 'auth/invalid-email':
            setError('Invalid email address');
            break;
          case 'auth/too-many-requests':
            setError('Too many failed attempts. Please try again later.');
            break;
          default:
            setError(error.message);
        }
      } else {
        setError('An error occured during login')
      }
    } finally {
      setLoading(false);
    }
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
          <input type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            disabled={loading}
            className="text-(--clr-secondary) text-[1.1rem] font-[500]
            outline-none w-full"
          />
        </div>
        <div className="password-input py-2 px-2 flex flex-row 
         items-center border-2 border-(--clr-secondary) rounded-md 
         w-full max-w-90 lg:max-w-100">
          <input type={`${showPassword ? `text` : `password`}`}
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            disabled={loading}
            className="text-(--clr-secondary) text-[1.1rem] font-[500] 
            outline-none w-full"
          />
          <div
            onClick={handlePasswordShow}
            className="password-input-options flex flex-row items-center">
            <ShowPasswordButton isPasswordVisible={showPassword} />
            <HidePasswordButton isPasswordVisible={showPassword} />
          </div>
        </div>
        {/* Sign in error display */}
        {
          error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full max-w-90 lg:max-w-100'>
              {error}
            </div>
          )
        }
        <SignInFormButton />
      </form>
    </section>
  )
}