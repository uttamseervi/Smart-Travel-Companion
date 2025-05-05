"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useAuth } from "@/context/auth-context"

export function DashboardWelcome() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-muted-foreground">
                Your Smart Travel Companion is ready to help you discover amazing experiences in Jaipur.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="text-center px-4 py-2 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">28°C</div>
                <div className="text-sm text-muted-foreground">Sunny</div>
              </div>
              <div className="text-center px-4 py-2 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">₹1 = $0.012</div>
                <div className="text-sm text-muted-foreground">Exchange Rate</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
