import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Smart Travel Companion</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your AI-powered travel assistant for discovering local cuisine, products, and experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/cuisine"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cuisine
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GI Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/landmarks"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Landmarks
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase">Subscribe</h4>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for travel tips and updates.</p>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="max-w-[220px]" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Smart Travel Companion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
