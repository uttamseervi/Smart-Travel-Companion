import type { Dish } from "@/types/cuisine"

export const cuisineData: Record<string, Dish[]> = {
  jaipur: [
    {
      id: 1,
      name: "Dal Baati Churma",
      description:
        "A traditional Rajasthani dish consisting of baked wheat balls (baati), served with lentil curry (dal) and a sweet dish (churma).",
      fullDescription:
        "Dal Baati Churma is the most popular dish of Rajasthan. The baati is a hard, unleavened bread made with wheat flour, ghee and milk. It's baked in traditional ovens or on cow dung cakes. The dal is made with five different lentils, and churma is a sweet dish made by crushing the baati and mixing it with ghee and sugar.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      tags: ["Traditional", "Vegetarian", "Main Course"],
      origin: "Rajasthan",
      bestTimeToTry: "Lunch",
      ingredients: ["Wheat flour", "Ghee", "Lentils", "Spices", "Sugar"],
      culturalSignificance:
        "Dal Baati Churma has been a staple in Rajasthan for centuries. It was developed as a practical food for warriors and travelers in the arid region, as the baati could be prepared in advance and would stay fresh for several days.",
      whereToTry: [
        {
          name: "Chokhi Dhani",
          address: "Tonk Road, Jaipur",
        },
        {
          name: "Spice Court",
          address: "Civil Lines, Jaipur",
        },
      ],
    },
    {
      id: 2,
      name: "Laal Maas",
      description:
        "A fiery red meat curry made with mutton, yogurt, and a generous amount of red chilies, giving it its distinctive color and heat.",
      fullDescription:
        "Laal Maas, which translates to 'red meat', is a traditional Rajasthani meat curry known for its heat and depth of flavor. The dish gets its signature red color from the liberal use of mathania red chilies, which are grown in the Jodhpur region. The meat, usually mutton, is slow-cooked with yogurt, garlic, and a blend of spices until tender.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      tags: ["Non-Vegetarian", "Spicy", "Main Course"],
      origin: "Rajasthan",
      bestTimeToTry: "Dinner",
      ingredients: ["Mutton", "Mathania red chilies", "Yogurt", "Garlic", "Spices"],
      culturalSignificance:
        "Laal Maas was traditionally a hunting dish prepared by the royal families of Rajasthan. The intense spiciness was meant to mask the strong gamey flavor of freshly hunted meat and to preserve it in the hot desert climate.",
      whereToTry: [
        {
          name: "Handi Restaurant",
          address: "MI Road, Jaipur",
        },
        {
          name: "1135 AD",
          address: "Amber Fort, Jaipur",
        },
      ],
    },
    {
      id: 3,
      name: "Pyaaz Kachori",
      description:
        "A deep-fried pastry filled with a spicy onion filling, served with tangy tamarind and mint chutneys.",
      fullDescription:
        "Pyaaz Kachori is a popular Rajasthani snack that consists of a flaky, crispy pastry shell filled with a spicy mixture of onions, potatoes, and various spices. The kachori is deep-fried until golden brown and typically served with sweet tamarind chutney and spicy mint chutney. It's a beloved street food in Jaipur and throughout Rajasthan.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.6,
      tags: ["Snack", "Vegetarian", "Street Food"],
      origin: "Rajasthan",
      bestTimeToTry: "Breakfast or Evening Snack",
      ingredients: ["Flour", "Onions", "Potatoes", "Spices", "Oil"],
      culturalSignificance:
        "Kachoris are an integral part of Rajasthani cuisine and culture. They are often served during festivals and celebrations, and the pyaaz (onion) variety is particularly popular in Jaipur, where some shops have been selling them for generations.",
      whereToTry: [
        {
          name: "Rawat Misthan Bhandar",
          address: "Station Road, Jaipur",
        },
        {
          name: "Samrat Restaurant",
          address: "Chaura Rasta, Jaipur",
        },
      ],
    },
    {
      id: 4,
      name: "Gatte ki Sabzi",
      description:
        "A curry made with gram flour dumplings cooked in a spicy yogurt sauce, a signature dish of Rajasthani cuisine.",
      fullDescription:
        "Gatte ki Sabzi is a traditional Rajasthani curry made with gram flour (besan) dumplings called 'gatte'. The dumplings are prepared by mixing gram flour with spices, shaping them into cylinders, and then boiling them. These are then cut into pieces and simmered in a yogurt-based gravy flavored with spices like turmeric, red chili, and coriander. The dish is typically garnished with fresh coriander leaves and served hot.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
      tags: ["Vegetarian", "Main Course", "Traditional"],
      origin: "Rajasthan",
      bestTimeToTry: "Lunch",
      ingredients: ["Gram flour", "Yogurt", "Spices", "Ghee", "Coriander"],
      culturalSignificance:
        "Gatte ki Sabzi evolved as a practical dish in the water-scarce regions of Rajasthan. The gram flour dumplings provided protein in a region where fresh vegetables were often scarce due to the arid climate. It remains a staple in Rajasthani households and is often prepared during festivals and special occasions.",
      whereToTry: [
        {
          name: "Surya Mahal Restaurant",
          address: "Amer Road, Jaipur",
        },
        {
          name: "Laxmi Misthan Bhandar",
          address: "Johari Bazaar, Jaipur",
        },
      ],
    },
  ],
  goa: [
    {
      id: 1,
      name: "Goan Fish Curry",
      description: "A tangy and spicy curry made with coconut, kokum, and fresh fish, typically served with rice.",
      fullDescription:
        "Goan Fish Curry, locally known as 'Hooman', is a staple in Goan cuisine. This curry features a perfect balance of tangy, spicy, and slightly sweet flavors. It's made with fresh fish (usually kingfish, pomfret, or mackerel), coconut, kokum (a souring agent), and a blend of spices including Kashmiri red chilies, which give it its distinctive red color. The curry is typically served with steamed rice and is a must-try dish when visiting Goa.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      tags: ["Non-Vegetarian", "Seafood", "Main Course"],
      origin: "Goa",
      bestTimeToTry: "Lunch or Dinner",
      ingredients: ["Fish", "Coconut", "Kokum", "Red chilies", "Spices"],
      culturalSignificance:
        "Fish curry is central to Goan cuisine, reflecting the state's coastal location and the importance of fishing in the local economy. The dish showcases the blend of indigenous ingredients with influences from Portuguese colonial cuisine, particularly in the use of kokum and specific spice combinations.",
      whereToTry: [
        {
          name: "Mum's Kitchen",
          address: "Panaji, Goa",
        },
        {
          name: "Fisherman's Wharf",
          address: "Salcete, Goa",
        },
      ],
    },
    {
      id: 2,
      name: "Vindaloo",
      description:
        "A spicy curry made with meat (traditionally pork) marinated in vinegar, garlic, and a blend of spices.",
      fullDescription:
        "Vindaloo is one of Goa's most famous dishes, known worldwide for its fiery flavor. The name comes from the Portuguese dish 'Carne de Vinha d'Alhos' (meat marinated in wine and garlic). In Goa, the wine was replaced with vinegar, and local spices were added to create the distinctive vindaloo flavor. Traditional Goan vindaloo is made with pork, though it can also be prepared with chicken, beef, or lamb. The meat is marinated in a paste of vinegar, garlic, ginger, and spices, then cooked until tender.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      tags: ["Non-Vegetarian", "Spicy", "Main Course"],
      origin: "Goa (Portuguese-influenced)",
      bestTimeToTry: "Dinner",
      ingredients: ["Pork", "Vinegar", "Garlic", "Red chilies", "Spices"],
      culturalSignificance:
        "Vindaloo exemplifies the Portuguese influence on Goan cuisine. The dish evolved from the Portuguese preservation method of immersing meat in wine or vinegar. Over time, it incorporated local ingredients and spices, becoming a distinctly Goan dish that represents the fusion of European and Indian culinary traditions.",
      whereToTry: [
        {
          name: "Spice Goa",
          address: "Calangute, Goa",
        },
        {
          name: "Viva Panjim",
          address: "Panaji, Goa",
        },
      ],
    },
    {
      id: 3,
      name: "Bebinca",
      description:
        "A traditional Goan layered dessert made with coconut milk, eggs, and ghee, often served during celebrations.",
      fullDescription:
        "Bebinca is a rich, layered dessert that is considered the queen of Goan sweets. It consists of multiple layers (traditionally 7 or 16) made from a batter of coconut milk, egg yolks, sugar, and flour. Each layer is individually baked with ghee, creating a distinctive striped appearance when sliced. The dessert has a complex flavor profile with notes of coconut, caramel, and nutmeg. Bebinca is labor-intensive to prepare, often taking several hours to complete all the layers.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      tags: ["Dessert", "Sweet", "Traditional"],
      origin: "Goa (Portuguese-influenced)",
      bestTimeToTry: "After dinner or during festivals",
      ingredients: ["Coconut milk", "Egg yolks", "Sugar", "Flour", "Ghee"],
      culturalSignificance:
        "Bebinca holds a special place in Goan celebrations, particularly Christmas and weddings. It represents the Portuguese influence on Goan cuisine, especially in the use of egg yolks, which became common in Goan desserts during the colonial period. The dessert is often exchanged as gifts during festivals and is considered a symbol of Goan hospitality.",
      whereToTry: [
        {
          name: "Infantaria",
          address: "Calangute, Goa",
        },
        {
          name: "Confeitaria 31 De Janeiro",
          address: "Panaji, Goa",
        },
      ],
    },
    {
      id: 4,
      name: "Xacuti",
      description:
        "A complex curry made with roasted coconut and a blend of spices, typically prepared with chicken or lamb.",
      fullDescription:
        "Xacuti (pronounced 'sha-koo-tee') is a sophisticated Goan curry known for its complex flavor profile. The dish features meat (traditionally chicken or lamb) cooked in a gravy made from roasted coconut, red chilies, and a unique blend of spices including star anise, fennel, and poppy seeds. The spices are roasted and ground to create a distinctive, aromatic masala that gives xacuti its characteristic flavor. The curry has a rich, brown color and a depth of flavor that develops as it simmers.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.6,
      tags: ["Non-Vegetarian", "Main Course", "Traditional"],
      origin: "Goa",
      bestTimeToTry: "Lunch or Dinner",
      ingredients: ["Chicken/Lamb", "Coconut", "Red chilies", "Star anise", "Various spices"],
      culturalSignificance:
        "Xacuti represents the sophisticated spice blending techniques that evolved in Goan cuisine. The dish showcases the influence of various culinary traditions, including Portuguese, Konkan, and Mughal, that have shaped Goan food over centuries. It's particularly associated with special occasions and celebrations in Goan Christian communities.",
      whereToTry: [
        {
          name: "Mum's Kitchen",
          address: "Panaji, Goa",
        },
        {
          name: "Bhatti Village",
          address: "Nerul, Goa",
        },
      ],
    },
  ],
  kashmir: [
    {
      id: 1,
      name: "Rogan Josh",
      description:
        "A aromatic lamb curry known for its vibrant red color, made with Kashmiri red chilies and various spices.",
      fullDescription:
        "Rogan Josh is one of the signature dishes of Kashmiri cuisine. The name comes from Persian words 'Rogan' (oil) and 'Josh' (heat or passion). This aromatic curry features tender pieces of lamb cooked in a rich gravy made with Kashmiri red chilies, which give the dish its distinctive red color without making it excessively spicy. The gravy is flavored with a blend of spices including cardamom, cloves, cinnamon, and fennel seeds. Traditional Kashmiri Rogan Josh does not contain onions, garlic, or tomatoes, unlike many other Indian curries.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      tags: ["Non-Vegetarian", "Main Course", "Traditional"],
      origin: "Kashmir",
      bestTimeToTry: "Lunch or Dinner",
      ingredients: ["Lamb", "Kashmiri red chilies", "Yogurt", "Fennel powder", "Various spices"],
      culturalSignificance:
        "Rogan Josh is an integral part of the Wazwan, a multi-course ceremonial feast in Kashmiri cuisine. It represents the Persian and Central Asian influences on Kashmiri food, brought by the rulers who governed the region over centuries. The dish is often served during celebrations and is considered a symbol of Kashmiri hospitality and culinary excellence.",
      whereToTry: [
        {
          name: "Ahdoos Restaurant",
          address: "Residency Road, Srinagar",
        },
        {
          name: "Mughal Darbar",
          address: "Shervani Road, Srinagar",
        },
      ],
    },
    {
      id: 2,
      name: "Dum Aloo",
      description: "Baby potatoes cooked in a rich, spicy gravy, a vegetarian delicacy from Kashmiri cuisine.",
      fullDescription:
        "Kashmiri Dum Aloo features baby potatoes that are first deep-fried until golden and then slow-cooked in a rich, spiced yogurt gravy. The 'dum' cooking technique involves sealing the pot with dough and cooking over low heat, allowing the flavors to develop fully. The gravy is flavored with Kashmiri spices including fennel, ginger, and asafoetida, giving it a distinctive taste that's different from other regional versions of the dish. The finished dish has a thick, creamy gravy with a reddish hue from the Kashmiri red chilies.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      tags: ["Vegetarian", "Main Course", "Traditional"],
      origin: "Kashmir",
      bestTimeToTry: "Lunch",
      ingredients: ["Baby potatoes", "Yogurt", "Kashmiri red chilies", "Fennel powder", "Ginger"],
      culturalSignificance:
        "Dum Aloo is a staple in Kashmiri Pandit (Hindu) cuisine and represents the vegetarian tradition within Kashmiri food. The dish showcases the sophisticated use of spices and cooking techniques that developed in the region. It's often prepared during religious ceremonies and festivals, and is a popular choice for wedding feasts.",
      whereToTry: [
        {
          name: "Shamyana Restaurant",
          address: "Boulevard Road, Srinagar",
        },
        {
          name: "Krishna Vaishno Dhaba",
          address: "Durganag, Srinagar",
        },
      ],
    },
    {
      id: 3,
      name: "Kahwa",
      description:
        "A traditional Kashmiri green tea infused with saffron, cinnamon, cardamom, and almonds, served on special occasions.",
      fullDescription:
        "Kahwa is an aromatic green tea that is central to Kashmiri culture and hospitality. This fragrant beverage is prepared by brewing green tea leaves with a mixture of spices including cinnamon, cardamom, and star anise. The tea is infused with saffron strands, which give it a golden hue and distinctive flavor. Kahwa is typically sweetened with honey and garnished with crushed almonds or pistachios. It's traditionally served from a samovar, a special metal pot used for brewing and serving tea in Central Asia and Kashmir.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      tags: ["Beverage", "Traditional", "Aromatic"],
      origin: "Kashmir",
      bestTimeToTry: "Morning or Evening",
      ingredients: ["Green tea", "Saffron", "Cardamom", "Cinnamon", "Almonds"],
      culturalSignificance:
        "Kahwa is more than just a beverage in Kashmir; it's a symbol of hospitality and an integral part of social gatherings. The tea is served to welcome guests into homes and during important ceremonies like weddings. The preparation and serving of Kahwa follow specific rituals that have been passed down through generations, reflecting the region's rich cultural heritage and its historical connections to Central Asia and the Silk Road.",
      whereToTry: [
        {
          name: "Chai Jaai",
          address: "Residency Road, Srinagar",
        },
        {
          name: "Winterfell Café",
          address: "Rajbagh, Srinagar",
        },
      ],
    },
    {
      id: 4,
      name: "Yakhni",
      description: "A delicate yogurt-based curry flavored with aromatic spices, typically made with lamb or chicken.",
      fullDescription:
        "Yakhni is a subtle, aromatic curry that showcases the refined flavors of Kashmiri cuisine. Unlike many Indian curries, Yakhni is characterized by its light color and delicate flavor profile. The dish features meat (traditionally lamb or chicken) cooked in a yogurt-based gravy that's flavored with a specific blend of spices including fennel, cardamom, bay leaves, and dried mint. The yogurt is carefully added to prevent curdling, resulting in a smooth, creamy texture. Yakhni is typically garnished with fresh mint leaves and is served with steamed rice.",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.6,
      tags: ["Non-Vegetarian", "Main Course", "Traditional"],
      origin: "Kashmir",
      bestTimeToTry: "Lunch or Dinner",
      ingredients: ["Lamb/Chicken", "Yogurt", "Fennel powder", "Cardamom", "Dried mint"],
      culturalSignificance:
        "Yakhni is an important component of the Kashmiri Wazwan feast and represents the region's distinctive approach to meat cookery. The dish reflects the Persian and Central Asian influences on Kashmiri cuisine, particularly in its use of yogurt and specific spice combinations. Yakhni demonstrates the sophisticated culinary techniques that developed in Kashmir, where the emphasis is on bringing out the natural flavors of ingredients rather than masking them with heavy spices.",
      whereToTry: [
        {
          name: "Wazwan Restaurant",
          address: "Lal Chowk, Srinagar",
        },
        {
          name: "Ahdoos Restaurant",
          address: "Residency Road, Srinagar",
        },
      ],
    },
  ],
}
