"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { getAIResponse } from "@/lib/ai-assistant"
import { LocationSelector } from "@/components/shared/location-selector"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

// Hardcoded user data instead of using context
const userData = {
  name: "John Doe",
  avatar: "/placeholder.svg?height=32&width=32",
}

export default function AssistantPage() {
  const [location, setLocation] = useState("Jaipur")
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: `Hello! I'm your Smart Travel Companion AI. How can I help you with your trip to ${location} today?`,
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Update welcome message when location changes
    setMessages((prev) => [
      {
        id: "welcome",
        content: `Hello! I'm your Smart Travel Companion AI. How can I help you with your trip to ${location} today?`,
        sender: "ai",
        timestamp: new Date(),
      },
      ...prev.slice(1),
    ])
  }, [location])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI thinking and responding
    setTimeout(async () => {
      const response = await getAIResponse(input, location)

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="w-full">
      <Card className="w-full h-[calc(100vh-12rem)]">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>AI Travel Assistant</CardTitle>
              <CardDescription>Ask me anything about your trip</CardDescription>
            </div>
            <div className="w-48">
              <LocationSelector currentLocation={location} onLocationChange={setLocation} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-8rem)]">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                >
                  <div className="flex items-end gap-2 max-w-[80%]">
                    {message.sender === "ai" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        "rounded-lg px-4 py-2",
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                      )}
                    >
                      {message.content}
                    </div>
                    {message.sender === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                        <AvatarFallback>{userData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[80%]">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 bg-muted">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 rounded-full bg-foreground/50 animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <form onSubmit={handleSend} className="mt-4 flex gap-2">
            <Input
              placeholder="Ask about local attractions, food, or travel tips..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
