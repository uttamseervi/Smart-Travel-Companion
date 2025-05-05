"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LandmarkCard } from "@/components/landmarks/landmark-card"
import { landmarksData } from "@/data/landmarks-data"
import { Search, Filter } from "lucide-react"

export default function LandmarksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Safe filtering function with error handling
  const filterLandmarks = () => {
    try {
      if (!landmarksData || !Array.isArray(landmarksData)) {
        console.error("Landmarks data is not available or not an array")
        return []
      }

      let filtered = [...landmarksData]

      // Filter by search query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase()
        filtered = filtered.filter(
          (landmark) =>
            landmark?.name?.toLowerCase().includes(query) || landmark?.description?.toLowerCase().includes(query),
        )
      }

      // Filter by category
      if (activeTab !== "all") {
        filtered = filtered.filter((landmark) => landmark?.category?.toLowerCase() === activeTab.toLowerCase())
      }

      return filtered
    } catch (error) {
      console.error("Error filtering landmarks:", error)
      return []
    }
  }

  const filteredLandmarks = filterLandmarks()

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Landmarks</h1>
        <p className="text-muted-foreground mt-2">Discover the historical and cultural landmarks of Jaipur.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search landmarks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="sm:w-auto w-full">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="fort">Forts</TabsTrigger>
          <TabsTrigger value="palace">Palaces</TabsTrigger>
          <TabsTrigger value="temple">Temples</TabsTrigger>
          <TabsTrigger value="garden">Gardens</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandmarks.length > 0 ? (
              filteredLandmarks.map((landmark, index) => <LandmarkCard key={index} landmark={landmark} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium">No landmarks found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="fort" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandmarks.length > 0 ? (
              filteredLandmarks.map((landmark, index) => <LandmarkCard key={index} landmark={landmark} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium">No forts found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="palace" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandmarks.length > 0 ? (
              filteredLandmarks.map((landmark, index) => <LandmarkCard key={index} landmark={landmark} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium">No palaces found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="temple" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandmarks.length > 0 ? (
              filteredLandmarks.map((landmark, index) => <LandmarkCard key={index} landmark={landmark} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium">No temples found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="garden" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandmarks.length > 0 ? (
              filteredLandmarks.map((landmark, index) => <LandmarkCard key={index} landmark={landmark} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium">No gardens found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
