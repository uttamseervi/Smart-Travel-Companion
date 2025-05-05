"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Info, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { CuisineDetailsModal } from "@/components/cuisine/cuisine-details-modal"
import type { Dish } from "@/types/cuisine"

interface CuisineCardProps {
  dish: Dish
}

export function CuisineCard({ dish }: CuisineCardProps) {
  const { toast } = useToast()
  const [isSaved, setIsSaved] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

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
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${dish.image})` }} />
        <CardContent className="pt-6 flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{dish.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{dish.rating}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{dish.description}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            {dish.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Best time to try:</span> {dish.bestTimeToTry}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setIsDetailsOpen(true)}>
            <Info className="h-4 w-4 mr-2" />
            Details
          </Button>
          <Button variant={isSaved ? "default" : "outline"} size="sm" onClick={handleSave}>
            <Bookmark className={`h-4 w-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Saved" : "Save"}
          </Button>
        </CardFooter>
      </Card>

      <CuisineDetailsModal dish={dish} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
    </motion.div>
  )
}
