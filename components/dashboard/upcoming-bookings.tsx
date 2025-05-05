"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

// Dummy upcoming bookings data
const upcomingBookings = [
  {
    id: 1,
    title: "Guided Tour of Amber Fort",
    date: "Apr 26, 2023",
    time: "10:00 AM",
    location: "Amber Fort, Jaipur",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Traditional Rajasthani Dinner",
    date: "Apr 27, 2023",
    time: "7:30 PM",
    location: "Chokhi Dhani, Jaipur",
    status: "confirmed",
  },
  {
    id: 3,
    title: "Hot Air Balloon Ride",
    date: "Apr 28, 2023",
    time: "6:00 AM",
    location: "Jal Mahal, Jaipur",
    status: "pending",
  },
]

export function UpcomingBookings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Upcoming Bookings</CardTitle>
          <CardDescription>Your scheduled activities and reservations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{booking.title}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{booking.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{booking.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === "confirmed"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-amber-500/10 text-amber-500"
                    }`}
                  >
                    {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                  </span>
                </div>
              </div>
            ))}

            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard/bookings">View All Bookings</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
