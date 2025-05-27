"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Utensils } from 'lucide-react';
import { Cuisine } from '@/lib/constants/cuisines';

interface CuisineCardProps {
  cuisine: Cuisine;
}

export function CuisineCard({ cuisine }: CuisineCardProps) {
  return (
    <Link href={`/cuisine/${cuisine.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden h-full">
          <div className="relative h-48 w-full">
            <Image
              src={cuisine.image}
              alt={cuisine.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-black/60 text-white border-none font-normal">
                {cuisine.price}
              </Badge>
            </div>
            
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="text-lg font-semibold mb-1">{cuisine.name}</h3>
              <div className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span className="text-xs">{cuisine.location}</span>
                
                <div className="flex items-center ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < Math.floor(cuisine.rating) ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
                  ))}
                  <span className="ml-1 text-xs">{cuisine.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {cuisine.description}
            </p>
            <div className="mt-2 text-sm flex items-center text-primary">
              <Utensils className="h-3.5 w-3.5 mr-1" />
              <span>{cuisine.restaurants.length} restaurants nearby</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}