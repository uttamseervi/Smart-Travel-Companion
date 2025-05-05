export type Product = {
  id: number
  name: string
  description: string
  fullDescription?: string
  image: string
  price: number
  origin: string
  categories: string[]
  giTagSince: string
  culturalSignificance: string
  craftsmanship: string
  whereToBuy: {
    name: string
    address: string
  }[]
}
