"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/products/product-card"
import { giProductsData } from "@/data/gi-products-data"
import { LocationSelector } from "@/components/shared/location-selector"

export default function ProductsPage() {
  const [location, setLocation] = useState("Kashmir")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = giProductsData[location.toLowerCase()].filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>GI Products</CardTitle>
          <CardDescription>Explore authentic geographical indication products from different regions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <LocationSelector currentLocation={location} onLocationChange={setLocation} />
            <div className="flex-1">
              <Input
                placeholder="Search products, materials, or crafts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
