import { CurrentTrip } from "@/components/dashboard/current-trip"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { UpcomingBookings } from "@/components/dashboard/upcoming-bookings"
import { DashboardMap } from "@/components/dashboard/dashboard-map"
import { DashboardWelcome } from "@/components/dashboard/dashboard-welcome"

export default function Dashboard() {
  return (
    <div className="space-y-6 w-full">
      <DashboardWelcome />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrentTrip />
        <QuickActions />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DashboardMap />
        </div>
        <div className="space-y-6">
          <UpcomingBookings />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}
