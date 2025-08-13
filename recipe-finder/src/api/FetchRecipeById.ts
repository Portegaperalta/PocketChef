import axios from "axios"

type config = {
  headers: {
    Accept: string,
  }
}

const config = { headers: { Accept: "application/json" } }
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

export default async function FetchRecipeById(id: number) {
  try {
    const baseUrl = `https://api.spoonacular.com/recipes/${id}/information?&apiKey=${apiKey}`
    const response = await axios.get(baseUrl, config)
    const recipeData = await response.data
    return recipeData
  }
  catch (error) {
    console.log(error)
  }
}