"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin, Star, Info } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { BookingDetailsModal } from "@/components/bookings/booking-details-modal"
import type { Booking } from "@/types/bookings"

interface BookingCardProps {
  booking: Booking
}

export function BookingCard({ booking }: BookingCardProps) {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

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
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${booking.image})` }} />
        <CardContent className="pt-6 flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{booking.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{booking.rating}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{booking.description}</p>

          <div className="flex flex-wrap gap-2 mb-2">
            {booking.amenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
            <MapPin className="h-3 w-3" />
            <span>{booking.location}</span>
          </div>

          <div className="text-lg font-semibold">
            ₹{booking.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ night</span>
          </div>

          <div className="mt-4">
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
        </CardContent>
        <CardFooter className="border-t pt-4 flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setIsDetailsOpen(true)}>
            <Info className="h-4 w-4 mr-2" />
            Details
          </Button>
          <Button size="sm" onClick={handleBook}>
            Book Now
          </Button>
        </CardFooter>
      </Card>

      <BookingDetailsModal booking={booking} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
    </motion.div>
  )
}
