import type { Product } from "@/types/products"

export const giProductsData: Record<string, Product[]> = {
  kashmir: [
    {
      id: 1,
      name: "Pashmina Shawl",
      description:
        "Luxurious shawls made from the fine wool of Changthangi goats, known for their softness, warmth, and intricate embroidery.",
      fullDescription:
        "Pashmina shawls are among the finest textile products in the world, made from the wool of the Changthangi goat found in the high altitudes of Ladakh. The word 'Pashmina' comes from Persian, meaning 'made from wool'. True Pashmina is incredibly soft, lightweight, and warm, with fibers that are just 12-16 microns in diameter. Traditional Kashmiri Pashmina shawls often feature intricate hand embroidery called 'Sozni' or 'Kani', which can take months or even years to complete. Each shawl tells a story through its motifs, which typically include the paisley pattern, floral designs, and other nature-inspired elements.",
      image: "/placeholder.svg?height=300&width=400",
      price: 15000,
      origin: "Kashmir Valley",
      categories: ["Textiles", "Luxury", "Handcrafted"],
      giTagSince: "2008",
      culturalSignificance:
        "Pashmina shawls have been produced in Kashmir for centuries and are deeply intertwined with the region's cultural identity. They were once worn by royalty and nobility across Asia and Europe. The craft of Pashmina weaving and embroidery has been passed down through generations, with specific families specializing in different aspects of production. These shawls are often given as precious gifts during important life events like weddings and are considered heirlooms.",
      craftsmanship:
        "The production of a Pashmina shawl involves multiple skilled artisans. First, the raw wool is collected and cleaned. Then it is spun into fine yarn using traditional spinning wheels called 'charkha'. The yarn is woven on traditional looms to create the base fabric. Finally, skilled embroiderers add intricate designs using various stitching techniques. The entire process is done by hand, making each shawl unique and valuable.",
      whereToBuy: [
        {
          name: "Kashmir Government Arts Emporium",
          address: "Residency Road, Srinagar",
        },
        {
          name: "Suffering Moses",
          address: "Boulevard Road, Srinagar",
        },
      ],
    },
    {
      id: 2,
      name: "Kashmiri Walnut Wood Carving",
      description:
        "Exquisite carvings on walnut wood, featuring intricate designs and patterns, used for furniture and decorative items.",
      fullDescription:
        "Kashmiri walnut wood carving is a centuries-old craft that transforms the wood from walnut trees grown in the Kashmir Valley into stunning pieces of art. The walnut wood used in Kashmir is known for its rich, dark color and fine grain, making it ideal for detailed carving. Artisans create intricate designs featuring floral patterns, geometric shapes, and sometimes calligraphy or scenes from nature. The carving styles include deep carving, semi-carving, and fretwork. Products range from small decorative items like boxes and trays to larger pieces like screens, tables, and ornate furniture.",
      image: "/placeholder.svg?height=300&width=400",
      price: 8500,
      origin: "Kashmir Valley",
      categories: ["Woodcraft", "Home Decor", "Handcrafted"],
      giTagSince: "2008",
      culturalSignificance:
        "Walnut wood carving represents the rich artistic heritage of Kashmir and has been practiced since at least the 14th century. The craft flourished under the patronage of various rulers, particularly during the Mughal period. These wooden artifacts were once found in the homes of nobility and in places of worship. Today, they continue to be valued as symbols of Kashmiri craftsmanship and are often displayed prominently in homes as status symbols.",
      craftsmanship:
        "The process begins with selecting and seasoning the walnut wood, which can take up to three years to ensure stability. Artisans then sketch designs on the wood before using a variety of specialized chisels and tools to carve the patterns. The carving requires immense patience and precision, with some detailed pieces taking months to complete. After carving, the wood is sanded to a smooth finish and polished to enhance its natural color and grain. No artificial colors are used, preserving the authentic beauty of the wood.",
      whereToBuy: [
        {
          name: "Kashmir Handicrafts",
          address: "Polo View Market, Srinagar",
        },
        {
          name: "Subhana Brothers",
          address: "Boulevard Road, Srinagar",
        },
      ],
    },
    {
      id: 3,
      name: "Kashmiri Saffron",
      description: "The world's finest saffron, known for its distinct aroma, flavor, and medicinal properties.",
      fullDescription:
        "Kashmiri saffron, locally known as 'Zafran', is considered the finest saffron in the world due to its unique color, flavor, and aroma. It is derived from the flowers of Crocus sativus, which bloom for just a few weeks each year in the Pampore region of Kashmir. What makes Kashmiri saffron special is its high concentration of crocin (which gives it its deep red color), picrocrocin (which gives it its distinctive flavor), and safranal (which gives it its aroma). The stigmas of the flowers are carefully hand-picked during the brief flowering season, and it takes approximately 150,000 flowers to produce just one kilogram of saffron, making it one of the world's most expensive spices.",
      image: "/placeholder.svg?height=300&width=400",
      price: 500,
      origin: "Pampore, Kashmir",
      categories: ["Spice", "Culinary", "Medicinal"],
      giTagSince: "2020",
      culturalSignificance:
        "Saffron has been cultivated in Kashmir for over 2,500 years and is deeply embedded in the region's cultural and culinary traditions. It is used in special dishes during celebrations and religious ceremonies. In traditional Kashmiri medicine, saffron is believed to have various health benefits, including improving mood, boosting memory, and treating certain ailments. The annual saffron harvest is a significant cultural event in Kashmir, bringing communities together and maintaining a connection to ancient agricultural practices.",
      craftsmanship:
        "The cultivation and harvesting of Kashmiri saffron require specialized knowledge and skills that have been passed down through generations. The flowers bloom in late autumn and must be harvested early in the morning before they wilt in the sun. The three red stigmas are then carefully separated from each flower by hand – a delicate process that cannot be mechanized. After harvesting, the stigmas are dried in the shade to preserve their color and aromatic compounds. The entire process is labor-intensive and requires meticulous attention to detail to maintain the quality that makes Kashmiri saffron so prized.",
      whereToBuy: [
        {
          name: "Pampore Saffron Market",
          address: "Pampore, Kashmir",
        },
        {
          name: "Kashmir Kesar Depot",
          address: "Lal Chowk, Srinagar",
        },
      ],
    },
    {
      id: 4,
      name: "Kashmiri Paper Mache",
      description:
        "Colorful decorative items made from paper pulp, featuring vibrant paintings of flowers, birds, and Kashmiri landscapes.",
      fullDescription:
        "Kashmiri Paper Mache is a delicate decorative art form that transforms simple paper pulp into stunning objects of beauty. The craft involves two main processes: 'sakthsazi' (making the paper pulp object) and 'naqashi' (painting the object). Artisans create a variety of items including boxes, vases, trays, bowls, and ornaments. What makes Kashmiri Paper Mache distinctive is the intricate hand-painting that adorns each piece. Traditional designs feature vibrant floral patterns, particularly the chinar leaf, along with birds, mythological scenes, and geometric patterns. The colors are bold and rich, with gold and silver detailing often used to enhance the designs.",
      image: "/placeholder.svg?height=300&width=400",
      price: 2500,
      origin: "Kashmir Valley",
      categories: ["Handicraft", "Home Decor", "Art"],
      giTagSince: "2008",
      culturalSignificance:
        "Paper Mache was introduced to Kashmir in the 15th century from Persia and has since become an integral part of Kashmiri artistic expression. The craft flourished under the patronage of rulers who appreciated its beauty and versatility. Paper Mache items were traditionally used in royal courts and wealthy households, both for practical purposes and as decorative elements. Today, these colorful creations serve as cultural ambassadors, representing Kashmiri artistry around the world. Many designs tell stories from Kashmiri folklore or depict scenes of daily life in the valley.",
      craftsmanship:
        "The process begins with soaking paper in water until it becomes a pulp. This pulp is mixed with rice straw and copper sulphate (to prevent insects) and molded into the desired shape. After drying, the object is covered with layers of tissue paper and a coating of gypsum mixed with glue. It is then sanded until smooth and painted with a base coat. Skilled artists then apply intricate designs using natural pigments and fine brushes made from squirrel hair. Multiple layers of paint create depth and richness. Finally, a coating of varnish protects the artwork and gives it a glossy finish. The entire process can take weeks or even months for complex pieces.",
      whereToBuy: [
        {
          name: "Suffering Moses",
          address: "Boulevard Road, Srinagar",
        },
        {
          name: "Kashmir Government Arts Emporium",
          address: "Residency Road, Srinagar",
        },
      ],
    },
  ],
  jaipur: [
    {
      id: 1,
      name: "Blue Pottery",
      description:
        "Distinctive blue and white pottery made using a special technique with quartz, not clay, known for its vibrant colors and Persian-inspired designs.",
      fullDescription:
        "Jaipur Blue Pottery is a unique craft that stands out for its vibrant turquoise blue color and distinctive Persian-inspired designs. Unlike traditional pottery, it is not made from clay but from a mixture of quartz stone powder, fuller's earth, borax, gum, and water. This gives it a semi-translucent quality that enhances its visual appeal. The pottery is hand-molded and decorated with intricate motifs including flowers, birds, and geometric patterns, primarily in blue with accents of white, yellow, green, and brown. Common items include vases, plates, coasters, ashtrays, and decorative tiles. Each piece is fired only once at a relatively low temperature, making the process different from most other pottery traditions.",
      image: "/placeholder.svg?height=300&width=400",
      price: 1200,
      origin: "Jaipur, Rajasthan",
      categories: ["Pottery", "Home Decor", "Tableware"],
      giTagSince: "2008",
      culturalSignificance:
        "Blue Pottery came to Jaipur from Persia via Mughal courts in the 14th century. It was later revived and promoted by Maharaja Sawai Ram Singh II in the 19th century. The craft nearly disappeared in the early 20th century but was revived again through the efforts of patrons and artists who recognized its cultural importance. Today, it represents a living link to Jaipur's royal heritage and is one of the most recognizable crafts associated with the city. Blue Pottery items are not just decorative but also serve as cultural ambassadors, showcasing Rajasthan's artistic traditions to the world.",
      craftsmanship:
        "Creating Blue Pottery requires specialized skills passed down through generations. Artisans first prepare the dough-like material and shape it using molds. After drying, the pieces are carefully hand-painted with natural colors derived from metal oxides – cobalt oxide for blue, copper oxide for green, and others. The designs are applied freehand using squirrel-hair brushes, requiring steady hands and artistic precision. After painting, a glaze made from powdered glass, borax, lead oxide, boric acid, and zinc oxide is applied before firing the pieces in kilns at specific temperatures. The entire process takes several weeks and involves multiple artisans specializing in different stages of production.",
      whereToBuy: [
        {
          name: "Neerja International",
          address: "Bani Park, Jaipur",
        },
        {
          name: "Kripal Kumbh",
          address: "Bani Park, Jaipur",
        },
      ],
    },
    {
      id: 2,
      name: "Jaipur Block Print Textiles",
      description:
        "Hand-printed textiles using wooden blocks carved with intricate designs, featuring traditional motifs and natural dyes.",
      fullDescription:
        "Jaipur Block Printing is a centuries-old textile art where fabrics are adorned with intricate patterns using hand-carved wooden blocks. The process involves stamping fabric with wooden blocks that have been precisely carved with designs ranging from floral motifs to geometric patterns. Traditional Jaipur block prints feature distinctive motifs like the 'boot' (flower), 'leheriya' (waves), and 'jaal' (net pattern). The prints traditionally use natural dyes derived from plants, minerals, and sometimes insects, creating colors that are both vibrant and environmentally friendly. The Sanganer and Bagru regions near Jaipur are particularly famous for their distinctive styles of block printing, each with its own characteristic patterns and color palettes.",
      image: "/placeholder.svg?height=300&width=400",
      price: 1800,
      origin: "Jaipur, Rajasthan",
      categories: ["Textiles", "Fashion", "Home Decor"],
      giTagSince: "2010",
      culturalSignificance:
        "Block printing has been practiced in Rajasthan for over 500 years and is deeply connected to the region's cultural identity. Different communities of printers, known as 'Chippa', have their own distinctive styles and techniques passed down through generations. These textiles were historically used for royal garments, ceremonial cloths, and household items, with specific designs indicating social status or occasion. Today, Jaipur block prints continue to be an important part of Rajasthani cultural expression and have gained international recognition for their artistry and sustainable production methods.",
      craftsmanship:
        "The block printing process begins with preparing the fabric through washing and treating with natural mordants to help the dyes adhere. The wooden blocks, called 'bunta', are meticulously hand-carved from teak or sheesham wood by specialized artisans known as 'Kharadiyas'. Creating a set of blocks for a complex design can take weeks. The printer dips the block in a dye tray, carefully aligns it on the fabric, and applies pressure to transfer the design. Multiple blocks are used for different elements and colors in the pattern, requiring precise alignment. After printing, the fabric is washed and sometimes treated with natural fixatives. The entire process requires patience, skill, and an understanding of natural materials that comes from years of experience.",
      whereToBuy: [
        {
          name: "Anokhi",
          address: "C-11, KK Square, Prithviraj Road, C-Scheme, Jaipur",
        },
        {
          name: "Rasa Jaipur",
          address: "Ashok Nagar, Jaipur",
        },
      ],
    },
    {
      id: 3,
      name: "Kundan Meena Jewelry",
      description:
        "Exquisite jewelry featuring gemstones set in gold foil and decorated with colorful enamel work, a specialty of Jaipur's royal jewelers.",
      fullDescription:
        "Kundan Meena is a sophisticated jewelry-making technique that combines two distinct crafts: Kundan (the setting of glass or gemstones in gold foil) and Meena (colorful enamel work). This opulent style of jewelry originated in the royal courts of Rajasthan and is characterized by its intricate designs and vibrant colors. Typically, precious stones like diamonds, rubies, and emeralds are set into gold using the Kundan technique, while the reverse side is decorated with elaborate Meena (enamel) work featuring floral, animal, or mythological motifs. The contrast between the glittering stones on the front and the colorful enamel on the back creates pieces that are beautiful from every angle. Traditional forms include necklaces, earrings, bracelets, and elaborate headpieces that were once worn by royalty.",
      image: "/placeholder.svg?height=300&width=400",
      price: 75000,
      origin: "Jaipur, Rajasthan",
      categories: ["Jewelry", "Luxury", "Handcrafted"],
      giTagSince: "2012",
      culturalSignificance:
        "Kundan Meena jewelry has been an integral part of Rajasthan's royal heritage since the Mughal era. It was patronized by the Rajput kings of Jaipur, who established the city as a center for this craft. These jewels were symbols of royal status and were often part of a bride's trousseau in noble families. Many designs have symbolic meanings related to Hindu mythology or royal insignia. Today, while still associated with weddings and special occasions, Kundan Meena jewelry represents the continuation of a royal craft tradition and is considered a prestigious possession that is often passed down through generations.",
      craftsmanship:
        "Creating Kundan Meena jewelry requires collaboration between several specialized artisans. The process begins with goldsmiths creating the basic framework of the piece. Then, the 'Jadiya' (stone setter) sets the stones using the Kundan technique, which involves placing the stones in gold foil rather than prongs or bezels. On the reverse side, the 'Meenakar' (enamelist) applies layers of colored mineral-based enamel that is fired at high temperatures to create vibrant, glass-like surfaces. The colors traditionally used have specific meanings: red for love and fertility, green for life and happiness, white for purity, and blue for strength and courage. A single elaborate piece can take months to complete and involves techniques that have remained largely unchanged for centuries.",
      whereToBuy: [
        {
          name: "The Gem Palace",
          address: "M.I. Road, Jaipur",
        },
        {
          name: "Amrapali",
          address: "Panch Batti, M.I. Road, Jaipur",
        },
      ],
    },
    {
      id: 4,
      name: "Jaipur Leheriya",
      description:
        "Vibrant tie-dyed textiles with distinctive diagonal stripe patterns, created using a resist-dyeing technique.",
      fullDescription:
        "Leheriya is a traditional tie-dye textile art from Jaipur characterized by its distinctive diagonal stripes that resemble waves (the word 'leher' means 'wave' in Hindi). The fabric is folded diagonally and tied tightly with threads at regular intervals before dyeing. When unfolded, it reveals a pattern of diagonal lines. Mothda Leheriya, a more complex variation, creates a pattern of small dots along the diagonal lines by tying small points in the fabric. Traditional Leheriya uses vibrant colors like yellow, red, green, and turquoise, often in combinations that have specific cultural meanings. While originally made on fine cotton, today Leheriya patterns can be found on various fabrics including silk, chiffon, and georgette, used for sarees, turbans, and other garments.",
      image: "/placeholder.svg?height=300&width=400",
      price: 2500,
      origin: "Jaipur, Rajasthan",
      categories: ["Textiles", "Fashion", "Traditional Craft"],
      giTagSince: "2010",
      culturalSignificance:
        "Leheriya has deep cultural roots in Rajasthan and is traditionally associated with the monsoon season and its celebrations. The wave-like pattern symbolizes water, which is precious in the desert state. Specific color combinations are worn during particular festivals – for instance, red and yellow Leheriya is traditional during the spring festival of Teej. Historically, the colors and complexity of one's Leheriya indicated social status, with royal families wearing the most intricate designs. Today, while still maintaining its ceremonial importance, Leheriya has also evolved into a fashion statement that represents Rajasthani cultural identity.",
      craftsmanship:
        "Creating Leheriya requires specialized knowledge of both fabric preparation and dyeing techniques. The process begins with washing the fabric to remove any sizing or impurities. The fabric is then folded diagonally and tied at regular intervals with thread to resist the dye. For multi-colored Leheriya, the fabric goes through multiple rounds of tying and dyeing, starting with the lightest color and progressing to darker shades. The precision of the folding and tying determines the regularity of the final pattern. After dyeing, the fabric is carefully untied, washed, and dried in the shade to preserve the colors. Traditional Leheriya uses natural dyes, though synthetic dyes are now common. The entire process is done by hand and requires considerable skill to achieve consistent, even patterns.",
      whereToBuy: [
        {
          name: "Rajasthali",
          address: "M.I. Road, Jaipur",
        },
        {
          name: "Anokhi",
          address: "C-11, KK Square, Prithviraj Road, C-Scheme, Jaipur",
        },
      ],
    },
  ],
  goa: [
    {
      id: 1,
      name: "Goan Coconut Shell Crafts",
      description:
        "Eco-friendly handicrafts made from coconut shells, including decorative items, utensils, and jewelry.",
      fullDescription:
        "Goan Coconut Shell Crafts represent a sustainable art form that transforms discarded coconut shells into beautiful and functional items. Artisans carefully clean, cut, and polish the shells to create a variety of products including bowls, spoons, ladles, lamps, buttons, jewelry, musical instruments, and decorative pieces. The natural variations in the shell's color and texture are often incorporated into the design, creating unique patterns. Some pieces feature intricate carvings or inlays with other materials like wood or metal. The craft combines traditional techniques with contemporary designs, appealing to eco-conscious consumers while preserving a craft that has been practiced in coastal communities for generations.",
      image: "/placeholder.svg?height=300&width=400",
      price: 800,
      origin: "Goa",
      categories: ["Eco-friendly", "Home Decor", "Handicraft"],
      giTagSince: "2015",
      culturalSignificance:
        "Coconut shell crafts reflect Goa's coastal culture and the central role of coconuts in the region's economy and daily life. Traditionally, coastal communities in Goa practiced the principle of using every part of the coconut tree – 'the tree of life' – with nothing going to waste. The shells, which might otherwise be discarded, are transformed into useful and beautiful objects. These crafts represent a sustainable approach to art that has gained renewed appreciation in contemporary times. Many designs incorporate elements of Goan cultural symbols and patterns, connecting the craft to the region's unique Indo-Portuguese heritage.",
      craftsmanship:
        "Creating coconut shell crafts requires patience and specialized skills. Artisans first select and clean mature coconut shells, removing the husk and inner meat. The shells are then cut into the desired shapes using simple tools like saws and knives. For items like bowls, the natural shape of the shell is preserved, while other products require more extensive shaping. The pieces are sanded to achieve a smooth finish, often progressing through several grades of sandpaper. Some items are polished with coconut oil to enhance their natural color and provide a protective finish. More elaborate pieces may be carved with decorative patterns or inlaid with materials like wood, metal, or mother-of-pearl. The entire process is done by hand, making each piece unique.",
      whereToBuy: [
        {
          name: "Goa Handicrafts",
          address: "18th June Road, Panaji, Goa",
        },
        {
          name: "Anjuna Flea Market",
          address: "Anjuna Beach, Goa (Wednesdays only)",
        },
      ],
    },
    {
      id: 2,
      name: "Goan Cashew Feni",
      description:
        "A traditional spirit distilled from fermented cashew apple juice, unique to Goa with a distinctive flavor profile.",
      fullDescription:
        "Feni is a traditional spirit unique to Goa, with Cashew Feni being one of its most distinctive varieties. It is produced from the juice of cashew apples, which are the fleshy peduncles that attach the cashew nut to the tree. The production is seasonal, taking place during the cashew harvest from March to May. Cashew Feni has a strong, distinctive aroma and flavor profile that combines fruity, nutty, and slightly spicy notes. It is typically distilled twice or three times, with the strength increasing with each distillation. The final product usually has an alcohol content of about 42-45%. Traditionally consumed neat or with lime and water, Feni is now also used in cocktails that showcase its unique character.",
      image: "/placeholder.svg?height=300&width=400",
      price: 600,
      origin: "Goa",
      categories: ["Spirits", "Beverage", "Traditional"],
      giTagSince: "2009",
      culturalSignificance:
        "Feni holds a special place in Goan culture and is deeply intertwined with the region's social fabric. It is served at celebrations, used in traditional medicine, and offered to guests as a symbol of hospitality. The knowledge of Feni production has been passed down through generations, with many families having their own closely guarded recipes and techniques. During Portuguese colonial rule, Feni production became an act of cultural preservation, as it remained outside colonial taxation systems. Today, it represents a living heritage that connects modern Goa to its pre-colonial and colonial past, and it is often referred to as Goa's 'heritage drink.'",
      craftsmanship:
        "The production of Cashew Feni follows traditional methods that have remained largely unchanged for centuries. The process begins with collecting ripe cashew apples that have fallen from the tree. These are then stomped by foot in rock-cut basins called 'colmbi' to extract the juice – a method believed to provide the right pressure without crushing the seeds, which would impart bitterness. The juice is collected and allowed to naturally ferment for 3-4 days in earthen pots called 'mhondos'. The fermented juice is then distilled in a traditional pot still called 'bhatti', which is often made of clay or copper. The first distillation produces a liquid called 'urrack', which is distilled again to produce Feni. Some premium varieties undergo a third distillation. Throughout the process, no chemicals or additives are used, making Feni a natural, artisanal spirit.",
      whereToBuy: [
        {
          name: "Goa State Beverages Corporation Outlets",
          address: "Various locations across Goa",
        },
        {
          name: "Cazulo Premium Feni",
          address: "Margao, Goa",
        },
      ],
    },
    {
      id: 3,
      name: "Goan Kunbi Saree",
      description:
        "Traditional handwoven cotton sarees with distinctive red and black checks, worn by the Kunbi tribe of Goa.",
      fullDescription:
        "The Kunbi saree is a traditional handwoven cotton garment that represents the indigenous textile heritage of Goa. Named after the Kunbi tribe, who are among the original inhabitants of Goa, these sarees are characterized by their distinctive checkered pattern, primarily in red and black, though other colors are also used. The weave is simple but sturdy, reflecting its origins as practical attire for agricultural work. Traditional Kunbi sarees are shorter than standard sarees (about 4 meters instead of 6) and are draped in a distinctive style that allows for ease of movement. While originally made only of cotton, contemporary versions sometimes incorporate other materials like silk. The revival of this nearly extinct weaving tradition has led to innovations in design while maintaining the essential character of the Kunbi aesthetic.",
      image: "/placeholder.svg?height=300&width=400",
      price: 3500,
      origin: "Goa",
      categories: ["Textiles", "Fashion", "Traditional"],
      giTagSince: "2017",
      culturalSignificance:
        "The Kunbi saree represents the cultural identity of Goa's indigenous communities and their agricultural heritage. For centuries, it was the daily attire of Kunbi women working in the fields, with its practical design allowing freedom of movement. During Portuguese colonial rule, many indigenous practices were suppressed, and the Kunbi saree nearly disappeared. Its revival in recent decades symbolizes the reclamation of Goan indigenous identity and the preservation of pre-colonial cultural elements. Today, the Kunbi saree has transcended its tribal origins to become a symbol of Goan cultural heritage embraced by women across social backgrounds, especially during cultural events and festivals.",
      craftsmanship:
        "Weaving the Kunbi saree involves traditional handloom techniques that have been preserved by a small community of weavers. The process begins with preparing the cotton yarn, which is then dyed using natural or synthetic colors. The loom is set up with the warp (vertical threads) in one color and the weft (horizontal threads) in another, creating the characteristic checkered pattern when woven. The weaving is done on traditional pit looms, where the weaver sits with their feet in a pit that contains the pedals controlling the loom. The border and pallu (decorative end piece) often feature additional colors or simple motifs. The entire process is labor-intensive, with each saree taking several days to complete. The revival of this craft has involved documenting traditional designs and techniques from elderly community members and adapting them for contemporary production while maintaining authenticity.",
      whereToBuy: [
        {
          name: "Goa Handicrafts",
          address: "18th June Road, Panaji, Goa",
        },
        {
          name: "Wendell Rodricks Design Space",
          address: "Colvale, Goa",
        },
      ],
    },
    {
      id: 4,
      name: "Goan Azulejos",
      description:
        "Hand-painted ceramic tiles with Portuguese-influenced designs, used in architecture and decorative items.",
      fullDescription:
        "Goan Azulejos are decorative ceramic tiles that reflect the Portuguese influence on Goan art and architecture. The word 'azulejo' comes from the Arabic 'al-zellige', meaning 'polished stone'. These tiles feature hand-painted designs in blue and white, though other colors are also used. Traditional motifs include floral patterns, religious scenes, geometric designs, and nautical themes. In Goa, azulejos were historically used to decorate churches, mansions, and public buildings, serving both decorative and practical purposes in the tropical climate by helping to keep interiors cool. Contemporary Goan artisans continue this tradition, creating tiles for architectural use as well as decorative items like coasters, wall hangings, and table tops that incorporate traditional designs with modern adaptations.",
      image: "/placeholder.svg?height=300&width=400",
      price: 1200,
      origin: "Goa",
      categories: ["Ceramics", "Home Decor", "Architectural"],
      giTagSince: "2014",
      culturalSignificance:
        "Azulejos represent the unique Indo-Portuguese cultural fusion that characterizes Goa's heritage. Introduced during the Portuguese colonial period (1510-1961), these tiles became integrated into Goan architectural and artistic traditions, with local artisans developing their own distinctive styles that combined European techniques with Indian aesthetic sensibilities. The tiles often tell stories of Goa's history, religious beliefs, and daily life. In many historic buildings, azulejos serve as valuable historical documents, depicting scenes from the past. Their continued production and use in contemporary contexts represents the living legacy of Goa's multicultural heritage and its distinctive position at the crossroads of Eastern and Western artistic traditions.",
      craftsmanship:
        "Creating traditional Goan Azulejos involves several specialized techniques. The process begins with preparing the clay, which is shaped into square tiles and fired to create the bisque (unglazed pottery). The tiles are then covered with a white glaze that serves as the canvas for the hand-painted designs. Artists use mineral-based pigments, primarily cobalt oxide for the characteristic blue color, to paint the designs freehand or using stencils for more complex patterns. The painted tiles undergo a second firing to set the designs and create the glossy finish. Modern production sometimes incorporates screen printing techniques, but hand-painted tiles are still valued for their uniqueness and artistic quality. The craft requires not only technical skill in ceramics but also artistic ability and knowledge of traditional design elements.",
      whereToBuy: [
        {
          name: "Velha Goa Galeria",
          address: "Fontainhas, Panaji, Goa",
        },
        {
          name: "Azulejos de Goa",
          address: "Margao, Goa",
        },
      ],
    },
  ],
}
