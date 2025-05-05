"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

// Hardcoded user data instead of using context
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=32&width=32",
}

export function Header() {
  const pathname = usePathname()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const isHome = pathname === "/"
  const isDashboard = pathname.startsWith("/dashboard")

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isHome && "bg-transparent border-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/dashboard" className="text-lg font-semibold">
                  Dashboard
                </Link>
                <Link href="/dashboard/cuisine" className="text-lg font-semibold">
                  Cuisine
                </Link>
                <Link href="/dashboard/products" className="text-lg font-semibold">
                  GI Products
                </Link>
                <Link href="/dashboard/landmarks" className="text-lg font-semibold">
                  Landmarks
                </Link>
                <Link href="/dashboard/bookings" className="text-lg font-semibold">
                  Bookings
                </Link>
                <Link href="/dashboard/itinerary" className="text-lg font-semibold">
                  Itinerary
                </Link>
                <Link href="/dashboard/assistant" className="text-lg font-semibold">
                  AI Assistant
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl">TravelMate</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {isDashboard && (
            <>
              <Link
                href="/dashboard"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/cuisine"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/cuisine" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Cuisine
              </Link>
              <Link
                href="/dashboard/products"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/products" ? "text-primary" : "text-muted-foreground",
                )}
              >
                GI Products
              </Link>
              <Link
                href="/dashboard/landmarks"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/landmarks" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Landmarks
              </Link>
              <Link
                href="/dashboard/bookings"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/bookings" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Bookings
              </Link>
              <Link
                href="/dashboard/itinerary"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/itinerary" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Itinerary
              </Link>
              <Link
                href="/dashboard/assistant"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/dashboard/assistant" ? "text-primary" : "text-muted-foreground",
                )}
              >
                AI Assistant
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {isDashboard && (
            <div className="hidden md:flex items-center gap-2 mr-4 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Jaipur, Rajasthan</span>
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                  <AvatarFallback>{userData.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userData.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
