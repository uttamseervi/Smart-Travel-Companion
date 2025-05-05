"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Star, MapPin, Clock, Utensils } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import type { Dish } from "@/types/cuisine"

interface CuisineDetailsModalProps {
  dish: Dish
  isOpen: boolean
  onClose: () => void
}

export function CuisineDetailsModal({ dish, isOpen, onClose }: CuisineDetailsModalProps) {
  const { toast } = useToast()
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(!isSaved)

    toast({
      title: isSaved ? "Removed from favorites" : "Added to favorites",
      description: isSaved
        ? `${dish.name} has been removed from your favorites.`
        : `${dish.name} has been added to your favorites.`,
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{dish.name}</DialogTitle>
          <DialogDescription>Traditional dish from {dish.origin}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="h-64 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${dish.image})` }} />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{dish.rating}/5</span>
              </div>
              <Button variant={isSaved ? "default" : "outline"} size="sm" onClick={handleSave}>
                <Bookmark className={`h-4 w-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
                {isSaved ? "Saved" : "Save"}
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Origin</h4>
                  <p className="text-muted-foreground">{dish.origin}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Best Time to Try</h4>
                  <p className="text-muted-foreground">{dish.bestTimeToTry}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Utensils className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Main Ingredients</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {dish.ingredients.map((ingredient, index) => (
                      <Badge key={index} variant="outline">
                        {ingredient}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">About this Dish</h3>
            <p className="text-muted-foreground">{dish.fullDescription || dish.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Cultural Significance</h3>
            <p className="text-muted-foreground">{dish.culturalSignificance}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Where to Try</h3>
            <ul className="space-y-2">
              {dish.whereToTry.map((place, index) => (
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
