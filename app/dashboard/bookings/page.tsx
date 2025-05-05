"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingCard } from "@/components/bookings/booking-card"
import { TourCard } from "@/components/bookings/tour-card"
import { bookingsData, toursData } from "@/data/bookings-data"
import { LocationSelector } from "@/components/shared/location-selector"

export default function BookingsPage() {
  const [location, setLocation] = useState("Goa")

  const filteredTours = toursData.filter((tour) => tour.location === location)

  const filteredBookings = bookingsData.filter((booking) => booking.location === location)

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tours & Bookings</CardTitle>
          <CardDescription>Find and book tours, activities, and accommodations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <LocationSelector currentLocation={location} onLocationChange={setLocation} />
          </div>

          <Tabs defaultValue="tours">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tours">Tours & Activities</TabsTrigger>
              <TabsTrigger value="accommodations">Accommodations</TabsTrigger>
            </TabsList>
            <TabsContent value="tours">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="accommodations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {filteredBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
