"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Info, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ProductDetailsModal } from "@/components/products/product-details-modal"
import type { Product } from "@/types/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast()
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleBuy = () => {
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }} />
        <CardContent className="pt-6 flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <Badge variant="outline" className="text-xs">
              GI Product
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{product.description}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            {product.categories.map((category, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{product.origin}</span>
          </div>

          <div className="mt-2 text-lg font-semibold">₹{product.price.toFixed(2)}</div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setIsDetailsOpen(true)}>
            <Info className="h-4 w-4 mr-2" />
            Details
          </Button>
          <Button size="sm" onClick={handleBuy}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Buy Now
          </Button>
        </CardFooter>
      </Card>

      <ProductDetailsModal product={product} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
    </motion.div>
  )
}
