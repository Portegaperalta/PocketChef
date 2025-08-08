import axios from "axios";

type Config = {
  headers: {
    Accept: string,
  }
}

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

export async function fetchSearchResults(query: string) {
  const config: Config = { headers: { Accept: "application/json" } }
  const url: string = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=4&apiKey=${apiKey}`

  try {
    const response = await axios.get(url, config)
    const recipes = response.data.results
    return recipes
  }
  catch (error) {
    console.log(error)
  }
}