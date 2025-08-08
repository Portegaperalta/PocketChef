import HomeHealthyRecipes from "./HomeHealthyRecipes"
import HomeMainContent from "./HomeMainContent"

export default function Home() {
  return (
    <main className="home mt-4 px-6 lg:px-30">
      <HomeHealthyRecipes />
      <HomeMainContent />
    </main>
  )
}