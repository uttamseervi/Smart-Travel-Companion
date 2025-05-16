export interface Activity {
  id: string;
  name: string;
  description: string;
  location: string;
  locationSlug: string;
  category: string[];
  duration: string;
  image: string;
  price: string;
  rating: number;
  bookable: boolean;
  highlights: string[];
}

export const activities: Activity[] = [
  {
    id: "1",
    name: "Traditional Tea Ceremony Experience",
    description: "Learn about the history and significance of the Japanese tea ceremony while participating in this cultural ritual.",
    location: "Kyoto",
    locationSlug: "kyoto",
    category: ["cultural", "educational"],
    duration: "1.5 hours",
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$$",
    rating: 4.9,
    bookable: true,
    highlights: [
      "Authentic tea ceremony in a traditional setting",
      "Learn about the history and philosophy of Japanese tea",
      "Guided by a certified tea master",
      "Sample traditional Japanese sweets"
    ]
  },
  {
    id: "2",
    name: "Gaudi Architectural Tour",
    description: "Explore the fantastic architectural works of Antoni Gaudi throughout Barcelona.",
    location: "Barcelona",
    locationSlug: "barcelona",
    category: ["cultural", "sightseeing", "walking"],
    duration: "3 hours",
    image: "https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.8,
    bookable: true,
    highlights: [
      "Visit Sagrada Familia with skip-the-line tickets",
      "Explore Park Güell's unique designs",
      "See Casa Batlló and Casa Milà",
      "Expert guide explaining Gaudi's influence and style"
    ]
  },
  {
    id: "3",
    name: "Medina Food Tour",
    description: "Sample traditional Moroccan dishes while exploring the winding streets of the ancient Medina.",
    location: "Marrakech",
    locationSlug: "marrakech",
    category: ["food", "cultural", "walking"],
    duration: "4 hours",
    image: "https://images.pexels.com/photos/2233349/pexels-photo-2233349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.7,
    bookable: true,
    highlights: [
      "Taste authentic Moroccan street food",
      "Visit local spice markets",
      "Learn about traditional cooking methods",
      "Enjoy a traditional dinner at a hidden riad"
    ]
  },
  {
    id: "4",
    name: "Santorini Sunset Catamaran Cruise",
    description: "Sail around the caldera on a luxury catamaran, enjoying swimming stops and watching the famous Santorini sunset.",
    location: "Santorini",
    locationSlug: "santorini",
    category: ["adventure", "romantic", "water"],
    duration: "5 hours",
    image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$$",
    rating: 4.9,
    bookable: true,
    highlights: [
      "Swim in crystal-clear waters at Red Beach",
      "Visit the hot springs at volcanic islet of Palea Kameni",
      "Greek BBQ meal with unlimited drinks",
      "Watch the sunset from the perfect vantage point"
    ]
  },
  {
    id: "5",
    name: "Broadway Show & Dinner Package",
    description: "Enjoy a pre-show dinner at a renowned Theatre District restaurant followed by tickets to a top Broadway musical.",
    location: "New York City",
    locationSlug: "new-york",
    category: ["entertainment", "dining", "cultural"],
    duration: "5 hours",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$$$",
    rating: 4.7,
    bookable: true,
    highlights: [
      "Premium seating at a top Broadway show",
      "3-course dinner at an acclaimed restaurant",
      "Meet-and-greet with cast members (select shows only)",
      "Commemorative program book"
    ]
  },
  {
    id: "6",
    name: "Sacred Monkey Forest & Temple Tour",
    description: "Explore the mystical Monkey Forest Sanctuary and visit ancient Hindu temples in Ubud.",
    location: "Bali",
    locationSlug: "bali",
    category: ["nature", "cultural", "adventure"],
    duration: "6 hours",
    image: "https://images.pexels.com/photos/237794/pexels-photo-237794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.6,
    bookable: true,
    highlights: [
      "Guided tour of the Monkey Forest Sanctuary",
      "Visit to Ubud's royal palace",
      "Explore Saraswati Temple with lotus gardens",
      "Traditional Balinese lunch experience"
    ]
  },
  {
    id: "7",
    name: "Ancient Rome & Colosseum Underground Tour",
    description: "Access restricted areas of the Colosseum, including the underground chambers, plus explore the Roman Forum.",
    location: "Rome",
    locationSlug: "rome",
    category: ["historical", "sightseeing", "educational"],
    duration: "3.5 hours",
    image: "https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$$",
    rating: 4.8,
    bookable: true,
    highlights: [
      "Skip-the-line access to the Colosseum",
      "Exclusive entry to the underground chambers",
      "Guided tour of Palatine Hill and Roman Forum",
      "Professional historian guide"
    ]
  },
  {
    id: "8",
    name: "Cape Peninsula Safari & Cape Point Tour",
    description: "Journey to the southwestern tip of Africa, seeing penguins, dramatic coastal views, and diverse wildlife.",
    location: "Cape Town",
    locationSlug: "cape-town",
    category: ["nature", "wildlife", "sightseeing"],
    duration: "8 hours",
    image: "https://images.pexels.com/photos/13770188/pexels-photo-13770188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$$",
    rating: 4.7,
    bookable: true,
    highlights: [
      "Visit Boulders Beach penguin colony",
      "Scenic Cape Point Nature Reserve",
      "Chapman's Peak Drive coastal route",
      "Opportunity to see baboons, ostriches, and other wildlife"
    ]
  }
]