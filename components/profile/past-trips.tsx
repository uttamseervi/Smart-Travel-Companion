"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

// Dummy past trips data
const pastTrips = [
  {
    id: 1,
    destination: "Goa",
    startDate: "Jan 15, 2023",
    endDate: "Jan 20, 2023",
    highlights: ["Calangute Beach", "Dudhsagar Falls", "Spice Plantation"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    destination: "Darjeeling",
    startDate: "Mar 10, 2023",
    endDate: "Mar 15, 2023",
    highlights: ["Tiger Hill", "Batasia Loop", "Tea Gardens"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    destination: "Udaipur",
    startDate: "Nov 5, 2022",
    endDate: "Nov 10, 2022",
    highlights: ["City Palace", "Lake Pichola", "Sajjangarh Palace"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function PastTrips() {
  return (
    <div className="space-y-6">
      {pastTrips.map((trip) => (
        <Card key={trip.id}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div
                className="w-full md:w-48 h-32 bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${trip.image})` }}
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{trip.destination}</h3>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {trip.startDate} - {trip.endDate}
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
