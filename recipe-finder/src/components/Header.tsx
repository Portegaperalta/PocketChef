import { Link } from "react-router"
import AppLogo from "./AppLogo"
import DropdownMenuButton from "./ui/DropdownMenuButton"
import HeaderSearchBar from "./ui/HeaderSearchBar"
import HeaderOptions from "./HeaderOptions"
import SearchButton from "./ui/SearchButton"
import { Bookmark, House, Search, UserRound } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-(--clr-primary) px-6 py-4 relative lg:px-30">
      <div className="header-content flex flex-col md:items-center md:justify-between md:flex-row">
        <div className="header-content-left mb-2 flex flex-row items-center justify-between
        md:mb-0 md:flex-col">
          <DropdownMenuButton />
          <AppLogo />
          <div className=""></div>
        </div>
        <div className="header-content-right">
          <div className="header-content-search md:hidden">
            <HeaderSearchBar />
          </div>
          <div className="header-content-options">
            <HeaderOptions />
          </div>
        </div>
      </div>

      <div className="header-dropdown-menu bg-(--clr-primary)">
        <nav>
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/">
                <div className="home-link flex flex-row gap-1">
                  <House color="#FFFF" />
                  <p className="text-(--clr-white)">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Search-Recipe">
                <div className="recipe-link flex flex-row gap-1">
                  <Search color="#FFFF" />
                  <p className="text-(--clr-white)">
                    Seach Recipes
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="saved-recipes-link flex flex-row gap-1">
                  <Bookmark color="#FFFFFF" />
                  <p className="text-(--clr-white)">
                    Saved Recipes
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="">
                <div className="account-link flex flex-row gap-1">
                  <UserRound color="#FFFFFF" />
                  <p className="text-(--clr-white)">
                    Your Account
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}