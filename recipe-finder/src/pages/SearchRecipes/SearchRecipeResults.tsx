import { useEffect } from "react";
import ResultCard from "../../components/ResultCard";

export default function SearchRecipeResults() {
  return (
    <section className="search-recipe-results mt-10 mb-40">
      <div className="search-recipe-results-feed">
        <ResultCard
          key={1}
          Name="Keto Salad"
          IngredientsSummary="Beans & Chicken"
          BenefitSummary="Improves Health"
        />
      </div>
    </section>
  )
}