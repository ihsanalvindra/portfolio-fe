import { ArrowUpRight, FolderKanban } from "lucide-react"
import { Link } from "react-router-dom"

const projects = [
  {
    name: "Portfolio CMS",
    description: "Personal portfolio management system",
    status: "Published",
    updatedAt: "2 hours ago",
  },
  {
    name: "Asset Management",
    description: "IT asset tracking system",
    status: "Published",
    updatedAt: "Yesterday",
  },
  {
    name: "Daily Activity",
    description: "Employee activity management system",
    status: "Draft",
    updatedAt: "3 days ago",
  },
]

export default function RecentProjects() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-1 text-sm font-bold text-gray-900">
            Recent Projects
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Your latest portfolio projects
          </p>
        </div>

        <Link
          to="/admin/projects"
          className="flex items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-medium text-blue-600 transition hover:bg-blue-50 hover:text-blue-700"
        >
          View all
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      {/* Projects */}
      <div className="divide-y divide-gray-100">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex items-center gap-4 px-5 py-4 transition hover:bg-blue-50/40"
          >
            {/* Icon */}
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <FolderKanban className="size-4" />
            </div>

            {/* Project Info */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-800">
                {project.name}
              </p>

              <p className="mt-1 truncate text-xs text-gray-500">
                {project.description}
              </p>
            </div>

            {/* Status */}
            <div className="text-right">
              <span
                className={
                  project.status === "Published"
                    ? "rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600"
                    : "rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600"
                }
              >
                {project.status}
              </span>

              <p className="mt-2 text-[11px] text-gray-400">
                {project.updatedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}