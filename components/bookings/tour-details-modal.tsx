"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin, Clock, Users, CheckCircle } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import type { Tour } from "@/types/bookings"

interface TourDetailsModalProps {
  tour: Tour
  isOpen: boolean
  onClose: () => void
}

export function TourDetailsModal({ tour, isOpen, onClose }: TourDetailsModalProps) {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)

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
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{tour.name}</DialogTitle>
          <DialogDescription>{tour.location}</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="h-64 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${tour.image})` }} />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{tour.category}</Badge>
              <div className="text-xl font-bold">
                ₹{tour.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ person</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">{tour.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Duration</h4>
                  <p className="text-muted-foreground">{tour.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Group Size</h4>
                  <p className="text-muted-foreground">Maximum {tour.groupSize} people</p>
                </div>
              </div>
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

            <Button className="w-full" onClick={handleBook}>
              Book Now
            </Button>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Tour Description</h3>
            <p className="text-muted-foreground">{tour.fullDescription || tour.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">What's Included</h3>
            <ul className="space-y-2">
              {tour.included.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Itinerary</h3>
            <ol className="space-y-4">
              {tour.itinerary.map((item, index) => (
                <li key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Important Information</h3>
            <p className="text-sm text-muted-foreground">
              Please arrive 15 minutes before the tour start time. Wear comfortable shoes and bring water. Tours operate
              in all weather conditions, so please dress accordingly. Cancellations made 24 hours before the tour start
              time are eligible for a full refund.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
