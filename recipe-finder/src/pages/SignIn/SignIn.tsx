import SignInForm from "./SignInForm";
import { Link } from "react-router";

export default function Login() {
  return (
    <main className="login px-6 py-4 md:px-16 lg:px-30">
      <SignInForm />
      <section className="sign-up-link mt-8">
        <div className="text-center">
          <p className="text-(--clr-secondary) text-[1.1rem] font-[500] mb-1">
            Dont have a PocketChef account?
          </p>
          <Link to="/SignUp"
            className="text-(--clr-primary) text-[1.1rem] font-[500] underline">
            Sign Up
          </Link>
        </div>
      </section>
    </main>
  )
}