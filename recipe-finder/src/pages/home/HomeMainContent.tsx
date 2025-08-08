import BenefitRecipeList from "./BenefitRecipeList";
import HomeMainAdd from "./HomeMainAdd";
import HomeWeeklyPick from "./HomeWeeklyPick";

export default function HomeMainContent() {
  return (
    <section className="home-main-content mt-10 md:mt-18">
      <div className="list-title mb-4 flex items-center justify-between">
        <p className="text-(--clr-primary) text-[1.4rem] font-[500]">
          With Benefits
        </p>
        <a href="#"
          className="text-(--clr-quick-silver) text-[1rem] md:hidden"
        >
          See all
        </a>
      </div>
      <div className="content grid grid-flow-row gap-10 md:mt-10 md:grid-flow-col
       md:grid-cols-2">
        <div className="row-span-2 grid-rows-subgrid">
          <BenefitRecipeList />
        </div>
        <div className="flex flex-col gap-6">
          <HomeMainAdd />
          <HomeWeeklyPick />
        </div>
      </div>
    </section>
  )
}