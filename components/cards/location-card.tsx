"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import { Location } from '@/lib/constants/locations';

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Link href={`/destinations/${location.slug}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="overflow-hidden h-full">
          <div className="relative h-64 w-full">
            <Image
              src={location.image}
              alt={location.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
              {location.categories.slice(0, 2).map((category, index) => (
                <Badge key={index} variant="secondary" className="bg-black/60 text-white border-none font-normal">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{location.name}</h3>
              <div className="flex items-center mb-1">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span className="text-sm">{location.country}</span>
              </div>

              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < Math.floor(location.rating) ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
                ))}
                <span className="ml-1 text-xs">{location.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}