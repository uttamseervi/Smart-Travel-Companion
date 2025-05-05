"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function CurrentTrip() {
  // Dummy data for current trip
  const currentTrip = {
    destination: "Jaipur, Rajasthan",
    startDate: "Apr 25, 2023",
    endDate: "Apr 30, 2023",
    daysLeft: 3,
    totalDays: 5,
    progress: 40,
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"],
    upcomingActivity: {
      name: "Guided Tour of Amber Fort",
      time: "Tomorrow, 10:00 AM",
      location: "Amber Fort, Jaipur",
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Current Trip</CardTitle>
          <CardDescription>Track your ongoing adventure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {currentTrip.destination}
              </h3>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4" />
                {currentTrip.startDate} - {currentTrip.endDate}
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Trip Progress</span>
                <span className="text-sm text-muted-foreground">{currentTrip.progress}%</span>
              </div>
              <Progress value={currentTrip.progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                {currentTrip.daysLeft} days left out of {currentTrip.totalDays}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Trip Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {currentTrip.highlights.map((highlight, index) => (
                  <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-muted p-3 rounded-lg">
              <h4 className="font-medium mb-1">Upcoming Activity</h4>
              <p className="font-semibold">{currentTrip.upcomingActivity.name}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3" />
                {currentTrip.upcomingActivity.time}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {currentTrip.upcomingActivity.location}
              </p>
            </div>

            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href="/dashboard/itinerary">View Itinerary</Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/dashboard/assistant">Get Recommendations</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
