import AppLogo from "./AppLogo"
import DropdownMenuButton from "./ui/DropdownMenuButton"

export default function Header() {
  return (
    <header className="bg-(--clr-primary) px-6 py-4">
      <div className="header-content flex flex-row items-center gap-14">
        <DropdownMenuButton />
        <AppLogo />
      </div>
    </header>
  )
}