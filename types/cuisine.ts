export type Dish = {
  id: number
  name: string
  description: string
  fullDescription?: string
  image: string
  rating: number
  tags: string[]
  origin: string
  bestTimeToTry: string
  ingredients: string[]
  culturalSignificance: string
  whereToTry: {
    name: string
    address: string
  }[]
}
