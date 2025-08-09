import { Menu } from "lucide-react"

type Props = {
  onClick: () => void
}

export default function DropdownMenuButton(props: Props) {
  return (
    <div className="dropdown-menu-btn md:hidden cursor-pointer" onClick={props.onClick}>
      <Menu color="#181A20" size={35} />
    </div>
  )
}