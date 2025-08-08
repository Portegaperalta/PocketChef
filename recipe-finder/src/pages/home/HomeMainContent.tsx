import BenefitRecipeList from "./BenefitRecipeList";
import HomeMainAdd from "./HomeMainAdd";
import HomeWeeklyPick from "./HomeWeeklyPick";

export default function HomeMainContent() {
  return (
    <section className="home-main-content mt-10 md:mt-20">
      <HomeMainAdd />
      <BenefitRecipeList />
      <HomeWeeklyPick />
    </section>
  )
}