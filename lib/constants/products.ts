export interface Product {
  id: string;
  name: string;
  description: string;
  location: string;
  locationSlug: string;
  origin: string;
  category: string;
  image: string;
  history: string;
  whereToFind: string[];
  price: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Kyoto Nishijin Textiles",
    description: "Elaborate silk fabrics used for traditional kimono and obi sashes, featuring complex patterns and gold thread.",
    location: "Kyoto",
    locationSlug: "kyoto",
    origin: "Nishijin district, Kyoto",
    category: "Textiles",
    image: "https://images.pexels.com/photos/5016369/pexels-photo-5016369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "Nishijin weaving began over 1,200 years ago when the imperial court was established in Kyoto. The techniques have been passed down through generations, producing some of Japan's most prestigious textiles.",
    whereToFind: [
      "Nishijin Textile Center",
      "Hosoo Gallery",
      "Traditional craft shops in Kyoto"
    ],
    price: "$$$-$$$$"
  },
  {
    id: "2",
    name: "Jamón Ibérico",
    description: "Premium Spanish cured ham made from black Iberian pigs fed primarily on acorns.",
    location: "Barcelona",
    locationSlug: "barcelona",
    origin: "Various regions of Spain",
    category: "Food",
    image: "https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "The tradition of curing ham in Spain dates back to the Roman era. The unique flavor comes from the diet of the pigs and the traditional curing process, which can take up to four years.",
    whereToFind: [
      "Mercat de la Boqueria",
      "Enrique Tomás shops",
      "Gourmet food stores in Barcelona"
    ],
    price: "$$-$$$$"
  },
  {
    id: "3",
    name: "Moroccan Argan Oil",
    description: "Precious oil extracted from the nuts of the argan tree, used in cooking and cosmetics.",
    location: "Marrakech",
    locationSlug: "marrakech",
    origin: "Argan forest region, southwestern Morocco",
    category: "Cosmetics/Food",
    image: "https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "Production of argan oil has been part of Berber women's traditional knowledge for centuries. The UNESCO-protected process involves cracking the nuts by hand and grinding them into paste.",
    whereToFind: [
      "Women's cooperatives in Marrakech",
      "Local markets (souks)",
      "Specialty cosmetic shops"
    ],
    price: "$$-$$$"
  },
  {
    id: "4",
    name: "Santorini Assyrtiko Wine",
    description: "Distinctive white wine made from Assyrtiko grapes grown in the volcanic soil of Santorini.",
    location: "Santorini",
    locationSlug: "santorini",
    origin: "Santorini island, Greece",
    category: "Beverage",
    image: "https://images.pexels.com/photos/2570512/pexels-photo-2570512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "Winemaking on Santorini dates back over 3,500 years. The island's unique basket-trained vines (kouloura) protect grapes from strong winds and intense heat, while the volcanic soil gives the wine its mineral character.",
    whereToFind: [
      "Santo Wines Winery",
      "Domaine Sigalas",
      "Local restaurants and wine shops"
    ],
    price: "$$-$$$"
  },
  {
    id: "5",
    name: "Brooklyn Artisanal Chocolate",
    description: "Small-batch, bean-to-bar chocolate made by skilled artisans in Brooklyn.",
    location: "New York City",
    locationSlug: "new-york",
    origin: "Brooklyn, New York",
    category: "Food",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "Part of New York's craft food movement, these chocolatiers source ethically-produced cacao beans and transform them into unique chocolate creations that reflect the city's innovative spirit.",
    whereToFind: [
      "Chelsea Market",
      "Brooklyn Flea Market",
      "Specialty food stores in Manhattan and Brooklyn"
    ],
    price: "$$-$$$"
  },
  {
    id: "6",
    name: "Balinese Batik",
    description: "Hand-dyed textiles with intricate patterns created using wax-resist dyeing techniques.",
    location: "Bali",
    locationSlug: "bali",
    origin: "Various regions in Bali",
    category: "Textiles",
    image: "https://images.pexels.com/photos/14363392/pexels-photo-14363392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "While batik is found throughout Indonesia, Balinese batik has distinctive patterns influenced by local traditions and Hindu mythology. The craft combines ancient techniques with artistic innovation.",
    whereToFind: [
      "Ubud Art Market",
      "Batik workshops in Ubud and Denpasar",
      "Textile galleries in Seminyak"
    ],
    price: "$-$$$"
  },
  {
    id: "7",
    name: "Roman Mosaics",
    description: "Handcrafted decorative pieces featuring tiny pieces of colored glass or stone arranged in patterns.",
    location: "Rome",
    locationSlug: "rome",
    origin: "Rome, Italy",
    category: "Art",
    image: "https://images.pexels.com/photos/19083034/pexels-photo-19083034/free-photo-of-mosaic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "Mosaic art has been part of Roman culture since ancient times. Today's artisans continue this tradition, creating both reproductions of ancient designs and contemporary works.",
    whereToFind: [
      "Vatican Mosaic Studio",
      "Artisan workshops in Trastevere",
      "Art galleries in central Rome"
    ],
    price: "$$-$$$$"
  },
  {
    id: "8",
    name: "Cape Wines",
    description: "Exceptional wines from the Cape Winelands, featuring distinctive South African varietals like Pinotage.",
    location: "Cape Town",
    locationSlug: "cape-town",
    origin: "Cape Winelands, South Africa",
    category: "Beverage",
    image: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    history: "Wine production in the Cape region dates back to the 17th century when European settlers planted the first vineyards. Today, the region is known for innovative winemaking and unique terroir.",
    whereToFind: [
      "Wine farms in Stellenbosch",
      "Franschhoek wine estates",
      "V&A Waterfront wine shops"
    ],
    price: "$$-$$$"
  }
]