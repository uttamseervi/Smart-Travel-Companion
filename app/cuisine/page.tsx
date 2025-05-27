"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Filter, Search, ChevronDown } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { CuisineCard } from '@/components/cards/cuisine-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cuisines } from '@/lib/constants/cuisines';
import { locations } from '@/lib/constants/locations';

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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

export default function CuisinePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('rating');
  
  // Filter cuisines based on search term, selected locations, and price range
  const filteredCuisines = cuisines.filter(cuisine => {
    const matchesSearch = cuisine.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cuisine.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocations.length === 0 || 
                           selectedLocations.includes(cuisine.locationSlug);
    
    const matchesPrice = priceRange.length === 0 || 
                         priceRange.includes(cuisine.price);
    
    return matchesSearch && matchesLocation && matchesPrice;
  });
  
  // Sort cuisines based on selected sort option
  const sortedCuisines = [...filteredCuisines].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  
  // Handle location filter change
  const handleLocationChange = (locationSlug: string) => {
    setSelectedLocations(prev => {
      if (prev.includes(locationSlug)) {
        return prev.filter(l => l !== locationSlug);
      } else {
        return [...prev, locationSlug];
      }
    });
  };
  
  // Handle price range filter change
  const handlePriceChange = (price: string) => {
    setPriceRange(prev => {
      if (prev.includes(price)) {
        return prev.filter(p => p !== price);
      } else {
        return [...prev, price];
      }
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Local Cuisine"
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
              Discover Local Cuisine
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100">
              Explore authentic dishes from around the world and find the best local restaurants
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for dishes or cuisines..."
                className="pl-10 py-6 text-base bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="w-full md:w-64 lg:w-72 hidden md:block">
              <div className="bg-card rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      setSelectedLocations([]);
                      setPriceRange([]);
                    }}
                    className="h-8 text-xs"
                  >
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Location filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Destinations</h3>
                    <div className="space-y-2">
                      {locations.map(location => (
                        <div className="flex items-center space-x-2" key={location.slug}>
                          <Checkbox 
                            id={`location-${location.slug}`} 
                            checked={selectedLocations.includes(location.slug)}
                            onCheckedChange={() => handleLocationChange(location.slug)}
                          />
                          <Label 
                            htmlFor={`location-${location.slug}`}
                            className="text-sm"
                          >
                            {location.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Price range filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {['$', '$$', '$$$', '$$$$'].map(price => (
                        <div className="flex items-center space-x-2" key={price}>
                          <Checkbox 
                            id={`price-${price}`} 
                            checked={priceRange.includes(price)}
                            onCheckedChange={() => handlePriceChange(price)}
                          />
                          <Label 
                            htmlFor={`price-${price}`}
                            className="text-sm"
                          >
                            {price}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile filters */}
            <div className="md:hidden mb-6">
              <div className="flex items-center justify-between gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* Location filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">Destinations</h3>
                        <div className="space-y-3">
                          {locations.map(location => (
                            <div className="flex items-center space-x-2" key={location.slug}>
                              <Checkbox 
                                id={`mobile-location-${location.slug}`} 
                                checked={selectedLocations.includes(location.slug)}
                                onCheckedChange={() => handleLocationChange(location.slug)}
                              />
                              <Label 
                                htmlFor={`mobile-location-${location.slug}`}
                                className="text-sm"
                              >
                                {location.name}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      {/* Price range filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">Price Range</h3>
                        <div className="space-y-3">
                          {['$', '$$', '$$$', '$$$$'].map(price => (
                            <div className="flex items-center space-x-2" key={price}>
                              <Checkbox 
                                id={`mobile-price-${price}`} 
                                checked={priceRange.includes(price)}
                                onCheckedChange={() => handlePriceChange(price)}
                              />
                              <Label 
                                htmlFor={`mobile-price-${price}`}
                                className="text-sm"
                              >
                                {price}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          onClick={() => {
                            setSelectedLocations([]);
                            setPriceRange([]);
                          }}
                          variant="outline"
                          className="w-full"
                        >
                          Reset Filters
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Local Cuisine</h2>
                  <p className="text-muted-foreground">
                    {filteredCuisines.length} {filteredCuisines.length === 1 ? 'dish' : 'dishes'} found
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                      <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {filteredCuisines.length > 0 ? (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {sortedCuisines.map((cuisine) => (
                    <motion.div key={cuisine.id} variants={itemVariants}>
                      <CuisineCard cuisine={cuisine} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <Card className="bg-muted/40 p-8 text-center">
                  <p className="text-muted-foreground mb-4">No cuisines found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLocations([]);
                      setPriceRange([]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}