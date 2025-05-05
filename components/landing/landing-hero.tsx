"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { LoginModal } from "@/components/auth/login-modal"

export function LandingHero() {
  // Replace auth context with local state
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Simulate login for demo purposes
  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setIsLoginModalOpen(false)
  }

  return (
    <div className="relative min-h-[90vh] items-center px-8 flex justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover the Heart of Every Destination
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your AI-powered travel companion for authentic local experiences, cuisine, and cultural treasures.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isLoggedIn ? (
              <Button asChild size="lg" className="text-base">
                <Link href="/dashboard">Explore Dashboard</Link>
              </Button>
            ) : (
              <Button onClick={() => setIsLoginModalOpen(true)} size="lg" className="text-base">
                Log In
              </Button>
            )}

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <Link href="/dashboard/itinerary">Plan My Trip</Link>
            </Button>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                placeholder="Where would you like to go?"
                className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-300 h-12"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  )
}
