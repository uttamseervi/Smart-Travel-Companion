import { LandingHero } from "@/components/landing/landing-hero"
import { LandingFeatures } from "@/components/landing/landing-features"
import { LandingTestimonials } from "@/components/landing/landing-testimonials"
import { LandingCTA } from "@/components/landing/landing-cta"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />
      <LandingHero />
      <LandingFeatures />
      <LandingTestimonials />
      <LandingCTA />
      <Footer />
    </main>
  )
}
