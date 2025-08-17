import axios from "axios";

type config = {
  headers: {
    Accept: string,
  }
}

const config = { headers: { Accept: "application/json" } }
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

export default async function FetchRecipesWithBenefits() {
  try {
    const baseUrl = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
    const response = await axios.get(baseUrl, config)
    return response.data.recipes
  }
  catch (error) {
    console.log(error)
  }
}