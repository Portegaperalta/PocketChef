import { Link } from "react-router"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from 'motion/react'
import { useLocation } from "react-router-dom"
import { Bookmark, House, Search, UserRound } from "lucide-react"
import AppLogo from "./AppLogo"
import DropdownMenuButton from "./ui/DropdownMenuButton"
import HeaderOptions from "./HeaderOptions"

type HeaderLink = {
  name: string,
  href: string,
  icon: any,
}

const headerLinks: HeaderLink[] = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "Search Recipes",
    href: "/Search-Recipe",
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
    <header className="bg-(--clr-primary) px-6 py-4 w-full z-100
    md:px-16 lg:px-30">
      <div className="header-content flex flex-col md:items-center md:justify-between md:flex-row">
        <div className="header-content-left mb-2 flex flex-row items-center justify-between
        md:mb-0 md:flex-col">
          <DropdownMenuButton onClick={displayDropdownMenu} />
          <AppLogo />
          <div className=""></div>
        </div>
        <div className="header-content-right">
          <HeaderOptions />
        </div>
      </div>
      <AnimatePresence initial={false} >
        {menuDisplay ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className={`header-dropdown-menu w-full z-100
            bg-(--clr-primary) md:hidden`}>
            <nav className="py-6 px-2">
              <ul className="flex flex-col gap-8">
                {
                  headerLinks.map((headerLink) => (
                    <li key={headerLink.name}>
                      <Link to={headerLink.href}>
                        <div className={`${headerLink.name}-link text-(--clr-white) flex 
                        flex-row gap-1`}>
                          <headerLink.icon />
                          <p className="text-[1.2rem] font-[500]">
                            {headerLink.name}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}