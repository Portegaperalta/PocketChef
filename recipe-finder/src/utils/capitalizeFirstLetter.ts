export default function capitalizeFirstLetter(text: string) {
  if (!text) {
    return "Very Healthy"
  }
  else if (text.length === 0 || text.length === undefined) {
    return ""
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }
}