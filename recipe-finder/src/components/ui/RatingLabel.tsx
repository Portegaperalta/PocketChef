import { Star } from "lucide-react"

export default function RatingLabel() {
  return (
    <div className="rating-label bg-(--clr-primary) flex gap-1 items-center
    rounded-full py-1 px-2">
      <Star size={15} color="#ffff" />
      <p className="text-(--clr-white) text-[.8rem] font-[600]">4.9</p>
    </div>
  )
}