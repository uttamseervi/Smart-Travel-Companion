"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown, ShoppingBag, Info } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { products } from '@/lib/constants/products';

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    }
  }
};

export default function GIProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.category.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  // Toggle product expansion
  const toggleProductExpansion = (productId: string) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/6646375/pexels-photo-6646375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Geographical Indication Products"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Geographical Indication Products
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100">
              Discover unique local products with protected geographical status and cultural significance
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for local products..."
                className="pl-10 py-6 text-base bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* What are GI Products */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <div className="md:w-1/3">
                  <Image
                    src="https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Geographical Indication"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">What are Geographical Indication Products?</h2>
                  <p className="text-muted-foreground mb-4">
                    Geographical Indication (GI) products are specialty goods that have a specific geographical origin and possess qualities, 
                    reputation, or characteristics that are essentially attributable to their place of origin. These products are protected 
                    by intellectual property rights that recognize their unique connection to their source region.
                  </p>
                  <p className="text-muted-foreground">
                    By purchasing GI products, you're not only getting authentic, high-quality items but also supporting 
                    traditional producers and helping preserve cultural heritage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Products listing */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 relative h-64 lg:h-auto">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="lg:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">{product.category}</Badge>
                        <Badge variant="secondary">
                          <MapPin className="h-3 w-3 mr-1" />
                          {product.location}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Origin</h4>
                          <p>{product.origin}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Price Range</h4>
                          <p>{product.price}</p>
                        </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="history" className="border-b-0">
                          <AccordionTrigger className="py-2 text-sm">
                            <div className="flex items-center">
                              <Info className="h-4 w-4 mr-2" />
                              Product History & Background
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-sm">
                            {product.history}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      
                      <h4 className="text-sm font-medium mb-2">Where to Find</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.whereToFind.map((place, index) => (
                          <Badge key={index} variant="outline" className="bg-primary/5">{place}</Badge>
                        ))}
                      </div>
                      
                      <Button>
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Find Retailers
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Benefits of GI Products */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits of GI Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Cultural Preservation",
                description: "GI products help preserve traditional knowledge and cultural practices that have been passed down through generations.",
                icon: "🏺"
              },
              {
                title: "Economic Development",
                description: "Protected GI status can increase product value and help improve livelihoods for local producers and artisans.",
                icon: "💰"
              },
              {
                title: "Quality Assurance",
                description: "GI products follow strict production standards that ensure authentic, high-quality goods for consumers.",
                icon: "✓"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}