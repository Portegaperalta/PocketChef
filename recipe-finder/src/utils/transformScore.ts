export default function transformScore(rawScore: number) {
  if (rawScore < 1) {
    return Math.round(rawScore * 50) / 10
  } else {
    return Math.round((rawScore / 100) * 50) / 10
  }
}