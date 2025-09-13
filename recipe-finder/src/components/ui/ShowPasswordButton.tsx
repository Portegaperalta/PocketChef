import { Eye } from "lucide-react"

type ShowPasswordButtonProps = {
  isPasswordVisible: boolean
}

export default function ShowPasswordButton({ isPasswordVisible }: ShowPasswordButtonProps) {
  return (
    <div
      title="Show Password"
      className={`show-password-button ${isPasswordVisible ? `hidden` : `inline-block`} 
      cursor-pointer`}>
      <Eye color="#000000" />
    </div>
  )
}