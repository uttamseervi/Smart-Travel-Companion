"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type AuthContextType = {
  user: {
    name: string
    email: string
    avatar: string
  } | null
  login: (name: string, email: string, avatar: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string; email: string; avatar: string } | null>(null)

  const login = (name: string, email: string, avatar: string) => {
    setUser({ name, email, avatar })
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
