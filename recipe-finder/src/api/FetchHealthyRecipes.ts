import axios from "axios";

type config = {
  headers: {
    Accept: string,
  }
}

const config = { headers: { Accept: "application/json" } }
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

export default async function FetchHealthyRecipes() {
  try {
    const baseUrl = `https://api.spoonacular.com/recipes/random?number=4&include-tags=salad&apiKey=${apiKey}`
    const response = await axios.get(baseUrl, config)
    const recipes = response.data.recipes
    return recipes
  } catch (error) {
    console.log(`Error fetching recipes: ${error}`)
  }
}