"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Utensils, ShoppingBag, Landmark } from "lucide-react"

export function DashboardMap() {
  const [activeTab, setActiveTab] = useState("all")

  // Dummy map points data
  const mapPoints = {
    landmarks: [
      { id: 1, name: "Amber Fort", lat: 26.9855, lng: 75.8513, type: "landmark" },
      { id: 2, name: "Hawa Mahal", lat: 26.9239, lng: 75.8267, type: "landmark" },
      { id: 3, name: "City Palace", lat: 26.9258, lng: 75.8237, type: "landmark" },
      { id: 4, name: "Jantar Mantar", lat: 26.9247, lng: 75.8243, type: "landmark" },
    ],
    cuisine: [
      { id: 5, name: "Laxmi Misthan Bhandar", lat: 26.9124, lng: 75.7873, type: "cuisine" },
      { id: 6, name: "Sanjay Omelette", lat: 26.9198, lng: 75.8134, type: "cuisine" },
      { id: 7, name: "Rawat Misthan Bhandar", lat: 26.9121, lng: 75.7874, type: "cuisine" },
    ],
    products: [
      { id: 8, name: "Johari Bazaar", lat: 26.9244, lng: 75.8257, type: "product" },
      { id: 9, name: "Bapu Bazaar", lat: 26.9184, lng: 75.8212, type: "product" },
    ],
  }

  // Filter points based on active tab
  const getFilteredPoints = () => {
    if (activeTab === "all") {
      return [...mapPoints.landmarks, ...mapPoints.cuisine, ...mapPoints.products]
    }
    return mapPoints[activeTab as keyof typeof mapPoints] || []
  }

  const filteredPoints = getFilteredPoints()

  // Get icon based on point type
  const getIcon = (type: string) => {
    switch (type) {
      case "landmark":
        return <Landmark className="h-4 w-4" />
      case "cuisine":
        return <Utensils className="h-4 w-4" />
      case "product":
        return <ShoppingBag className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  // Get color based on point type
  const getColor = (type: string) => {
    switch (type) {
      case "landmark":
        return "bg-blue-500"
      case "cuisine":
        return "bg-orange-500"
      case "product":
        return "bg-emerald-500"
      default:
        return "bg-primary"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Explore Jaipur</CardTitle>
          <CardDescription>Discover landmarks, cuisine, and GI products</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="landmarks">Landmarks</TabsTrigger>
              <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>
            <TabsContent value={activeTab} className="mt-4">
              <div className="relative w-full h-[300px] bg-muted rounded-lg overflow-hidden">
                {/* Simulated map - in a real app, this would be a MapBox or Google Maps component */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/placeholder.svg?height=600&width=800')",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Map markers */}
                  {filteredPoints.map((point) => (
                    <div
                      key={point.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                      style={{
                        // These percentages would be calculated from lat/lng in a real app
                        left: `${(point.lng - 75.78) * 200 + 50}%`,
                        top: `${(26.99 - point.lat) * 200 + 50}%`,
                      }}
                    >
                      <div className={`${getColor(point.type)} text-white p-1 rounded-full`}>{getIcon(point.type)}</div>
                      <div className="mt-1 bg-background shadow-sm rounded-md px-2 py-1 text-xs font-medium">
                        {point.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map legend */}
                <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm p-2 rounded-md">
                  <div className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="bg-blue-500 text-white p-1 rounded-full">
                        <Landmark className="h-3 w-3" />
                      </div>
                      <span>Landmarks</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="bg-orange-500 text-white p-1 rounded-full">
                        <Utensils className="h-3 w-3" />
                      </div>
                      <span>Cuisine</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="bg-emerald-500 text-white p-1 rounded-full">
                        <ShoppingBag className="h-3 w-3" />
                      </div>
                      <span>GI Products</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Points of Interest</h4>
                <div className="flex flex-wrap gap-2">
                  {filteredPoints.map((point) => (
                    <Badge key={point.id} variant="outline" className="flex items-center gap-1">
                      {getIcon(point.type)}
                      {point.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}
