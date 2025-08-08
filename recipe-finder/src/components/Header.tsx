import AppLogo from "./AppLogo"

export default function Header() {
  return (
    <header className="bg-(--clr-primary) py-4">
      <div className="header-content">
        <AppLogo />
      </div>
    </header>
  )
}