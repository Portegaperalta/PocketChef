export default function transformScore(rawScore: number) {
  return Math.round(rawScore * 50) / 10
}