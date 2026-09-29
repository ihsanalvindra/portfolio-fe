import { FolderKanban, MoreHorizontal, Plus, Search } from "lucide-react"
import { Link } from "react-router-dom"
import type { Project } from "@/types/project"

const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio CMS",
    category: "Web Application",
    description: "Personal portfolio management system",
    status: "Published",
    updatedAt: "2 hours ago",
  },
  {
    id: 2,
    name: "Asset Management",
    category: "Internal System",
    description: "IT asset tracking system",
    status: "Published",
    updatedAt: "Yesterday",
  },
  {
    id: 3,
    name: "Daily Activity",
    category: "Web Application",
    description: "Employee activity management system",
    status: "Draft",
    updatedAt: "3 days ago",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-full bg-[#FAFAFA] p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Content
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            Projects
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage projects displayed on your portfolio.
          </p>
        </div>

        <Link
          to="/admin/projects/create"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
        >
          <Plus className="size-4" />
          Add Project
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search projects..."
            className="h-10 w-full rounded-xl border border-gray-100 bg-white pl-10 pr-4 text-sm text-gray-800 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-50"
          />
        </div>

        <p className="text-xs text-gray-400">
          {projects.length} projects
        </p>
      </div>

      {/* Projects Table */}
      <div className="mt-5 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-gray-100 bg-gray-50/70">
              <tr>
                <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Project
                </th>

                <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Category
                </th>

                <th className="px-5 py-3.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Status
                </th>

                <th className="px-5 py-3.5 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Updated
                </th>

                <th className="w-12 px-3 py-3.5" />
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="group transition-colors hover:bg-blue-50/30"
                >
                  {/* Project */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <FolderKanban className="size-4" />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-800">
                          {project.name}
                        </p>

                        <p className="mt-0.5 text-xs text-gray-400">
                          Project #{String(project.id).padStart(3, "0")}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4 text-sm text-gray-500">
                    {project.category}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={
                        project.status === "Published"
                          ? "rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600"
                          : "rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-600"
                      }
                    >
                      {project.status}
                    </span>
                  </td>

                  {/* Updated */}
                  <td className="px-5 py-4 text-right text-xs text-gray-400">
                    {project.updatedAt}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-4">
                    <button
                      type="button"
                      className="flex size-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}