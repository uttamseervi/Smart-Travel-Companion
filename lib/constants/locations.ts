export interface Location {
  id: string;
  name: string;
  slug: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  categories: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  featured?: boolean;
}

export const locations: Location[] = [
  {
    id: "1",
    name: "Kyoto",
    slug: "kyoto",
    country: "Japan",
    description: "Ancient temples, traditional gardens, and vibrant culture in Japan's former imperial capital.",
    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.8,
    categories: ["cultural", "historical", "scenic"],
    coordinates: {
      lat: 35.0116,
      lng: 135.7681,
    },
    featured: true,
  },
  {
    id: "2",
    name: "Barcelona",
    slug: "barcelona",
    country: "Spain",
    description: "Stunning architecture, Mediterranean beaches, and world-class cuisine in this vibrant Spanish city.",
    image: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    categories: ["beach", "cultural", "urban"],
    coordinates: {
      lat: 41.3851,
      lng: 2.1734,
    },
    featured: true,
  },
  {
    id: "3",
    name: "Marrakech",
    slug: "marrakech",
    country: "Morocco",
    description: "Vibrant markets, exotic palaces, and rich traditions in this enchanting Moroccan city.",
    image: "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.6,
    categories: ["cultural", "historical", "exotic"],
    coordinates: {
      lat: 31.6295,
      lng: -7.9811,
    },
    featured: true,
  },
  {
    id: "4",
    name: "Santorini",
    slug: "santorini",
    country: "Greece",
    description: "Whitewashed buildings, stunning sunsets, and crystal-clear waters on this iconic Greek island.",
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.9,
    categories: ["beach", "scenic", "romantic"],
    coordinates: {
      lat: 36.3932,
      lng: 25.4615,
    },
    featured: true,
  },
  {
    id: "5",
    name: "New York City",
    slug: "new-york",
    country: "United States",
    description: "Iconic skyline, world-class entertainment, and diverse cultures in the city that never sleeps.",
    image: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    categories: ["urban", "cultural", "entertainment"],
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },
  {
    id: "6",
    name: "Bali",
    slug: "bali",
    country: "Indonesia",
    description: "Tropical beaches, ancient temples, and lush landscapes on this paradise Indonesian island.",
    image: "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.6,
    categories: ["beach", "cultural", "adventure"],
    coordinates: {
      lat: -8.4095,
      lng: 115.1889,
    },
  },
  {
    id: "7",
    name: "Rome",
    slug: "rome",
    country: "Italy",
    description: "Ancient ruins, Renaissance art, and delicious cuisine in the eternal city.",
    image: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.7,
    categories: ["historical", "cultural", "urban"],
    coordinates: {
      lat: 41.9028,
      lng: 12.4964,
    },
    featured: true,
  },
  {
    id: "8",
    name: "Cape Town",
    slug: "cape-town",
    country: "South Africa",
    description: "Stunning mountain views, beautiful beaches, and diverse culture at the tip of Africa.",
    image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4.5,
    categories: ["scenic", "beach", "adventure"],
    coordinates: {
      lat: -33.9249,
      lng: 18.4241,
    },
  },
]