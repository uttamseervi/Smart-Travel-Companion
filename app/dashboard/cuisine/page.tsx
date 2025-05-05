"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CuisineCard } from "@/components/cuisine/cuisine-card"
import { cuisineData } from "@/data/cuisine-data"
import { LocationSelector } from "@/components/shared/location-selector"

export default function CuisinePage() {
  const [location, setLocation] = useState("Goa")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCuisine = cuisineData[location.toLowerCase()].filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Local Cuisine</CardTitle>
          <CardDescription>Discover authentic local dishes and culinary experiences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <LocationSelector currentLocation={location} onLocationChange={setLocation} />
            <div className="flex-1">
              <Input
                placeholder="Search dishes, ingredients, or flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCuisine.map((dish) => (
              <CuisineCard key={dish.id} dish={dish} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
