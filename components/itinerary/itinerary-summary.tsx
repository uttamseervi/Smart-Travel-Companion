"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { Download, MapPin, Calendar, ArrowLeft } from "lucide-react"

type ItinerarySummaryProps = {
  location?: string
  date?: Date
  onBack?: () => void
}

// Sample itinerary data
const itineraryData = {
  morning: [
    {
      time: "8:00 AM",
      activity: "Breakfast at Tapri Central",
      description: "Start your day with authentic Rajasthani breakfast and masala chai.",
      location: "C Scheme, Jaipur",
    },
    {
      time: "9:30 AM",
      activity: "Visit Amber Fort",
      description: "Explore the majestic Amber Fort and enjoy an elephant ride to the top.",
      location: "Amer, Jaipur",
    },
    {
      time: "11:30 AM",
      activity: "Jal Mahal",
      description: "Take photos of the beautiful Water Palace.",
      location: "Man Sagar Lake, Jaipur",
    },
  ],
  afternoon: [
    {
      time: "1:00 PM",
      activity: "Lunch at Spice Court",
      description: "Enjoy traditional Rajasthani thali with dal baati churma.",
      location: "Civil Lines, Jaipur",
    },
    {
      time: "2:30 PM",
      activity: "City Palace",
      description: "Explore the royal residence with its museums and courtyards.",
      location: "Pink City, Jaipur",
    },
    {
      time: "4:00 PM",
      activity: "Jantar Mantar",
      description: "Visit the UNESCO World Heritage astronomical observation site.",
      location: "Pink City, Jaipur",
    },
  ],
  evening: [
    {
      time: "5:30 PM",
      activity: "Shopping at Johari Bazaar",
      description: "Shop for traditional jewelry, textiles, and souvenirs.",
      location: "Pink City, Jaipur",
    },
    {
      time: "7:30 PM",
      activity: "Dinner at Chokhi Dhani",
      description: "Experience Rajasthani culture with folk performances and authentic cuisine.",
      location: "Tonk Road, Jaipur",
    },
  ],
}

export function ItinerarySummary({ location = "Jaipur", date = new Date(), onBack }: ItinerarySummaryProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">{location} Itinerary</h2>
          <div className="flex items-center text-muted-foreground mt-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date ? format(date, "EEEE, MMMM d, yyyy") : "Today"}</span>
          </div>
        </div>
        <div className="flex gap-2">
          {onBack && (
            <Button variant="outline" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Builder
            </Button>
          )}
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Morning</h3>
          <div className="space-y-4">
            {itineraryData.morning.map((item, index) => (
              <ItineraryItem key={index} item={item} />
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">Afternoon</h3>
          <div className="space-y-4">
            {itineraryData.afternoon.map((item, index) => (
              <ItineraryItem key={index} item={item} />
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-lg font-medium mb-4">Evening</h3>
          <div className="space-y-4">
            {itineraryData.evening.map((item, index) => (
              <ItineraryItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Travel Tips</h3>
          <ul className="space-y-2 text-sm">
            <li>• Wear comfortable shoes as you'll be walking a lot.</li>
            <li>• Carry a water bottle and stay hydrated.</li>
            <li>• Respect dress codes at religious sites.</li>
            <li>• Bargain at local markets but be respectful.</li>
            <li>• Try the local street food but from hygienic vendors.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function ItineraryItem({ item }: { item: { time: string; activity: string; description: string; location: string } }) {
  return (
    <div className="flex gap-4">
      <div className="w-20 flex-shrink-0 text-sm font-medium">{item.time}</div>
      <div className="flex-1">
        <h4 className="font-medium">{item.activity}</h4>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        <div className="flex items-center text-xs text-muted-foreground mt-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  )
}
