import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicLayout from "@/layouts/PublicLayout"
import AdminLayout from "@/layouts/AdminLayout"
import DashboardPage from "@/pages/admin/dashboard/DashboardPage"
import ProjectsPage from "@/pages/admin/projects/ProjectsPage"
import CreateProjectPage from "@/pages/admin/projects/CreateProjectPage"
import LoginPage from "@/pages/auth/LoginPage"

function Home() {
  return <h1>Portfolio</h1>
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

          {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Public */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="/admin/projects" element={<ProjectsPage />} />
          <Route
            path="/admin/projects/create"
            element={<CreateProjectPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}