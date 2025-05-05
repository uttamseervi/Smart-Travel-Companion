export type Booking = {
  id: number
  name: string
  description: string
  fullDescription?: string
  image: string
  rating: number
  price: number
  location: string
  amenities: string[]
  reviews: {
    name: string
    rating: number
    comment: string
  }[]
}

export type Tour = {
  id: number
  name: string
  description: string
  fullDescription?: string
  image: string
  price: number
  location: string
  duration: string
  groupSize: number
  category: string
  included: string[]
  itinerary: {
    title: string
    description: string
  }[]
}
