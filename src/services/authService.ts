import api from "./api"
import { setToken } from "./authStorage"

interface LoginPayload {
  email: string
  password: string
}

interface LoginResponse {
  message: string
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

export async function login(
  payload: LoginPayload
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/login", payload)

  setToken(response.data.token)

  return response.data
}

export async function getUser() {
  const response = await api.get("/user")

  return response.data
}