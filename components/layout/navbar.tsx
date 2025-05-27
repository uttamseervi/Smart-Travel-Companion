"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X, MapPin, Search, Globe, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Destinations",
    href: "/destinations",
  },
  {
    title: "Cuisine",
    href: "/cuisine",
  },
  {
    title: "Local Products",
    href: "/gi-products",
  },
  {
    title: "Bookings",
    href: "/bookings",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200 pl-1on",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="font-bold text-xl">TravelBuddy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {mainNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search destinations..."
              className="w-full bg-background pl-8 rounded-full border-muted"
            />
          </div>

          <Button>
            <MapPin className="mr-2 h-4 w-4" />
            Explore Nearby
          </Button>
          <Button
            onClick={() => router.push("/login")}
          >
            Sign in
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-lg font-medium"
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <Button className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  Explore Nearby
                </Button>
                <Button
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}