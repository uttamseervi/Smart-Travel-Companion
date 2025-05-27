"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, Utensils, Store, Calendar, ChevronRight, Navigation } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { LocationCard } from '@/components/cards/location-card';
import { CuisineCard } from '@/components/cards/cuisine-card';
import { GeolocationPrompt } from '@/components/prompts/geolocation-prompt';

import { locations } from '@/lib/constants/locations';
import { cuisines } from '@/lib/constants/cuisines';
import { activities } from '@/lib/constants/activities';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  }
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const featuredLocations = locations.filter(location => location.featured);
  const featuredCuisines = cuisines.slice(0, 4);
  const popularActivities = activities.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Travel destination"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Discover the World's Hidden Treasures
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Your smart travel companion for authentic local experiences, cuisine, and culture
            </p>
            
            <div className="relative max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-1 shadow-lg border border-white/20">
              <div className="relative bg-white/90 dark:bg-gray-900/90 rounded-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="pl-11 py-6 text-base bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
                  Explore
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geolocation prompt */}
      <GeolocationPrompt />
      
      {/* Featured destinations */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Destinations</h2>
              <p className="text-muted-foreground mt-2">Discover our handpicked destinations for your next adventure</p>
            </div>
            <Link href="/destinations" className="flex items-center text-primary">
              View all <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredLocations.map((location) => (
              <motion.div key={location.id} variants={itemVariants}>
                <LocationCard location={location} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Local experiences tabs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Explore Local Experiences</h2>
          
          <Tabs defaultValue="cuisine" className="w-full">
            <TabsList className="mb-8 bg-background">
              <TabsTrigger value="cuisine" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Utensils className="mr-2 h-4 w-4" />
                Local Cuisine
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Store className="mr-2 h-4 w-4" />
                GI Products
              </TabsTrigger>
              <TabsTrigger value="activities" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                Activities
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="cuisine" className="mt-0">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {featuredCuisines.map((cuisine) => (
                  <motion.div key={cuisine.id} variants={itemVariants}>
                    <CuisineCard cuisine={cuisine} />
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/cuisine">
                    Explore All Cuisines
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-0">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div key={i} variants={itemVariants}>
                    <Card>
                      <CardContent className="p-0">
                        <div className="relative h-60 w-full overflow-hidden">
                          <Image
                            src={`https://images.pexels.com/photos/61180${i}/pexels-photo-61180${i}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                            alt="Product"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <Badge variant="outline" className="mb-2">Handcrafted</Badge>
                          <h3 className="text-xl font-semibold mb-2">Traditional Product {i}</h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            Discover unique locally-made products with cultural significance.
                          </p>
                          <Button variant="outline" asChild>
                            <Link href="/gi-products">Learn More</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/gi-products">
                    Explore All Products
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="activities" className="mt-0">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {popularActivities.map((activity) => (
                  <motion.div key={activity.id} variants={itemVariants}>
                    <Card className="overflow-hidden h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={activity.image}
                          alt={activity.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <Badge className="bg-primary text-primary-foreground">{activity.price}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                        <div className="flex items-center text-muted-foreground mb-2 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{activity.location}</span>
                          <span className="mx-2">•</span>
                          <span>{activity.duration}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(activity.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                          ))}
                          <span className="ml-1 text-xs text-muted-foreground">{activity.rating.toFixed(1)}</span>
                        </div>
                        <Button className="w-full">Book Now</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/bookings">
                    Explore All Activities
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Travel"
            fill
            className="object-cover brightness-[0.3]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg mb-8 text-gray-200">
              Create a personalized itinerary and discover the hidden gems of your next destination.
            </p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Navigation className="mr-2 h-4 w-4" />
              Plan Your Trip
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* User testimonials */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">Traveler Stories</h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            See how TravelBuddy has transformed the way people explore the world
          </p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Jessica K.",
                location: "Santorini, Greece",
                text: "TravelBuddy helped me discover a family-owned restaurant in Santorini that became the highlight of my trip. The local cuisine recommendations were spot on!"
              },
              {
                name: "Michael T.",
                location: "Kyoto, Japan",
                text: "The app suggested a traditional tea ceremony that wasn't in any of my guidebooks. It was an authentic cultural experience I would have missed otherwise."
              },
              {
                name: "Priya R.",
                location: "Marrakech, Morocco",
                text: "I loved learning about the artisanal products in Morocco. The app's historical context for each item made shopping much more meaningful."
              }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <p className="mb-4 italic text-muted-foreground">"{testimonial.text}"</p>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${i+10}`} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}