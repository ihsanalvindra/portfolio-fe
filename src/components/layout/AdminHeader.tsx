import { Bell, Menu, Search } from "lucide-react"

interface AdminHeaderProps {
  onMenuClick: () => void
}

export default function AdminHeader({
  onMenuClick,
}: AdminHeaderProps) {
  return (
    <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-10">
      {/* Left */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-gray-500 transition hover:bg-blue-50 hover:text-blue-600 lg:hidden"
        >
          <Menu className="size-5" />
        </button>

        {/* Search */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="h-10 w-full rounded-xl border border-gray-100 bg-gray-50 pl-10 pr-4 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-200 focus:bg-white focus:ring-2 focus:ring-blue-50"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="ml-3 flex shrink-0 items-center gap-1 sm:ml-4 sm:gap-2">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex size-10 items-center justify-center rounded-xl text-gray-400 transition-all hover:bg-blue-50 hover:text-blue-600"
        >
          <Bell className="size-[18px]" />

          {/* Notification indicator */}
          <span className="absolute right-2.5 top-2 size-1.5 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>
      </div>
    </header>
  )
}