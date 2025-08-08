import BenefitRecipeList from "./BenefitRecipeList";
import HomeMainAdd from "./HomeMainAdd";

export default function HomeMainContent() {
  return (
    <section className="home-main-content">
      <HomeMainAdd />
      <BenefitRecipeList />
    </section>
  )
}