"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"

export function Preferences() {
  const { toast } = useToast()
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    darkMode: false,
    language: "english",
    currency: "inr",
    distanceUnit: "km",
    budgetRange: [2000],
    interests: {
      food: true,
      culture: true,
      adventure: true,
      shopping: false,
      nature: true,
      history: true,
      photography: false,
      luxury: false,
    },
  })

  const handleSwitchChange = (field: string) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev],
    }))
  }

  const handleInterestChange = (interest: string) => {
    setPreferences((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: !prev.interests[interest as keyof typeof prev.interests],
      },
    }))
  }

  const handleSliderChange = (value: number[]) => {
    setPreferences((prev) => ({
      ...prev,
      budgetRange: value,
    }))
  }

  const handleSave = () => {
    toast({
      title: "Preferences saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive trip updates and recommendations via email</p>
              </div>
              <Switch
                id="email-notifications"
                checked={preferences.emailNotifications}
                onCheckedChange={() => handleSwitchChange("emailNotifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive real-time alerts and updates</p>
              </div>
              <Switch
                id="push-notifications"
                checked={preferences.pushNotifications}
                onCheckedChange={() => handleSwitchChange("pushNotifications")}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Travel Interests</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(preferences.interests).map(([interest, value]) => (
              <div key={interest} className="flex items-center space-x-2">
                <Switch
                  id={`interest-${interest}`}
                  checked={value}
                  onCheckedChange={() => handleInterestChange(interest)}
                />
                <Label htmlFor={`interest-${interest}`} className="capitalize">
                  {interest}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Budget Preferences</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Daily Budget (₹)</Label>
                <span className="font-medium">₹{preferences.budgetRange[0]}</span>
              </div>
              <Slider
                defaultValue={preferences.budgetRange}
                max={10000}
                step={500}
                onValueChange={handleSliderChange}
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Budget (₹1,000)</span>
                <span>Mid-range (₹5,000)</span>
                <span>Luxury (₹10,000)</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button onClick={handleSave} className="ml-auto">
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
