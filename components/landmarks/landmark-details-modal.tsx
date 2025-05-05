"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Star, Ticket, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Landmark } from "@/types/landmarks"

interface LandmarkDetailsModalProps {
  landmark: Landmark
  isOpen: boolean
  onClose: () => void
}

export function LandmarkDetailsModal({ landmark, isOpen, onClose }: LandmarkDetailsModalProps) {
  const { toast } = useToast()

  // Safely handle missing data
  if (!landmark) {
    return null
  }

  const handleAddToItinerary = () => {
    toast({
      title: "Added to itinerary",
      description: `${landmark.name} has been added to your itinerary.`,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{landmark.name}</DialogTitle>
          <DialogDescription>{landmark.location}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div
            className="h-64 bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${landmark.image || "/placeholder.svg?height=300&width=400"})` }}
          />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{landmark.rating}/5</span>
              </div>
              <Badge variant="outline">{landmark.category}</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">{landmark.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Timings</h4>
                  <p className="text-muted-foreground">{landmark.timings}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Ticket className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Entry Fee</h4>
                  <p className="text-muted-foreground">{landmark.entryFee}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Best Time to Visit</h4>
                  <p className="text-muted-foreground">{landmark.bestTimeToVisit}</p>
                </div>
              </div>
            </div>

            <Button className="w-full" onClick={handleAddToItinerary}>
              Add to Itinerary
            </Button>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">About this Landmark</h3>
            <p className="text-muted-foreground">{landmark.fullDescription || landmark.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Historical Significance</h3>
            <p className="text-muted-foreground">
              {landmark.historicalSignificance || "No historical information available."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Tips for Visitors</h3>
            {landmark.tips && landmark.tips.length > 0 ? (
              <ul className="space-y-2 list-disc pl-5">
                {landmark.tips.map((tip, index) => (
                  <li key={index} className="text-muted-foreground">
                    {tip}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">No visitor tips available.</p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
