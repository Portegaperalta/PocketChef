import { useState } from "react"
import { Link } from "react-router"
import { Home, Search, Bookmark, UserRound } from "lucide-react"

type NavItem = {
  name: string,
  href: string,
  icon: any,
  activeIcon: any,
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home color="#9F9F9F" size={28} />,
    activeIcon: <Home color="#F6B100" size={28} />,
  },
  {
    name: "Search-Recipe",
    href: "/Search-Recipe",
    icon: <Search color="#9F9F9F" size={28} />,
    activeIcon: <Search color="#F6B100" size={28} />,
  },
  {
    name: "Saved Recipes",
    href: "/Saved-Recipes",
    icon: <Bookmark color="#9F9F9F" size={28} />,
    activeIcon: <Bookmark color="#F6B100" size={28} />,
  },
  {
    name: "Sign In",
    href: "/SignIn",
    icon: <UserRound color="#9F9F9F" size={28} />,
    activeIcon: <UserRound color="#F6B100" size={28} />,
  },
]

export default function MobileBar() {
  const [activeLink, setActiveLink] = useState("")

  return (
    <div className="mobile-navbar px-6 py-4 fixed bottom-0 border-t-1
     w-full z-100 bg-(--clr-white) md:hidden">
      <nav>
        <ul className="flex flex-row justify-between">
          {
            navItems.map((navItem) => (
              <li key={navItem.name}
                onClick={() => setActiveLink(navItem.href)}
              >
                {
                  <Link to={navItem.href}>
                    {activeLink === navItem.href ? navItem.activeIcon : navItem.icon}
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