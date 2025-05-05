"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, ShoppingBag, Landmark, Calendar, Map, MessageSquare } from "lucide-react"

const quickActions = [
  {
    icon: Utensils,
    label: "Find Local Cuisine",
    href: "/dashboard/cuisine",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: ShoppingBag,
    label: "Explore GI Products",
    href: "/dashboard/products",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Landmark,
    label: "Discover Landmarks",
    href: "/dashboard/landmarks",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Calendar,
    label: "Book Activities",
    href: "/dashboard/bookings",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Map,
    label: "Plan Itinerary",
    href: "/dashboard/itinerary",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: MessageSquare,
    label: "Ask AI Assistant",
    href: "/dashboard/assistant",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Shortcuts to enhance your trip</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon

              return (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center justify-center gap-2 text-foreground"
                  asChild
                >
                  <Link href={action.href}>
                    <div className={`${action.bgColor} p-2 rounded-full`}>
                      <Icon className={`h-5 w-5 ${action.color}`} />
                    </div>
                    <span className="text-xs font-medium">{action.label}</span>
                  </Link>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
