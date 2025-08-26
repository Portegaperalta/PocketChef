import { Link } from "react-router"

export default function AppLogo() {
  return (
    <div className="app-logo">
      <Link to="/">
        <h1 className="text-(--clr-secondary) text-[1.9rem] font-[600]">
          Pocket<span className="font-[400]">Chef</span>
        </h1>
      </Link>
    </div>
  )
}