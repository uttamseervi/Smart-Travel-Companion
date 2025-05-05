export interface Landmark {
  id: number
  name: string
  description: string
  fullDescription?: string
  image: string
  rating: number
  tags: string[]
  location: string
  timings: string
  entryFee: string
  category: string
  bestTimeToVisit: string
  historicalSignificance: string
  tips: string[]
}
