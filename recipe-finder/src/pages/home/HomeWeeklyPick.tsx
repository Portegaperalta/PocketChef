import AddToFavoriteButton from "../../components/ui/AddToFavoriteButton";
import StartCookButton from "../../components/ui/StartCookButton";
import WeeklyPickImage from "../../images/weekly-bg.png"

export default function HomeWeeklyPick() {
  return (
    <div style={{ backgroundImage: `url(${WeeklyPickImage})` }}
      className="home-weekly-pick w-full py-23 px-12 
      bg-no-repeat bg-cover">
      <div className="weekly-pick-top flex justify-between">
        <div className="bg-(--clr-bg-blur) py-1 px-2 rounded-md">
          <AddToFavoriteButton />
        </div>
        <div className="">
          <StartCookButton />
        </div>
      </div>
      <div className="weekly-pick-bottom pt-30">
        <h3 className="weekly-pick-title text-[1.4rem] text-(--clr-white) lg:text-[1.8rem]">
          Weekly pick
        </h3>
        <p className="weekly-pick-description text-(--clr-white) w-full max-w-80 lg:text-[1.1rem]">
          This pumpkin cream soup
          will warm up the feintest of hearts.
        </p>
      </div>
    </div>
  )
}