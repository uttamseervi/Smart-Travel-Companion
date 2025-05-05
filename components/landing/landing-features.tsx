"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, ShoppingBag, Landmark, MessageSquare, Map, Calendar } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Local Cuisine",
    description: "Discover authentic local dishes and culinary experiences tailored to your taste preferences.",
  },
  {
    icon: ShoppingBag,
    title: "GI Products",
    description: "Explore unique geographical indication products that represent the cultural heritage of each region.",
  },
  {
    icon: Landmark,
    title: "Landmarks & Activities",
    description: "Find popular attractions, hidden gems, and local events for an unforgettable travel experience.",
  },
  {
    icon: Calendar,
    title: "Smart Bookings",
    description: "Book tours, activities, and accommodations with personalized recommendations.",
  },
  {
    icon: Map,
    title: "Itinerary Planning",
    description: "Create custom itineraries with AI-powered suggestions based on your interests and time constraints.",
  },
  {
    icon: MessageSquare,
    title: "AI Travel Assistant",
    description: "Get instant answers to your travel questions and personalized recommendations from our AI assistant.",
  },
]

export function LandingFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-muted/50 flex justify-center" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Complete Travel Companion</h2>
          <p className="text-lg text-muted-foreground">
            Discover all the ways our AI-powered platform enhances your travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
