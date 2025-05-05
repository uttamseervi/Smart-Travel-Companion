"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"

type ItineraryBuilderProps = {
  location?: string
  date?: Date
  onComplete: () => void
}

export function ItineraryBuilder({ location = "Jaipur", date, onComplete }: ItineraryBuilderProps) {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState({
    interests: {
      historical: true,
      cultural: true,
      adventure: false,
      shopping: false,
      food: true,
      nature: false,
    },
    pace: "moderate",
    budget: [3000],
    accessibility: false,
    transportation: "mix",
  })

  const handleInterestChange = (interest: string) => {
    setPreferences((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [interest]: !prev.interests[interest as keyof typeof prev.interests],
      },
    }))
  }

  const handlePaceChange = (pace: string) => {
    setPreferences((prev) => ({
      ...prev,
      pace,
    }))
  }

  const handleBudgetChange = (value: number[]) => {
    setPreferences((prev) => ({
      ...prev,
      budget: value,
    }))
  }

  const handleAccessibilityChange = (checked: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      accessibility: checked,
    }))
  }

  const handleTransportationChange = (transportation: string) => {
    setPreferences((prev) => ({
      ...prev,
      transportation,
    }))
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    // Simulate API call to generate itinerary
    toast({
      title: "Generating your itinerary",
      description: "Please wait while we create your personalized itinerary...",
    })

    // Simulate loading time
    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  return (
    <div className="space-y-6">
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">What are you interested in?</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-historical"
                  checked={preferences.interests.historical}
                  onCheckedChange={() => handleInterestChange("historical")}
                />
                <Label htmlFor="interest-historical">Historical Sites</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-cultural"
                  checked={preferences.interests.cultural}
                  onCheckedChange={() => handleInterestChange("cultural")}
                />
                <Label htmlFor="interest-cultural">Cultural Experiences</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-adventure"
                  checked={preferences.interests.adventure}
                  onCheckedChange={() => handleInterestChange("adventure")}
                />
                <Label htmlFor="interest-adventure">Adventure Activities</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-shopping"
                  checked={preferences.interests.shopping}
                  onCheckedChange={() => handleInterestChange("shopping")}
                />
                <Label htmlFor="interest-shopping">Shopping</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-food"
                  checked={preferences.interests.food}
                  onCheckedChange={() => handleInterestChange("food")}
                />
                <Label htmlFor="interest-food">Food & Cuisine</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-nature"
                  checked={preferences.interests.nature}
                  onCheckedChange={() => handleInterestChange("nature")}
                />
                <Label htmlFor="interest-nature">Nature & Parks</Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">What pace do you prefer?</h3>
            <RadioGroup value={preferences.pace} onValueChange={handlePaceChange} className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="relaxed" id="pace-relaxed" />
                <Label htmlFor="pace-relaxed">Relaxed (3-4 activities per day)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="moderate" id="pace-moderate" />
                <Label htmlFor="pace-moderate">Moderate (5-6 activities per day)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="busy" id="pace-busy" />
                <Label htmlFor="pace-busy">Busy (7+ activities per day)</Label>
              </div>
            </RadioGroup>
          </div>

          <Button onClick={handleNext} className="w-full">
            Next
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">What's your budget per day?</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Budget (₹{preferences.budget[0]})</span>
              </div>
              <Slider defaultValue={preferences.budget} max={10000} step={500} onValueChange={handleBudgetChange} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Budget (₹1,000)</span>
                <span>Mid-range (₹5,000)</span>
                <span>Luxury (₹10,000)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Accessibility Requirements</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="accessibility"
                checked={preferences.accessibility}
                onCheckedChange={(checked) => handleAccessibilityChange(checked as boolean)}
              />
              <Label htmlFor="accessibility">I require wheelchair accessible locations</Label>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Preferred Transportation</h3>
            <RadioGroup
              value={preferences.transportation}
              onValueChange={handleTransportationChange}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="transport-public" />
                <Label htmlFor="transport-public">Public Transportation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="transport-private" />
                <Label htmlFor="transport-private">Private Transportation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mix" id="transport-mix" />
                <Label htmlFor="transport-mix">Mix of Both</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleBack} className="flex-1">
              Back
            </Button>
            <Button onClick={handleSubmit} className="flex-1">
              Generate Itinerary
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
