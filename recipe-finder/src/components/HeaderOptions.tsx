import { Link } from "react-router"
import AddToFavoriteButton from "./ui/AddToFavoriteButton"
import SearchButton from "./ui/SearchButton"
import UserProfileButton from "./ui/UserProfileButton"

export default function HeaderOptions() {
  return (
    <div className="header-options hidden md:flex items-center gap-6">
      <Link to="/Search-Recipe">
        <SearchButton />
      </Link>
      <AddToFavoriteButton />
      <UserProfileButton />
    </div>
  )
}