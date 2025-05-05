import type { Booking, Tour } from "@/types/bookings"

export const bookingsData: Booking[] = [
  {
    id: 1,
    name: "Taj Palace Hotel",
    description:
      "Luxury hotel with traditional Rajasthani architecture, offering spacious rooms with modern amenities and stunning views of Jaipur.",
    fullDescription:
      "Taj Palace Hotel is a 5-star luxury property that seamlessly blends traditional Rajasthani architecture with modern comforts. The hotel features intricately carved arches, beautiful courtyards, and lavish interiors decorated with local artwork. Each room is spacious and elegantly furnished, offering modern amenities including air conditioning, flat-screen TVs, and premium bedding. The property boasts multiple dining options serving authentic Rajasthani cuisine alongside international dishes. Guests can enjoy the outdoor swimming pool, spa services, and fitness center. The hotel's location provides easy access to major attractions while offering a peaceful retreat from the bustling city.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    price: 12000,
    location: "Jaipur",
    amenities: ["Swimming Pool", "Spa", "Restaurant", "Wifi", "Room Service", "Fitness Center"],
    reviews: [
      {
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "Absolutely stunning property with impeccable service. The traditional architecture made us feel like royalty!",
      },
      {
        name: "Michael Chen",
        rating: 4.5,
        comment: "Beautiful hotel with excellent amenities. The food at the restaurant was outstanding.",
      },
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "Perfect location for exploring Jaipur. The staff went above and beyond to make our stay special.",
      },
    ],
  },
  {
    id: 2,
    name: "Heritage Haveli",
    description:
      "Boutique hotel in a restored 150-year-old haveli, offering an authentic Rajasthani experience with modern comforts.",
    fullDescription:
      "Heritage Haveli is a boutique hotel housed in a carefully restored 150-year-old traditional mansion. This family-run property offers guests an authentic glimpse into Rajasthan's rich architectural and cultural heritage while providing all modern comforts. Each of the 20 rooms is uniquely decorated with antique furniture, local textiles, and artwork, centered around a traditional courtyard. The rooftop restaurant serves home-style Rajasthani cuisine with panoramic views of the city. The haveli's central location in the old city makes it perfect for exploring Jaipur's markets and monuments on foot. The owners and staff provide personalized service, including guided heritage walks and cooking demonstrations, creating a truly immersive cultural experience.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    price: 6500,
    location: "Jaipur",
    amenities: ["Free Breakfast", "Rooftop Restaurant", "Wifi", "Heritage Walks", "Airport Transfers"],
    reviews: [
      {
        name: "David Wilson",
        rating: 5,
        comment:
          "Staying in this haveli was the highlight of our trip. The architecture is stunning and the owners treated us like family.",
      },
      {
        name: "Emma Thompson",
        rating: 4,
        comment: "Beautiful property with so much character. The rooftop dining experience was magical.",
      },
      {
        name: "Rajiv Mehta",
        rating: 4.5,
        comment: "A perfect blend of heritage and comfort. The location is ideal for exploring the old city.",
      },
    ],
  },
  {
    id: 3,
    name: "Beachfront Resort",
    description:
      "Luxury beachfront property with private access to Calangute Beach, featuring Portuguese-inspired architecture and lush tropical gardens.",
    fullDescription:
      "Beachfront Resort is a premium property situated directly on the golden sands of Calangute Beach. The resort's architecture draws inspiration from Goa's Portuguese heritage, with whitewashed walls, terracotta roofs, and colorful azulejo tiles. Set amidst lush tropical gardens, the resort offers 75 rooms and villas, many with direct ocean views. Guests can enjoy multiple swimming pools, including an infinity pool overlooking the Arabian Sea, a full-service spa specializing in Ayurvedic treatments, and several dining options featuring fresh seafood and Goan specialties. Water sports facilities are available on the beach, and the resort organizes sunset cruises and fishing trips. The property strikes a perfect balance between relaxation and activity, with both quiet corners for relaxation and entertainment options including live music in the evenings.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    price: 15000,
    location: "Goa",
    amenities: ["Private Beach", "Swimming Pool", "Spa", "Water Sports", "Multiple Restaurants", "Bar"],
    reviews: [
      {
        name: "James Brown",
        rating: 5,
        comment:
          "Paradise found! The beachfront location is unbeatable and the staff made our honeymoon unforgettable.",
      },
      {
        name: "Sophia Garcia",
        rating: 4.5,
        comment: "Beautiful resort with excellent amenities. The infinity pool overlooking the ocean was spectacular.",
      },
      {
        name: "Aditya Patel",
        rating: 4,
        comment: "Great location and service. The Goan seafood at the restaurant was the best we had during our trip.",
      },
    ],
  },
  {
    id: 4,
    name: "Mountain View Cottage",
    description:
      "Charming wooden cottages nestled in the Himalayan foothills, offering breathtaking mountain views and a peaceful retreat.",
    fullDescription:
      "Mountain View Cottage offers a collection of traditional wooden cottages nestled in the serene foothills of the Himalayas. Each cottage features authentic Kashmiri architecture with intricate woodwork, while providing modern amenities for a comfortable stay. Floor-to-ceiling windows showcase breathtaking views of snow-capped peaks, and private balconies allow guests to immerse themselves in the natural beauty. The property includes an organic garden that supplies the restaurant, which serves traditional Kashmiri cuisine cooked in copper vessels over wood fires. Activities include guided nature walks, bird watching, and meditation sessions. During winter months, the cottages are especially magical, with snow-covered landscapes and cozy fireplaces in each unit. The property's commitment to sustainability includes solar heating, rainwater harvesting, and support for local artisans.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    price: 8500,
    location: "Kashmir",
    amenities: ["Mountain Views", "Fireplace", "Organic Restaurant", "Guided Treks", "Meditation Space", "Wifi"],
    reviews: [
      {
        name: "Robert Johnson",
        rating: 5,
        comment: "The most peaceful place I've ever stayed. Waking up to those mountain views was worth every penny.",
      },
      {
        name: "Ananya Sharma",
        rating: 5,
        comment:
          "Absolutely magical experience. The cottages are beautiful and the Kashmiri cuisine was authentic and delicious.",
      },
      {
        name: "Thomas Miller",
        rating: 4.5,
        comment:
          "A perfect retreat from the world. The staff was incredibly knowledgeable about the local area and culture.",
      },
    ],
  },
]

