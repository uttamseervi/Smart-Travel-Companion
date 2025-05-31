"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown, ShoppingBag, Info } from 'lucide-react';
import { PlaceFinder } from '@/components/place-finder';
import { Separator } from '@/components/ui/separator';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Product } from '@/lib/constants/products';

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
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/gi-products${searchTerm ? `?search=${encodeURIComponent(searchTerm)}` : ''}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(() => {
      fetchProducts();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

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
          </motion.div>
        </div>
      </section>

      {/* Products listing */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Nearby Markets Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Find Nearby Markets & Supermarkets</h2>
            <div className="grid grid-cols-1  gap-6">
              <div className=''>
                <PlaceFinder
                  category="commercial.supermarket"
                  title="Supermarkets"
                />
              </div>
            </div>
          </div>
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