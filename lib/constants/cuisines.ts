export interface Cuisine {
  id: string;
  name: string;
  description: string;
  location: string;
  locationSlug: string;
  image: string;
  price: string;
  rating: number;
  restaurants: Restaurant[];
}

export interface Restaurant {
  id: string;
  name: string;
  address: string;
  priceRange: string;
  rating: number;
  distance: string;
}

export const cuisines: Cuisine[] = [
  {
    id: "1",
    name: "Sushi & Sashimi",
    description: "Fresh, delicate slices of raw fish and seafood, often served with vinegared rice, wasabi, and soy sauce.",
    location: "Kyoto",
    locationSlug: "kyoto",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$-$$$",
    rating: 4.8,
    restaurants: [
      {
        id: "r1",
        name: "Sushi Wakon",
        address: "Higashiyama Ward, Kyoto",
        priceRange: "$$$",
        rating: 4.9,
        distance: "1.2 km"
      },
      {
        id: "r2",
        name: "Izuju Sushi",
        address: "Gion District, Kyoto",
        priceRange: "$$",
        rating: 4.7,
        distance: "0.8 km"
      }
    ]
  },
  {
    id: "2",
    name: "Paella",
    description: "Traditional Spanish rice dish with saffron, vegetables, and a variety of meats or seafood.",
    location: "Barcelona",
    locationSlug: "barcelona",
    image: "https://images.pexels.com/photos/12419160/pexels-photo-12419160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.7,
    restaurants: [
      {
        id: "r3",
        name: "7 Portes",
        address: "Passeig Isabel II, Barcelona",
        priceRange: "$$$",
        rating: 4.6,
        distance: "1.5 km"
      },
      {
        id: "r4",
        name: "La Barraca",
        address: "Barceloneta, Barcelona",
        priceRange: "$$",
        rating: 4.5,
        distance: "0.9 km"
      }
    ]
  },
  {
    id: "3",
    name: "Tagine",
    description: "Slow-cooked Moroccan stew named after the earthenware pot it's cooked in, featuring tender meat, vegetables, and aromatic spices.",
    location: "Marrakech",
    locationSlug: "marrakech",
    image: "https://images.pexels.com/photos/6275187/pexels-photo-6275187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.9,
    restaurants: [
      {
        id: "r5",
        name: "Le Jardin",
        address: "Rue Sidi Abdelaziz, Marrakech",
        priceRange: "$$",
        rating: 4.8,
        distance: "0.5 km"
      },
      {
        id: "r6",
        name: "Naranj",
        address: "Riad Zitoun Jdid, Marrakech",
        priceRange: "$$$",
        rating: 4.7,
        distance: "1.1 km"
      }
    ]
  },
  {
    id: "4",
    name: "Moussaka",
    description: "Classic Greek casserole with layers of eggplant, spiced ground meat, and creamy béchamel sauce.",
    location: "Santorini",
    locationSlug: "santorini",
    image: "https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.6,
    restaurants: [
      {
        id: "r7",
        name: "Selene",
        address: "Pyrgos, Santorini",
        priceRange: "$$$",
        rating: 4.9,
        distance: "2.3 km"
      },
      {
        id: "r8",
        name: "Metaxi Mas",
        address: "Exo Gonia, Santorini",
        priceRange: "$$",
        rating: 4.8,
        distance: "3.1 km"
      }
    ]
  },
  {
    id: "5",
    name: "New York-Style Pizza",
    description: "Thin, foldable slices with a crisp outer crust and a variety of toppings, often sold by the slice.",
    location: "New York City",
    locationSlug: "new-york",
    image: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$",
    rating: 4.5,
    restaurants: [
      {
        id: "r9",
        name: "Joe's Pizza",
        address: "Carmine St, New York",
        priceRange: "$",
        rating: 4.7,
        distance: "0.3 km"
      },
      {
        id: "r10",
        name: "Lombardi's",
        address: "Spring St, New York",
        priceRange: "$$",
        rating: 4.6,
        distance: "0.7 km"
      }
    ]
  },
  {
    id: "6",
    name: "Nasi Goreng",
    description: "Indonesian fried rice with sweet soy sauce, served with egg, chicken, shrimp, or seafood and topped with crispy shallots.",
    location: "Bali",
    locationSlug: "bali",
    image: "https://images.pexels.com/photos/5409165/pexels-photo-5409165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$",
    rating: 4.6,
    restaurants: [
      {
        id: "r11",
        name: "Warung Babi Guling Ibu Oka",
        address: "Ubud, Bali",
        priceRange: "$",
        rating: 4.5,
        distance: "0.4 km"
      },
      {
        id: "r12",
        name: "Nasi Ayam Kedewatan Ibu Mangku",
        address: "Ubud, Bali",
        priceRange: "$",
        rating: 4.6,
        distance: "1.2 km"
      }
    ]
  },
  {
    id: "7",
    name: "Pasta Carbonara",
    description: "Classic Roman pasta dish with eggs, cheese, pancetta, and black pepper.",
    location: "Rome",
    locationSlug: "rome",
    image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.8,
    restaurants: [
      {
        id: "r13",
        name: "Da Enzo al 29",
        address: "Via dei Vascellari, Rome",
        priceRange: "$$",
        rating: 4.7,
        distance: "0.8 km"
      },
      {
        id: "r14",
        name: "Roscioli",
        address: "Via dei Giubbonari, Rome",
        priceRange: "$$$",
        rating: 4.8,
        distance: "1.3 km"
      }
    ]
  },
  {
    id: "8",
    name: "Bobotie",
    description: "South African dish of spiced minced meat baked with an egg-based topping, served with yellow rice.",
    location: "Cape Town",
    locationSlug: "cape-town",
    image: "https://images.pexels.com/photos/5409658/pexels-photo-5409658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: "$$",
    rating: 4.5,
    restaurants: [
      {
        id: "r15",
        name: "Gold Restaurant",
        address: "Bennett St, Cape Town",
        priceRange: "$$$",
        rating: 4.6,
        distance: "1.7 km"
      },
      {
        id: "r16",
        name: "Karibu Restaurant",
        address: "V&A Waterfront, Cape Town",
        priceRange: "$$",
        rating: 4.5,
        distance: "2.1 km"
      }
    ]
  }
]