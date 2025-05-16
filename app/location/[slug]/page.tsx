"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, Utensils, Store, Calendar, ChevronLeft, Heart, Share2, MapIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CuisineCard } from '@/components/cards/cuisine-card';

import { locations, Location } from '@/lib/constants/locations';
import { cuisines } from '@/lib/constants/cuisines';
import { products } from '@/lib/constants/products';
import { activities } from '@/lib/constants/activities';

export default function LocationPage() {
  const { slug } = useParams();
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    // Simulating data fetching
    const foundLocation = locations.find(loc => loc.slug === slug);
    setLocation(foundLocation || null);
    setIsLoading(false);
  }, [slug]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  if (!location) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Location not found</h1>
        <p className="mb-8 text-muted-foreground">We couldn't find the location you're looking for.</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    );
  }
  
  const locationCuisines = cuisines.filter(cuisine => cuisine.locationSlug === slug);
  const locationProducts = products.filter(product => product.locationSlug === slug);
  const locationActivities = activities.filter(activity => activity.locationSlug === slug);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={location.image}
            alt={location.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="absolute top-6 left-6 z-10">
          <Button variant="outline" size="sm" asChild className="bg-background/30 backdrop-blur-sm border-white/10 text-white hover:bg-background/40">
            <Link href="/">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
        </div>
        
        <div className="absolute top-6 right-6 z-10 flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className={`bg-background/30 backdrop-blur-sm border-white/10 text-white hover:bg-background/40 ${liked ? 'text-red-500 hover:text-red-600' : ''}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            <span className="sr-only">Like</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="bg-background/30 backdrop-blur-sm border-white/10 text-white hover:bg-background/40"
          >
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="container relative z-10 mx-auto px-4 py-12 flex flex-col justify-end h-full"
        >
          <div className="max-w-3xl text-white mb-6">
            <div className="flex items-center mb-2">
              <Badge className="bg-primary/80 text-primary-foreground">{location.country}</Badge>
              <div className="flex items-center ml-3">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm">{location.rating.toFixed(1)} rating</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{location.name}</h1>
            <p className="text-lg text-gray-200">{location.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {location.categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Main content */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8 w-full justify-start overflow-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="cuisine">Local Cuisine</TabsTrigger>
              <TabsTrigger value="products">GI Products</TabsTrigger>
              <TabsTrigger value="activities">Things to Do</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">About {location.name}</h2>
                      <p className="text-muted-foreground mb-6">
                        {location.description} Located in {location.country}, this destination offers a unique blend of culture, history, and natural beauty.
                        The city's rich heritage is reflected in its architecture, cuisine, and traditions, making it a must-visit for travelers seeking authentic experiences.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {["Cultural experiences", "Local cuisine", "Scenic views", "Historical sites"].map((highlight, index) => (
                          <div key={index} className="flex items-start">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                              <span className="text-primary text-sm">✓</span>
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
                      <p className="text-muted-foreground mb-6">
                        The ideal time to visit {location.name} is during spring (April-June) and fall (September-November) 
                        when the weather is pleasant and there are fewer tourists.
                      </p>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" className="flex items-center gap-2">
                          <MapIcon className="h-4 w-4" />
                          View on Map
                        </Button>
                        
                        <Button className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Plan Your Visit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Country</span>
                          <span className="font-medium">{location.country}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Best for</span>
                          <span className="font-medium">{location.categories.join(', ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rating</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < Math.floor(location.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                            ))}
                            <span className="ml-1 text-sm">{location.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Language</span>
                          <span className="font-medium">Local + English</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Currency</span>
                          <span className="font-medium">Local Currency</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Weather</h3>
                      <div className="space-y-3">
                        {["Spring", "Summer", "Fall", "Winter"].map((season) => (
                          <div key={season} className="flex items-center justify-between">
                            <span>{season}</span>
                            <div className="flex items-center">
                              <span className="text-sm">
                                {season === "Summer" ? "25-32°C" : 
                                 season === "Winter" ? "5-15°C" : 
                                 "15-25°C"}
                              </span>
                              <span className="ml-2 text-lg">
                                {season === "Summer" ? "☀️" : 
                                 season === "Winter" ? "❄️" : 
                                 season === "Spring" ? "🌱" : "🍂"}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cuisine" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Local Cuisine in {location.name}</h2>
                <p className="text-muted-foreground">
                  Discover the authentic flavors of {location.name} through these local culinary delights.
                </p>
              </div>
              
              {locationCuisines.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locationCuisines.map((cuisine) => (
                    <CuisineCard key={cuisine.id} cuisine={cuisine} />
                  ))}
                </div>
              ) : (
                <Card className="bg-muted/40">
                  <CardContent className="p-6 text-center">
                    <Utensils className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No cuisine data available</h3>
                    <p className="text-muted-foreground mb-4">
                      We're still collecting information about the local cuisine in {location.name}.
                    </p>
                    <Button variant="outline">Suggest a Dish</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="products" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Geographical Indication Products</h2>
                <p className="text-muted-foreground">
                  Unique products with protected geographical indication status from {location.name}.
                </p>
              </div>
              
              {locationProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {locationProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="md:flex h-full">
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <Badge variant="outline" className="mb-2">{product.category}</Badge>
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {product.description}
                          </p>
                          <p className="text-sm mb-4">
                            <span className="font-medium">Origin:</span> {product.origin}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{product.price}</span>
                            <Button variant="outline" size="sm">Learn More</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-muted/40">
                  <CardContent className="p-6 text-center">
                    <Store className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No product data available</h3>
                    <p className="text-muted-foreground mb-4">
                      We're still collecting information about local products in {location.name}.
                    </p>
                    <Button variant="outline">Suggest a Product</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="activities" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Things to Do in {location.name}</h2>
                <p className="text-muted-foreground">
                  Explore these top-rated activities and experiences in and around {location.name}.
                </p>
              </div>
              
              {locationActivities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {locationActivities.map((activity) => (
                    <Card key={activity.id} className="overflow-hidden h-full">
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
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{activity.duration}</span>
                          <div className="flex items-center ml-auto">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(activity.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                            ))}
                            <span className="ml-1 text-xs">{activity.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {activity.description}
                        </p>
                        
                        <ScrollArea className="h-20 mb-4 rounded border p-2">
                          <div className="space-y-1">
                            {activity.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-start">
                                <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-2">
                                  <span className="text-primary text-xs">✓</span>
                                </div>
                                <span className="text-xs">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                        
                        <Button className="w-full">Book Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="bg-muted/40">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No activity data available</h3>
                    <p className="text-muted-foreground mb-4">
                      We're still collecting information about activities in {location.name}.
                    </p>
                    <Button variant="outline">Suggest an Activity</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}