"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bookmark, Star, MapPin, Calendar } from "lucide-react"

// Dummy recent activity data
const recentActivities = [
  {
    id: 1,
    type: "saved",
    title: "Saved Laal Maas to favorites",
    time: "2 hours ago",
    icon: Bookmark,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/10",
  },
  {
    id: 2,
    type: "review",
    title: "Rated Amber Fort 5 stars",
    time: "Yesterday",
    icon: Star,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10",
  },
  {
    id: 3,
    type: "visit",
    title: "Visited Hawa Mahal",
    time: "2 days ago",
    icon: MapPin,
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
  },
  {
    id: 4,
    type: "booking",
    title: "Booked Traditional Dinner",
    time: "3 days ago",
    icon: Calendar,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500/10",
  },
]

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest interactions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = activity.icon

              return (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`${activity.iconBg} p-2 rounded-md`}>
                    <Icon className={`h-4 w-4 ${activity.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
