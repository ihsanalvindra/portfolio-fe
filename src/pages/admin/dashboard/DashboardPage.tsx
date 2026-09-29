import {
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Eye,
} from "lucide-react"

import StatCard from "@/components/common/StatCard"
import RecentProjects from "@/components/common/RecentProjects"
import QuickActions from "@/components/common/QuickActions"

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-[#FAFAFA] p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Overview
        </p>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your portfolio content and monitor your website.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Projects"
          value="12"
          description="Published projects"
          icon={FolderKanban}
        />

        <StatCard
          title="Experience"
          value="4"
          description="Work experiences"
          icon={BriefcaseBusiness}
        />

        <StatCard
          title="Skills"
          value="18"
          description="Technical skills"
          icon={Code2}
        />

        <StatCard
          title="Visitors"
          value="1.2K"
          description="This month"
          icon={Eye}
        />
      </div>

      {/* Content */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <RecentProjects />

        <QuickActions />
      </div>
    </div>
  )
}