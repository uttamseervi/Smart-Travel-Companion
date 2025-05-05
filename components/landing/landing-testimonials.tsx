"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    role: "Travel Blogger",
    content:
      "This app completely transformed my travel experience in India. The local cuisine recommendations were spot on, and the AI assistant helped me discover hidden gems I would have never found otherwise.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    role: "Food Enthusiast",
    content:
      "As someone who travels for food, this app is a game-changer. The cuisine recommendations are authentic and the stories behind each dish made my culinary journey so much more meaningful.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    avatar: "/placeholder.svg?height=80&width=80",
    role: "Cultural Explorer",
    content:
      "The GI products feature helped me find authentic souvenirs with real cultural significance. I loved learning about the craftsmanship behind each item and supporting local artisans.",
    rating: 4,
  },
  {
    name: "David Wilson",
    avatar: "/placeholder.svg?height=80&width=80",
    role: "Adventure Traveler",
    content:
      "The itinerary planning feature saved me hours of research. The AI understood exactly what kind of experiences I was looking for and created the perfect balance of popular attractions and off-the-beaten-path adventures.",
    rating: 5,
  },
]

export function LandingTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 flex justify-center" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-muted-foreground">
            Discover how our platform has enhanced travel experiences around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mb-6 italic">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
