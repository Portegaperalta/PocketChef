export default function truncateTitle(title: string, maxLength: number = 20) {
  if (title.length > maxLength) {
    return title.slice(0, maxLength - 3) + "..."
  } else {
    return title
  }
}