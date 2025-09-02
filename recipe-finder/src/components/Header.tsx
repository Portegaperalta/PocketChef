import { Link } from "react-router"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AppLogo from "./AppLogo"
import DropdownMenuButton from "./ui/DropdownMenuButton"
import HeaderOptions from "./HeaderOptions"
import { Bookmark, House, Search, UserRound } from "lucide-react"

export default function Header() {
  const location = useLocation()
  const [menuDisplay, setMenuDisplay] = useState(false)

  const displayDropdownMenu = () => {
    setMenuDisplay(!menuDisplay)
  }

  useEffect(() => {
    setMenuDisplay(!location)
  }, [location])

  return (
    <header className="bg-(--clr-primary) px-6 py-4 fixed w-full z-100
    md:px-16 lg:px-30">
      <div className="header-content flex flex-col md:items-center md:justify-between md:flex-row">
        <div className="header-content-left mb-2 flex flex-row items-center justify-between
        md:mb-0 md:flex-col">
          <DropdownMenuButton onClick={displayDropdownMenu} />
          <AppLogo />
          <div className=""></div>
        </div>
        <div className="header-content-right">
          <div className="header-content-options">
            <HeaderOptions />
          </div>
        </div>
      </div>
      <div className={`header-dropdown-menu py-8 px-4 w-full z-100 bg-(--clr-primary)
        ${menuDisplay ? `block` : `hidden`} md:hidden`}>
        <nav>
          <ul className="flex flex-col gap-8">
            <li>
              <Link to="/">
                <div className="home-link flex flex-row gap-1">
                  <House color="#FFFF" />
                  <p className="text-(--clr-white) text-[1.1rem] font-[500]">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Search-Recipe">
                <div className="recipe-link flex flex-row gap-1">
                  <Search color="#FFFF" />
                  <p className="text-(--clr-white) text-[1.1rem] font-[500]">
                    Seach Recipes
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Saved-Recipes">
                <div className="saved-recipes-link flex flex-row gap-1">
                  <Bookmark color="#FFFFFF" />
                  <p className="text-(--clr-white) text-[1.1rem] font-[500]">
                    Saved Recipes
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/SignIn">
                <div className="account-link flex flex-row gap-1">
                  <UserRound color="#FFFFFF" />
                  <p className="text-(--clr-white) text-[1.1rem] font-[500]">
                    Sign In
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