import {
  BarChart3,
  BriefcaseBusiness,
  ChevronLeft,
  Code2,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react"
import { NavLink } from "react-router-dom"

interface AdminSidebarProps {
  collapsed: boolean
  mobileOpen: boolean
  onClose: () => void
  onToggle: () => void
}

const menuItems = [
  {
    label: "Overview",
    items: [
      {
        label: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Content",
    items: [
      {
        label: "Projects",
        path: "/admin/projects",
        icon: FolderKanban,
      },
      {
        label: "Experience",
        path: "/admin/experience",
        icon: BriefcaseBusiness,
      },
      {
        label: "Skills",
        path: "/admin/skills",
        icon: Code2,
      },
    ],
  },
  {
    label: "System",
    items: [
      {
        label: "Analytics",
        path: "/admin/analytics",
        icon: BarChart3,
      },
      {
        label: "Settings",
        path: "/admin/settings",
        icon: Settings,
      },
    ],
  },
]

export default function AdminSidebar({
  collapsed,
  mobileOpen,
  onClose,
  onToggle,
}: AdminSidebarProps) {
  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-blue-950/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex min-h-screen flex-col",
          "bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white",
          "shadow-2xl transition-all duration-300 ease-in-out",
          "lg:relative lg:z-auto lg:shadow-none",
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
          collapsed ? "lg:w-[76px]" : "lg:w-64",
          "w-64",
        ].join(" ")}
      >
        {/* Brand */}
        <div
          className={[
            "flex h-16 shrink-0 items-center border-b border-white/10",
            collapsed
              ? "justify-center px-3"
              : "gap-3 px-5",
          ].join(" ")}
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 shadow-inner backdrop-blur-md">
            <Sparkles className="size-5 text-blue-100" />
          </div>

          <div
            className={[
              "min-w-0 overflow-hidden transition-all duration-300",
              collapsed
                ? "w-0 opacity-0"
                : "w-auto opacity-100",
            ].join(" ")}
          >
            <p className="truncate text-sm font-semibold tracking-tight text-white">
              Portfolio CMS
            </p>

            <p className="truncate text-xs font-medium text-blue-200">
              Administration
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="custom-scroll flex-1 space-y-6 overflow-y-auto overflow-x-hidden px-3 py-6">
          {menuItems.map((section) => (
            <div key={section.label}>
              {/* Section Label */}
              <div
                className={[
                  "mb-2 overflow-hidden transition-all duration-300",
                  collapsed
                    ? "h-0 opacity-0"
                    : "h-4 opacity-100",
                ].join(" ")}
              >
                <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-blue-300/70">
                  {section.label}
                </p>
              </div>

              {/* Menu */}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/admin"}
                      onClick={onClose}
                      title={collapsed ? item.label : undefined}
                      className={({ isActive }) =>
                        [
                          "group flex items-center rounded-xl py-2.5 text-[13px] font-medium transition-all duration-200",
                          collapsed
                            ? "justify-center px-2"
                            : "gap-3 px-3",
                          isActive
                            ? "bg-white/20 font-semibold text-white shadow-inner backdrop-blur-sm"
                            : "text-blue-100 hover:bg-white/10 hover:text-white",
                        ].join(" ")
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={[
                              "size-[18px] shrink-0 transition-colors",
                              isActive
                                ? "text-white"
                                : "text-blue-200 group-hover:text-white",
                            ].join(" ")}
                          />

                          <span
                            className={[
                              "truncate overflow-hidden whitespace-nowrap transition-all duration-300",
                              collapsed
                                ? "w-0 opacity-0"
                                : "w-auto opacity-100",
                            ].join(" ")}
                          >
                            {item.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  )
                })}
              </div>

              {/* Divider */}
              <div className="mx-3 mt-5 h-px bg-blue-800/70" />
            </div>
          ))}
        </nav>

        {/* Profile */}
        <div className="shrink-0 border-t border-blue-800/50 bg-blue-900/40 p-3">
          <div
            className={[
              "flex items-center overflow-hidden rounded-xl p-2",
              collapsed
                ? "justify-center"
                : "gap-3",
            ].join(" ")}
          >
            {/* Avatar */}
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-blue-700/50 bg-blue-800 text-xs font-bold text-blue-200 shadow-sm">
              IA
            </div>

            {/* Information */}
            <div
              className={[
                "min-w-0 overflow-hidden transition-all duration-300",
                collapsed
                  ? "w-0 opacity-0"
                  : "flex-1 opacity-100",
              ].join(" ")}
            >
              <p className="truncate text-[10px] font-bold uppercase tracking-wider text-blue-300/80">
                Created By
              </p>

              <p className="truncate text-[12px] font-extrabold text-white">
                Ihsan Alvindra
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Collapse Button */}
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 hidden size-7 items-center justify-center rounded-full border border-blue-200/20 bg-blue-700 text-white shadow-lg transition hover:bg-blue-600 lg:flex"
        >
          <ChevronLeft
            className={[
              "size-4 transition-transform duration-300",
              collapsed ? "rotate-180" : "",
            ].join(" ")}
          />
        </button>
      </aside>
    </>
  )
}