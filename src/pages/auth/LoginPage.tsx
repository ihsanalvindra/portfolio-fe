import { LockKeyhole, Mail, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { login, getUser } from "@/services/authService"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await login({
        email,
        password,
      })

      console.log("LOGIN SUCCESS:", response)

      const user = await getUser()

      console.log("CURRENT USER:", user)
    } catch (error) {
      console.error("LOGIN ERROR:", error)
      setError("Email atau password salah.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-4">
      {/* Background Decoration */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-md">
            <Sparkles className="size-7 text-blue-100" />
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-white">
            Portfolio CMS
          </h1>

          <p className="mt-2 text-sm text-blue-200">
            Sign in to manage your portfolio
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h2>

            <p className="mt-1.5 text-sm text-gray-500">
              Enter your credentials to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-800"
              >
                Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-800"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />

                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="size-4 rounded border-gray-300 text-blue-600 accent-blue-600"
                />

                <span className="text-xs font-medium text-gray-500">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex h-11 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-blue-200/70">
          Portfolio CMS · Administration
        </p>

        <div className="mt-3 text-center">
          <Link
            to="/"
            className="text-xs font-medium text-blue-200 transition hover:text-white"
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}