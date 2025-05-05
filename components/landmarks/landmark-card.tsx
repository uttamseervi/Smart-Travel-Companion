"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star } from "lucide-react"
import { LandmarkDetailsModal } from "@/components/landmarks/landmark-details-modal"
import type { Landmark } from "@/types/landmarks"

interface LandmarkCardProps {
  landmark: Landmark
}

export function LandmarkCard({ landmark }: LandmarkCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  // Safety checks for landmark data
  if (!landmark) {
    return null
  }

  const {
    name = "Unknown Landmark",
    image = "/placeholder.svg?height=300&width=400",
    category = "Landmark",
    rating = 0,
    visitDuration = "Unknown",
    location = "Unknown location",
  } = landmark

  return (
    <>
      <Card className="overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-2 right-2">{category}</Badge>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{visitDuration}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="outline" className="w-full" onClick={() => setShowDetails(true)}>
            View Details
          </Button>
        </CardFooter>
      </Card>

      {showDetails && (
        <LandmarkDetailsModal landmark={landmark} isOpen={showDetails} onClose={() => setShowDetails(false)} />
      )}
    </>
  )
}
