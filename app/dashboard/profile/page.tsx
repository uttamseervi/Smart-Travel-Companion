"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EditProfileModal } from "@/components/profile/edit-profile-modal"
import { PastTrips } from "@/components/profile/past-trips"
import { SavedItems } from "@/components/profile/saved-items"
import { Preferences } from "@/components/profile/preferences"

// Hardcoded user data instead of using context
const userData = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=80&width=80",
  memberSince: "January 2023",
  preferences: ["Food", "Culture", "Adventure", "Photography"],
}

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  return (
    <div className="space-y-6 w-full">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col space-y-1.5">
            <CardTitle>My Profile</CardTitle>
            <CardDescription>Manage your account settings and preferences</CardDescription>
          </div>
          <Button onClick={() => setIsEditModalOpen(true)}>Edit Profile</Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback>{userData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">{userData.name}</h3>
              <p className="text-muted-foreground">{userData.email}</p>
              <p className="text-sm">Member since {userData.memberSince}</p>
              <div className="flex gap-2 flex-wrap">
                {userData.preferences.map((pref) => (
                  <span key={pref} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                    {pref}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="trips" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trips">Past Trips</TabsTrigger>
          <TabsTrigger value="saved">Saved Items</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        <TabsContent value="trips">
          <PastTrips />
        </TabsContent>
        <TabsContent value="saved">
          <SavedItems />
        </TabsContent>
        <TabsContent value="preferences">
          <Preferences />
        </TabsContent>
      </Tabs>

      <EditProfileModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} userData={userData} />
    </div>
  )
}
