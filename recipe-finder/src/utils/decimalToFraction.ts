export default function decimalToFraction(decimal: number) {
  const fractions: { [key: string]: string } = {
    "0.25": "¼",
    "0.5": "½",
    "0.75": "¾",
    "0.33": "⅓",
    "0.67": "⅔",
    "0.2": "⅕",
    "0.4": "⅖",
    "0.6": "⅗",
    "0.8": "⅘"
  }

  const rounded = Math.round(decimal * 100) / 100
  if (fractions[rounded.toString()]) {
    return fractions[rounded.toString()]
  }

  return rounded.toString()
}