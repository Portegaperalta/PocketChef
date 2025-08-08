import AddToFavoriteButton from "../../components/ui/AddToFavoriteButton";
import StartCookButton from "../../components/ui/StartCookButton";
import WeeklyPickImage from "../../images/weekly-pick-img.jpg"

export default function HomeWeeklyPick() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
      style={{ backgroundImage: `url(${WeeklyPickImage})` }}
      className="home-weekly-pick w-full max-w-152 bg-no-repeat bg-cover rounded-2xl">
      <div className="weekly-pick-top py-8 px-4 flex justify-between">
        <div className="bg-(--clr-bg-blur) py-1 px-2 rounded-md">
          <AddToFavoriteButton />
        </div>
        <div className="">
          <StartCookButton />
        </div>
      </div>
      <div className="weekly-pick-bottom pt-40 pb-10 px-4 
      bg-gradient-to-t from-black to-transparent rounded-b-2xl">
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