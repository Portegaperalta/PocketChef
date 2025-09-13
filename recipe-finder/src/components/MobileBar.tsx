import { Home, Search, Bookmark, UserRound } from "lucide-react"
import { Link } from "react-router"

type NavItem = {
  name: string,
  href: string,
  icon: any,
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home color="#9F9F9F" size={30} />,
  },
  {
    name: "Search-Recipe",
    href: "/Search-Recipe",
    icon: <Search color="#9F9F9F" size={30} />,
  },
  {
    name: "Saved Recipes",
    href: "/Saved-Recipes",
    icon: <Bookmark color="#9F9F9F" size={30} />,
  },
  {
    name: "Sign In",
    href: "/SignIn",
    icon: <UserRound color="#9F9F9F" size={30} />,
  },
]

export default function MobileBar() {
  return (
    <div className="mobile-navbar px-6 py-4 border-t-1 md:hidden">
      <nav>
        <ul className="flex flex-row justify-between">
          {
            navItems.map((navItem) => (
              <li key={navItem.name}>
                {
                  <Link to={navItem.href}>
                    {navItem.icon}
                  </Link>
                }
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}