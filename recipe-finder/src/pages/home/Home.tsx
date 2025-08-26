import HomeHealthyRecipes from "./HomeHealthyRecipes"
import HomeMainContent from "./HomeMainContent"

export default function Home() {

  return (
    <main className="home px-6 py-4 mt-4 md:px-16 lg:px-30">
      <HomeHealthyRecipes />
      <HomeMainContent />
    </main>
  )
}