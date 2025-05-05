import type React from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <Header />
      <main className="flex-1">
        <div className="container py-6 md:py-8">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
