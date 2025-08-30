export default function checkIngredientMeasure(measure: string) {
  if (measure === "cups" || measure === "cup" || measure === "Tbsps") {
    return "of"
  } else {
    return ""
  }
}