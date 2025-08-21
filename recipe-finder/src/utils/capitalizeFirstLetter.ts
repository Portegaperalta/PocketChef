export default function capitalizeFirstLetter(text: string) {
  try {
    if (text.length === 0) {
      return ""
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
  }
  catch (error) {
    console.log(error)
  }
}