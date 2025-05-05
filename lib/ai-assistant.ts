// Dummy AI assistant responses based on user input and location

type AIResponse = {
  [location: string]: {
    [keyword: string]: string
  }
}

// Predefined responses for different locations and keywords
const responses: AIResponse = {
  jaipur: {
    default:
      "Jaipur, known as the Pink City, is famous for its stunning architecture, vibrant markets, and rich cultural heritage. What would you like to know about Jaipur?",
    food: "Jaipur offers delicious Rajasthani cuisine. Try Dal Baati Churma, Laal Maas, Gatte ki Sabzi, and Pyaaz Kachori. For the best food experience, visit Chokhi Dhani, LMB, or Handi Restaurant.",
    places:
      "Must-visit places in Jaipur include Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, and Jal Mahal. For a less touristy experience, check out Nahargarh Fort and Albert Hall Museum.",
    shopping:
      "Jaipur is a shopper's paradise! Visit Johari Bazaar for jewelry, Bapu Bazaar for textiles and footwear, and Tripolia Bazaar for bangles and brass items. Don't forget to buy Blue Pottery and Bandhani textiles.",
    weather:
      "Jaipur has a hot semi-arid climate. The best time to visit is from October to March when the weather is pleasant. Summers (April-June) can be extremely hot, while monsoon (July-September) brings moderate rainfall.",
    transport:
      "You can get around Jaipur by auto-rickshaws, taxis, or the city bus service. For a unique experience, try the cycle rickshaws in the old city area. Uber and Ola are also available.",
  },
  goa: {
    default:
      "Goa is India's beach paradise with a unique blend of Indian and Portuguese cultures. What would you like to know about Goa?",
    food: "Goan cuisine is a delightful mix of Indian and Portuguese influences. Try Goan Fish Curry, Vindaloo, Sorpotel, and Bebinca. For seafood, visit Martin's Corner, Britto's, or Fisherman's Wharf.",
    places:
      "Goa has beautiful beaches like Baga, Calangute, and Anjuna in North Goa, and Palolem and Agonda in South Goa. Also visit Old Goa churches, Dudhsagar Falls, and spice plantations.",
    shopping:
      "Shop at the Anjuna Flea Market (Wednesdays), Mapusa Market (Fridays), and Arpora Night Market (Saturdays). Look for Goan cashews, spices, feni (local liquor), and handmade jewelry.",
    weather:
      "Goa has a tropical monsoon climate. The best time to visit is from November to February when it's dry and less humid. Avoid the monsoon season (June-September) unless you enjoy the rain.",
    transport:
      "Rent a scooter or motorcycle to explore Goa like a local. Taxis, auto-rickshaws, and rental cars are also available. For budget travel, try the state-run buses.",
  },
  kashmir: {
    default:
      "Kashmir, often called 'Paradise on Earth,' is known for its breathtaking landscapes, serene lakes, and majestic mountains. What would you like to know about Kashmir?",
    food: "Kashmiri cuisine is rich and aromatic. Try Rogan Josh, Dum Aloo, Yakhni, and Wazwan (a multi-course meal). Don't miss Kahwa (Kashmiri tea) and Phirni (dessert).",
    places:
      "Must-visit places include Dal Lake, Gulmarg, Pahalgam, Sonamarg, and Mughal Gardens. Take a shikara ride on Dal Lake and a gondola ride in Gulmarg.",
    shopping:
      "Shop for Pashmina shawls, Kashmiri carpets, walnut wood carvings, and saffron. Visit Lal Chowk in Srinagar for the main markets.",
    weather:
      "Kashmir has distinct seasons. Summer (May-August) is pleasant, autumn (September-November) is colorful, winter (December-February) brings snow, and spring (March-April) sees blooming flowers.",
    transport:
      "Get around by taxis, auto-rickshaws, or buses. For a unique experience, try a shikara ride on Dal Lake or a pony ride in Gulmarg or Pahalgam.",
  },
}

// Function to get AI response based on user input and location
export function getAIResponse(input: string, location: string): string {
  const lowercaseInput = input.toLowerCase()
  const lowercaseLocation = location.toLowerCase()

  // Check if we have responses for this location
  const locationResponses = responses[lowercaseLocation] || responses.jaipur // Default to Jaipur

  // Check for keywords in the input
  if (
    lowercaseInput.includes("food") ||
    lowercaseInput.includes("eat") ||
    lowercaseInput.includes("cuisine") ||
    lowercaseInput.includes("restaurant")
  ) {
    return locationResponses.food
  } else if (
    lowercaseInput.includes("place") ||
    lowercaseInput.includes("visit") ||
    lowercaseInput.includes("see") ||
    lowercaseInput.includes("attraction")
  ) {
    return locationResponses.places
  } else if (
    lowercaseInput.includes("shop") ||
    lowercaseInput.includes("buy") ||
    lowercaseInput.includes("market") ||
    lowercaseInput.includes("souvenir")
  ) {
    return locationResponses.shopping
  } else if (
    lowercaseInput.includes("weather") ||
    lowercaseInput.includes("climate") ||
    lowercaseInput.includes("temperature") ||
    lowercaseInput.includes("season")
  ) {
    return locationResponses.weather
  } else if (
    lowercaseInput.includes("transport") ||
    lowercaseInput.includes("travel") ||
    lowercaseInput.includes("get around") ||
    lowercaseInput.includes("commute")
  ) {
    return locationResponses.transport
  }

  // Default response if no keywords match
  return locationResponses.default
}
