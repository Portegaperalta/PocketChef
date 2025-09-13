import { EyeOff } from "lucide-react";

type HidePasswordButtonProps = {
  isPasswordVisible: boolean
}

export default function HidePasswordButton({ isPasswordVisible }: HidePasswordButtonProps) {
  return (
    <div
      title="Hide Password"
      className={`hide-password-button ${isPasswordVisible ? `inline-block` : `hidden`} 
      cursor-pointer`}>
      <EyeOff color="#000000" />
    </div>
  )
}