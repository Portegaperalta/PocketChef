import axios from "axios";

type Config = {
  headers: {
    Accept: string,
  }
}

const config: Config = { headers: { Accept: "application/json" } }

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

export async function fetchSearchResults(query: string) {
  const baseUrl: string = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=${apiKey}`

  try {
    const response = await axios.get(baseUrl, config)
    const recipes = response.data.results
    return recipes
  }
  catch (error) {
    console.log(error)
  }
}