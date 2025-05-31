"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { PlaceFinder } from '@/components/place-finder';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CuisinePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('catering.restaurant.indian');

  const categories = [
    { id: 'indian', label: 'Indian Restaurants', category: 'catering.restaurant.indian' },
    { id: 'chinese', label: 'Chinese Restaurants', category: 'catering.restaurant.chinese' },
    { id: 'cafe', label: 'Cafes', category: 'catering.cafe' },
  ];

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
          <div className="space-y-8">
            {/* Category Selection */}
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={cat.id}
                    checked={selectedCategory === cat.category}
                    onCheckedChange={(checked) => {
                      setSelectedCategory(checked ? cat.category : 'catering.restaurant.indian');
                    }}
                  />
                  <Label htmlFor={cat.id}>{cat.label}</Label>
                </div>
              ))}
            </div>

            {/* Selected Category Content */}
            {selectedCategory && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {categories.find(cat => cat.category === selectedCategory)?.label}
                </h2>
                <PlaceFinder
                  category={selectedCategory}
                  title={categories.find(cat => cat.category === selectedCategory)?.label || ''}
                />
              </div>
            )}

            {!selectedCategory && (
              <div className="text-center text-muted-foreground py-8">
                Please select a category to view restaurants
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}