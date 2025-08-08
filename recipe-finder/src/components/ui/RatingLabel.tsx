import { Star } from "lucide-react"

type RatingLableProps = {
  rating: number
}

export default function RatingLabel(props: RatingLableProps) {
  return (
    <div className="rating-label bg-(--clr-primary) py-1 px-2 flex gap-1 items-center
    rounded-full">
      <Star size={15} color="#ffff" />
      <p className="text-(--clr-white) text-[.8rem] font-[600]">{props.rating}</p>
    </div>
  )
}