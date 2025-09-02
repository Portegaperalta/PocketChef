const pluralMeasures = ["cups", "cup", "Tbsps", "tsps", "oz", "head", "fl. oz"]

export default function checkIngredientMeasure(measure: string) {
  if (pluralMeasures.includes(measure) === true) {
    return "of"
  } else {
    return ""
  }
}