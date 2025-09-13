import { Link } from "react-router";
import SignUpForm from "./SignUpForm";

export default function SignUp() {
  return (
    <main className="sign-up px-6 py-6 h-full md:px-16 lg:px-30">
      <SignUpForm />
      <section className="sign-in-link mt-8">
        <div className="text-center">
          <p className="text-(--clr-secondary) text-[1.1rem] font-[500] mb-1">
            Already have a PocketChef account?
          </p>
          <Link to="/SignIn"
            className="text-(--clr-primary) text-[1.1rem] font-[500] underline">
            Sign In
          </Link>
        </div>
      </section>
    </main>
  )
}