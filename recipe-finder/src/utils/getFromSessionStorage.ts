export default function getFromSessionStorage(key: string) {
  const data = sessionStorage.getItem(key)
  return data ? JSON.parse(data) : null
}