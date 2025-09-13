import HomeHealthyRecipes from "./HomeHealthyRecipes"
import HomeMainContent from "./HomeMainContent"

export default function Home() {

  return (
    <main className="home px-6 py-6 h-full md:px-16 lg:px-30">
      <HomeHealthyRecipes />
      <HomeMainContent />
    </main>
  )
}