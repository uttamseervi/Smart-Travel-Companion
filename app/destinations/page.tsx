"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { LocationCard } from '@/components/cards/location-card';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('rating');
  
  // Get unique categories
  const allCategories = Array.from(
    new Set(locations.flatMap(location => location.categories))
  ).sort();
  
  // Filter locations based on search and filters
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         location.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
                           location.categories.some(cat => selectedCategories.includes(cat));
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort locations based on selected sort option
  const sortedLocations = [...filteredLocations].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  
  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Destinations"
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
              Explore Amazing Destinations
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Discover unique places and create unforgettable memories
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search destinations..."
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
                    onClick={() => setSelectedCategories([])}
                    className="h-8 text-xs"
                  >
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Category filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                        <div className="flex items-center space-x-2" key={category}>
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label 
                            htmlFor={`category-${category}`}
                            className="text-sm capitalize"
                          >
                            {category}
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
                    <div className="mt-6">
                      {/* Category filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">Categories</h3>
                        <div className="space-y-3">
                          {allCategories.map(category => (
                            <div className="flex items-center space-x-2" key={category}>
                              <Checkbox 
                                id={`mobile-category-${category}`} 
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => handleCategoryChange(category)}
                              />
                              <Label 
                                htmlFor={`mobile-category-${category}`}
                                className="text-sm capitalize"
                              >
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          onClick={() => setSelectedCategories([])}
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
                  <h2 className="text-2xl font-bold">All Destinations</h2>
                  <p className="text-muted-foreground">
                    {filteredLocations.length} {filteredLocations.length === 1 ? 'destination' : 'destinations'} found
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
              
              {filteredLocations.length > 0 ? (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {sortedLocations.map((location) => (
                    <motion.div key={location.id} variants={itemVariants}>
                      <LocationCard location={location} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <Card className="bg-muted/40 p-8 text-center">
                  <p className="text-muted-foreground mb-4">No destinations found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategories([]);
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