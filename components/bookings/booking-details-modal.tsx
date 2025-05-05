"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin, Star, Wifi, Coffee, Utensils } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import type { Booking } from "@/types/bookings"

interface BookingDetailsModalProps {
  booking: Booking
  isOpen: boolean
  onClose: () => void
}

export function BookingDetailsModal({ booking, isOpen, onClose }: BookingDetailsModalProps) {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)

  const handleBook = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a check-in date to proceed with booking.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Booking confirmed",
      description: `Your booking at ${booking.name} for ${format(date, "PPP")} has been confirmed.`,
    })
    onClose()
  }

  // Helper function to get icon for amenity
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "breakfast":
        return <Coffee className="h-4 w-4" />
      case "restaurant":
        return <Utensils className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{booking.name}</DialogTitle>
          <DialogDescription>{booking.location}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="h-64 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${booking.image})` }} />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{booking.rating}/5</span>
              </div>
              <div className="text-xl font-bold">
                ₹{booking.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ night</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">{booking.location}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {booking.amenities.map((amenity, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    {getAmenityIcon(amenity)}
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Select Check-in Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <Button className="w-full" onClick={handleBook}>
              Book Now
            </Button>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">About this Accommodation</h3>
            <p className="text-muted-foreground">{booking.fullDescription || booking.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Policies</h3>
            <div className="space-y-2">
              <div>
                <h4 className="font-medium">Check-in/Check-out</h4>
                <p className="text-sm text-muted-foreground">Check-in: 2:00 PM, Check-out: 11:00 AM</p>
              </div>
              <div>
                <h4 className="font-medium">Cancellation</h4>
                <p className="text-sm text-muted-foreground">Free cancellation up to 24 hours before check-in</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Reviews</h3>
            <div className="space-y-3">
              {booking.reviews.map((review, index) => (
                <div key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{review.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{review.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
