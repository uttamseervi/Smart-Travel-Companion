"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ItineraryBuilder } from "@/components/itinerary/itinerary-builder"
import { ItinerarySummary } from "@/components/itinerary/itinerary-summary"
import { LocationSelector } from "@/components/shared/location-selector"

export default function ItineraryPage() {
  const [location, setLocation] = useState("Jaipur")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [step, setStep] = useState(1)

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Plan Your Itinerary</CardTitle>
          <CardDescription>Create a personalized itinerary for your upcoming trip</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Destination</label>
                  <LocationSelector currentLocation={location} onLocationChange={setLocation} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Travel Date</label>
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
              </div>
              <Button onClick={() => setStep(2)} className="w-full md:w-auto">
                Continue to Itinerary Builder
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <ItineraryBuilder location={location} date={date} onComplete={() => setStep(3)} />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <ItinerarySummary location={location} date={date} onBack={() => setStep(2)} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
