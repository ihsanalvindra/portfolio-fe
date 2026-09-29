import {
  BriefcaseBusiness,
  Code2,
  FolderPlus,
  Plus,
} from "lucide-react"
import { Link } from "react-router-dom"

const actions = [
  {
    label: "New Project",
    description: "Add a portfolio project",
    icon: FolderPlus,
    path: "/admin/projects/create",
  },
  {
    label: "Add Experience",
    description: "Add work experience",
    icon: BriefcaseBusiness,
    path: "/admin/experience/create",
  },
  {
    label: "Add Skill",
    description: "Add a technical skill",
    icon: Code2,
    path: "/admin/skills/create",
  },
]

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
          Actions
        </p>

        <h2 className="mt-1 text-sm font-bold text-gray-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          Quickly manage your portfolio
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <Link
              key={action.label}
              to={action.path}
              className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/70"
            >
              {/* Icon */}
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="size-4" />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-800 transition-colors group-hover:text-blue-700">
                  {action.label}
                </p>

                <p className="mt-0.5 truncate text-xs text-gray-500">
                  {action.description}
                </p>
              </div>

              {/* Arrow / Plus */}
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                <Plus className="size-3.5" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}