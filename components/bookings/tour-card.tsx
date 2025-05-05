"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin, Clock, Users, Info } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { TourDetailsModal } from "@/components/bookings/tour-details-modal"
import type { Tour } from "@/types/bookings"

interface TourCardProps {
  tour: Tour
}

export function TourCard({ tour }: TourCardProps) {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleBook = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date to proceed with booking.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Tour booked",
      description: `Your ${tour.name} tour for ${format(date, "PPP")} has been confirmed.`,
    })
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }} />
        <CardContent className="pt-6 flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{tour.name}</h3>
            <Badge variant="outline" className="text-xs">
              {tour.category}
            </Badge>
          </div>

          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{tour.description}</p>

          <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Group size: {tour.groupSize}</span>
            </div>
          </div>

          <div className="text-lg font-semibold mb-4">
            ₹{tour.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ person</span>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Select Tour Date</label>
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

      <TourDetailsModal tour={tour} isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
    </motion.div>
  )
}
