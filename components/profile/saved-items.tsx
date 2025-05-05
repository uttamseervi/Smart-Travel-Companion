"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

// Dummy saved items data
const savedItems = {
  landmarks: [
    {
      id: 1,
      name: "Amber Fort",
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      name: "Hawa Mahal",
      location: "Jaipur, Rajasthan",
      rating: 4.6,
      image: "/placeholder.svg?height=100&width=150",
    },
  ],
  cuisine: [
    {
      id: 3,
      name: "Dal Baati Churma",
      location: "Chokhi Dhani, Jaipur",
      rating: 4.7,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 4,
      name: "Laal Maas",
      location: "Handi Restaurant, Jaipur",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=150",
    },
  ],
  products: [
    {
      id: 5,
      name: "Blue Pottery",
      location: "Johari Bazaar, Jaipur",
      rating: 4.6,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 6,
      name: "Bandhani Textiles",
      location: "Bapu Bazaar, Jaipur",
      rating: 4.4,
      image: "/placeholder.svg?height=100&width=150",
    },
  ],
}

export function SavedItems() {
  return (
    <Tabs defaultValue="landmarks">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="landmarks">Landmarks</TabsTrigger>
        <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
      </TabsList>

      <TabsContent value="landmarks" className="mt-6">
        <div className="space-y-4">
          {savedItems.landmarks.map((item) => (
            <SavedItemCard key={item.id} item={item} type="landmarks" />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="cuisine" className="mt-6">
        <div className="space-y-4">
          {savedItems.cuisine.map((item) => (
            <SavedItemCard key={item.id} item={item} type="cuisine" />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="products" className="mt-6">
        <div className="space-y-4">
          {savedItems.products.map((item) => (
            <SavedItemCard key={item.id} item={item} type="products" />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

interface SavedItemCardProps {
  item: {
    id: number
    name: string
    location: string
    rating: number
    image: string
  }
  type: "landmarks" | "cuisine" | "products"
}

function SavedItemCard({ item, type }: SavedItemCardProps) {
  const getLink = () => {
    switch (type) {
      case "landmarks":
        return "/dashboard/landmarks"
      case "cuisine":
        return "/dashboard/cuisine"
      case "products":
        return "/dashboard/products"
      default:
        return "/dashboard"
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div
            className="w-20 h-20 bg-cover bg-center rounded-md flex-shrink-0"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{item.rating}</span>
              </div>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <Badge variant="outline">{type.charAt(0).toUpperCase() + type.slice(1, -1)}</Badge>
              <Button asChild variant="ghost" size="sm" className="h-8 gap-1">
                <Link href={getLink()}>
                  <span>View</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
