import SignInForm from "./SignInForm";
import { Link } from "react-router";

export default function Login() {
  return (
    <main className="login px-6 py-4 mt-4 md:px-16 lg:px-30">
      <section className="login-top text-center">
        <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
          Sign In
        </h2>
      </section>
      <SignInForm />
      <section className="sign-up-link mt-8">
        <div className="text-center">
          <p className="text-(--clr-secondary) text-[1.1rem]">
            Dont have a PocketChef account?
          </p>
          <Link to="/SignUp"
            className="text-[1.1rem] text-(--clr-primary) underline">
            Sign Up
          </Link>
        </div>
      </section>
    </main>
  )
}