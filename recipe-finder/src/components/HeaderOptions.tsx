import { Link } from "react-router"
import { Bookmark, UserRound, Search } from "lucide-react"

export default function HeaderOptions() {
  return (
    <div className="header-options hidden md:flex items-center gap-6">
      <Link to="/Search-Recipe">
        <Search color="#FFFF" />
      </Link>
      <Link to="/Saved-Recipes">
        <Bookmark color="#FFFF" />
      </Link>
      <Link to="/SignIn">
        <UserRound color="#FFFF" />
      </Link>
    </div>
  )
}