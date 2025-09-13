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
    icon: Home,
  },
  {
    name: "Search-Recipe",
    href: "/",
    icon: Search,
  },
  {
    name: "Saved Recipes",
    href: "/Saved-Recipes",
    icon: Bookmark,
  },
  {
    name: "Sign In",
    href: "/SignIn",
    icon: UserRound,
  },
]

export default function MobileBar() {
  return (
    <div className="mobile-navbar md:hidden">
      <nav>
        <ul>
          {
            navItems.map((navItem) => (
              <li key={navItem.name}>
                {
                  <Link to={navItem.href}>
                    <navItem.icon />
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