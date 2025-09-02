const pluralMeasures = [
  "cups", "cup", "Cup", "Tbsps", "Tbsp",
  "tsps", "oz", "head", "fl. oz", "servings", "cloves"
]

export default function checkIngredientMeasure(measure: string) {
  if (pluralMeasures.includes(measure) === true) {
    return "of"
  } else {
    return ""
  }
}