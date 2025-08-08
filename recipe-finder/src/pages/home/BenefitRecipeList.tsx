import BenefitRecipeCard from "../../components/BenefitRecipeCard"

export default function BenefitRecipeList() {
  return (
    <div className="benefit-recipe-list flex flex-col gap-4">
      <BenefitRecipeCard />
      <BenefitRecipeCard />
      <BenefitRecipeCard />
      <BenefitRecipeCard />
    </div>
  )
}