export const toursData: Tour[] = [
  {
    id: 1,
    name: "Royal Jaipur Heritage Walk",
    description:
      "A guided walking tour through the historic pink city, exploring hidden havelis, ancient temples, and vibrant markets.",
    fullDescription:
      "The Royal Jaipur Heritage Walk takes you through the heart of the old walled city, revealing layers of history and culture often missed by regular tourists. Led by expert local guides with deep knowledge of Jaipur's history, this 4-hour walking tour explores narrow lanes, hidden courtyards, and architectural gems dating back to the 18th century. You'll visit lesser-known temples, step inside historic havelis (mansions) with stunning frescoes, and learn about traditional crafts still practiced in family workshops. The tour includes stops at local food stalls to sample authentic Rajasthani snacks and chai. Highlights include the intricate Jharokhas (overhanging enclosed balconies), the ornate step-wells, and interactions with local families who have lived in the area for generations. This immersive experience provides insights into the daily life, traditions, and architectural heritage of the Pink City beyond the major tourist attractions.",
    image: "/placeholder.svg?height=300&width=400",
    price: 1500,
    location: "Jaipur",
    duration: "4 hours",
    groupSize: 8,
    category: "Cultural",
    included: [
      "Expert local guide",
      "Bottled water",
      "Traditional snacks and chai",
      "Entry fees to heritage buildings",
      "Handcrafted souvenir",
    ],
    itinerary: [
      {
        title: "Meeting Point - Hawa Mahal",
        description:
          "Meet your guide at the iconic Palace of Winds for an introduction to Jaipur's history and architecture.",
      },
      {
        title: "Old City Exploration",
        description:
          "Walk through the historic gates into the walled city, exploring ancient temples and hidden courtyards.",
      },
      {
        title: "Artisan Workshops",
        description: "Visit traditional craftsmen including bangle makers, textile printers, and gemstone carvers.",
      },
      {
        title: "Local Cuisine",
        description: "Sample authentic Rajasthani street food and chai at family-run establishments.",
      },
      {
        title: "Historic Haveli Visit",
        description: "Step inside a preserved historic mansion to see traditional architecture and lifestyle.",
      },
    ],
  },
  {
    id: 2,
    name: "Amber Fort & Elephant Ride",
    description:
      "Experience the majestic Amber Fort with a traditional elephant ride up the ramparts, followed by a guided tour of the palace complex.",
    fullDescription:
      "This half-day tour offers a royal experience of Jaipur's most famous fort complex. The adventure begins with a traditional elephant ride up the cobbled path to the main entrance of Amber Fort, recreating the journey once taken by Rajput royalty. As you ascend on elephant-back, enjoy panoramic views of Maota Lake and the surrounding Aravalli Hills. Upon reaching the fort, a knowledgeable guide will lead you through the four main sections of the palace complex, explaining the history and significance of each area. Highlights include the stunning Sheesh Mahal (Mirror Palace), where thousands of tiny mirrors create a dazzling effect; the Diwan-i-Aam (Hall of Public Audience); and the elegant Sukh Niwas with its ivory-inlaid sandalwood doors. The tour includes time to explore the beautiful gardens and the temple dedicated to the patron goddess of the royal family. Throughout the experience, your guide will share fascinating stories about the fort's construction, the daily life of royalty, and historical events that took place within these walls.",
    image: "/placeholder.svg?height=300&width=400",
    price: 2500,
    location: "Jaipur",
    duration: "5 hours",
    groupSize: 10,
    category: "Historical",
    included: [
      "Hotel pickup and drop-off",
      "Elephant ride to the fort entrance",
      "Professional guide",
      "Bottled water",
      "Entry fees",
      "Photography assistance",
    ],
    itinerary: [
      {
        title: "Hotel Pickup",
        description: "Comfortable air-conditioned vehicle will collect you from your accommodation in Jaipur.",
      },
      {
        title: "Elephant Ride",
        description: "Traditional elephant ride up the ramparts of Amber Fort, just as the royals once traveled.",
      },
      {
        title: "Guided Fort Tour",
        description:
          "Comprehensive tour of the palace complex including Sheesh Mahal, Diwan-i-Aam, and royal apartments.",
      },
      {
        title: "Photo Stops",
        description: "Time for photography at scenic viewpoints overlooking Maota Lake and the Aravalli Range.",
      },
      {
        title: "Return Journey",
        description: "Return to your hotel with the option to stop at a local handicraft center.",
      },
    ],
  },
  {
    id: 3,
    name: "South Goa Beach Hopping",
    description:
      "Explore the pristine and less crowded beaches of South Goa, with time for swimming, relaxation, and authentic Goan seafood.",
    fullDescription:
      "Escape the crowds and discover the unspoiled beauty of South Goa's beaches on this full-day tour. Traveling in a comfortable air-conditioned vehicle with a knowledgeable local guide, you'll visit five of South Goa's most beautiful beaches, each with its own distinct character. Start at the crescent-shaped Palolem Beach with its colorful beach huts and calm waters, perfect for a morning swim. Continue to the secluded Butterfly Beach, accessible only by boat, where you might spot dolphins in the distance. Next, visit the pristine Agonda Beach, known for its laid-back vibe and turtle nesting sites. After a delicious lunch of fresh seafood at a beachside shack, explore the dramatic landscape of Cola Beach with its freshwater lagoon. The tour concludes at Mobor Beach, where you can try water sports or simply relax with a sunset drink. Throughout the day, your guide will share insights about Goan culture, history, and the unique ecosystem of each beach. This tour offers the perfect balance of activity and relaxation, with plenty of time to swim, sunbathe, and take photographs.",
    image: "/placeholder.svg?height=300&width=400",
    price: 3000,
    location: "Goa",
    duration: "8 hours",
    groupSize: 6,
    category: "Beach",
    included: [
      "Air-conditioned transportation",
      "Expert local guide",
      "Boat ride to Butterfly Beach",
      "Seafood lunch with one beverage",
      "Bottled water throughout the day",
      "Beach towels and umbrellas",
    ],
    itinerary: [
      {
        title: "Palolem Beach",
        description: "Visit the picturesque crescent-shaped beach with time for swimming in the calm waters.",
      },
      {
        title: "Butterfly Beach",
        description: "Short boat ride to this hidden cove known for butterfly sightings and snorkeling opportunities.",
      },
      {
        title: "Agonda Beach",
        description:
          "Explore this pristine stretch of sand known for its laid-back atmosphere and turtle conservation.",
      },
      {
        title: "Seafood Lunch",
        description: "Authentic Goan seafood meal at a traditional beach shack with ocean views.",
      },
      {
        title: "Cola & Mobor Beaches",
        description: "Visit Cola Beach with its lagoon and end the day watching the sunset at Mobor Beach.",
      },
    ],
  },
  {
    id: 4,
    name: "Kashmir Houseboat Experience",
    description:
      "Spend a day on a traditional Kashmiri houseboat on Dal Lake, enjoying scenic views, shikara rides, and authentic Kashmiri cuisine.",
    fullDescription:
      "Immerse yourself in the unique cultural experience of staying on a traditional Kashmiri houseboat, known locally as a 'doonga'. These floating palaces are masterpieces of craftsmanship, featuring intricate walnut wood carvings, handwoven Kashmir carpets, and embroidered furnishings. Your experience begins with a shikara (traditional wooden boat) ride across the serene waters of Dal Lake to your houseboat. Once aboard, enjoy a welcome drink and orientation from your personal attendant who will be available throughout your stay. The houseboat features spacious bedrooms with attached bathrooms, a dining area, and a comfortable sitting room with panoramic windows overlooking the lake and distant mountains. During your stay, you'll enjoy multiple shikara rides to explore the floating gardens, visit the local floating market, and witness the unique lifestyle of the lake's inhabitants. A highlight is the authentic Wazwan meal (traditional Kashmiri multi-course feast) prepared by a skilled chef on board. As evening falls, watch the sunset paint the lake and mountains in golden hues from the comfort of your private deck. This overnight experience offers a perfect blend of luxury, culture, and natural beauty that has attracted visitors to Kashmir for centuries.",
    image: "/placeholder.svg?height=300&width=400",
    price: 7500,
    location: "Kashmir",
    duration: "24 hours",
    groupSize: 4,
    category: "Cultural",
    included: [
      "Overnight accommodation on luxury houseboat",
      "All meals including traditional Wazwan dinner",
      "Multiple shikara rides with guide",
      "Visit to floating market and gardens",
      "Cultural performance of Kashmiri music",
      "Pickup and drop-off from Srinagar hotels",
    ],
    itinerary: [
      {
        title: "Houseboat Check-in",
        description: "Scenic shikara ride to your houseboat followed by welcome ceremony and orientation.",
      },
      {
        title: "Lake Exploration",
        description: "Guided shikara tour of Dal Lake's floating gardens, lotus beds, and local villages.",
      },
      {
        title: "Floating Market",
        description: "Early morning visit to the famous floating vegetable market, a centuries-old tradition.",
      },
      {
        title: "Wazwan Feast",
        description: "Multi-course traditional Kashmiri dinner prepared fresh on board by a specialized chef.",
      },
      {
        title: "Sunrise Experience",
        description: "Optional early morning shikara ride to witness the magical sunrise over the Himalayan peaks.",
      },
    ],
  },
]
