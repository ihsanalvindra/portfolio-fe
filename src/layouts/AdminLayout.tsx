import { useState } from "react"
import { Outlet } from "react-router-dom"

import AdminHeader from "@/components/layout/AdminHeader"
import AdminSidebar from "@/components/layout/AdminSidebar"

export default function AdminLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-0 lg:p-3">
      <div className="flex min-h-screen w-full overflow-hidden lg:rounded-2xl">
        <AdminSidebar
          collapsed={sidebarCollapsed}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
          onToggle={() => setSidebarCollapsed((value) => !value)}
        />

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden bg-white shadow-2xl lg:rounded-tl-[2rem]">
          <AdminHeader
            onMenuClick={() => setMobileSidebarOpen(true)}
          />

          <main className="flex-1 overflow-y-auto bg-[#FAFAFA]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}