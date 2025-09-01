import { Menu } from "lucide-react"
import { motion } from 'motion/react'
import { useState } from "react"

type Props = {
  onClick: () => void
}

export default function DropdownMenuButton(props: Props) {
  const [buttonRotation, setButtonRotation] = useState(0)

  const handleButtonClick = () => {
    setButtonRotation(prev => prev + 90)
  }

  return (
    <motion.button
      animate={{ rotate: buttonRotation }}
      onClick={handleButtonClick}
    >
      <div className="dropdown-menu-btn md:hidden cursor-pointer" onClick={props.onClick}>
        <Menu color="#181A20" size={35} />
      </div>
    </motion.button>
  )
}