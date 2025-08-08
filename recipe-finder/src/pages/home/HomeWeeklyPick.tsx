import AddToFavoriteButton from "../../components/ui/AddToFavoriteButton";
import StartCookButton from "../../components/ui/StartCookButton";
import WeeklyPickImage from "../../images/Benefits-weekly-img.png"

export default function HomeWeeklyPick() {
  return (
    <div style={{ backgroundImage: `url(${WeeklyPickImage})` }}
      className="home-weekly-pick w-full max-w-100 px-12 bg-no-repeat">
      <div className="weekly-pick-top py-6 flex justify-between">
        <div className="bg-(--clr-bg-blur) py-1 px-2 rounded-md">
          <AddToFavoriteButton />
        </div>
        <div className="">
          <StartCookButton />
        </div>
      </div>
      <div className="weekly-pick-bottom mt-40">
        <h3 className="weekly-pick-title text-[1.4rem] text-(--clr-white)">
          Weekly pick
        </h3>
        <p className="weekly-pick-description text-(--clr-white)">
          This pumpkin cream soup
          will warm up the feintest of hearts.
        </p>
      </div>
    </div>
  )
}