"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LocationSelectorProps {
  currentLocation: string
  onLocationChange: (location: string) => void
}

export function LocationSelector({ currentLocation, onLocationChange }: LocationSelectorProps) {
  const locations = ["Jaipur", "Goa", "Kashmir"]

  return (
    <Select value={currentLocation} onValueChange={onLocationChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
        {locations.map((location) => (
          <SelectItem key={location} value={location}>
            {location}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
