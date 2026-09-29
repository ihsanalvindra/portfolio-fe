export type ProjectStatus = "Published" | "Draft"

export interface Project {
  id: number
  name: string
  category: string
  description: string
  status: ProjectStatus
  updatedAt: string
}