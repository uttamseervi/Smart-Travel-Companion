"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function LandingCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-primary text-primary-foreground" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Travel Experience?</h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Start exploring authentic local experiences, cuisine, and cultural treasures with our AI-powered travel
            companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/dashboard">Explore Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <Link href="/dashboard/itinerary">Plan My Trip</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
