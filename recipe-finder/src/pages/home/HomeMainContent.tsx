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
      </div>
      <div className="grid grid-flow-row md:gap-8 lg:gap-14 md:mt-10 md:grid-flow-col
       md:grid-cols-2">
        <div className="row-span-2 grid-rows-subgrid mb-8 md:mb-0">
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