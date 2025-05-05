"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, MapPin, Calendar, Award } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/types/products"

interface ProductDetailsModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const { toast } = useToast()

  const handleBuy = () => {
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>Geographical Indication Product from {product.origin}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="h-64 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${product.image})` }} />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className="px-2 py-1">GI Product</Badge>
              <div className="text-xl font-bold">₹{product.price.toFixed(2)}</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Origin</h4>
                  <p className="text-muted-foreground">{product.origin}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">GI Tag Since</h4>
                  <p className="text-muted-foreground">{product.giTagSince}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Categories</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full" onClick={handleBuy}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Now
            </Button>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">About this Product</h3>
            <p className="text-muted-foreground">{product.fullDescription || product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Cultural Significance</h3>
            <p className="text-muted-foreground">{product.culturalSignificance}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Craftsmanship</h3>
            <p className="text-muted-foreground">{product.craftsmanship}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Where to Buy</h3>
            <ul className="space-y-2">
              {product.whereToBuy.map((place, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <div>
                    <p className="font-medium">{place.name}</p>
                    <p className="text-sm text-muted-foreground">{place.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
