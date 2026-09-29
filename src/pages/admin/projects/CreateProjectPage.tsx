import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function CreateProjectPage() {
  return (
    <div className="min-h-full bg-[#FAFAFA] p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/admin/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>

        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Projects
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            Create Project
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Add a new project to your portfolio.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:p-7">
        <form className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800"
            >
              Project Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="e.g. Portfolio CMS"
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label
              htmlFor="category"
              className="text-sm font-semibold text-gray-800"
            >
              Category
            </label>

            <input
              id="category"
              type="text"
              placeholder="e.g. Web Application"
              className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-gray-800"
            >
              Description
            </label>

            <textarea
              id="description"
              rows={5}
              placeholder="Describe your project..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
            <Link
              to="/admin/projects"
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 hover:text-gray-800"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}