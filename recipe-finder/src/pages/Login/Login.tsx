import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <main className="login px-6 py-4 mt-4 md:px-16 lg:px-30">
      <section className="login-top text-center">
        <h2 className="text-(--clr-secondary) text-[1.6rem] font-[600]">
          Sign In
        </h2>
      </section>
      <LoginForm />
    </main>
  )
}