import AppLogo from "./AppLogo"
import DropdownMenuButton from "./ui/DropdownMenuButton"
import SearchBar from "./ui/SearchBar"
import HeaderOptions from "./HeaderOptions"

export default function Header() {
  return (
    <header className="bg-(--clr-primary) px-6 py-4 lg:px-30">
      <div className="header-content flex flex-col md:items-center md:justify-between md:flex-row">
        <div className="header-content-left mb-2 flex flex-row items-center justify-between
        md:mb-0 md:flex-col">
          <DropdownMenuButton />
          <AppLogo />
          <div className=""></div>
        </div>
        <div className="header-content-right flex">
          <div className="header-content-search w-full md:hidden">
            <SearchBar />
          </div>
          <div className="header-content-options">
            <HeaderOptions />
          </div>
        </div>
      </div>
    </header>
  )
}