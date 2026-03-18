'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabaseClient'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<{ error?: string }>
  signIn: (email: string, password: string) => Promise<{ error?: string }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()
    const getSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    const { error } = await createClient().auth.signUp({
      email,
      password,
    })
    if (error) {
      return { error: error.message }
    }
    return {}
  }

  const signIn = async (email: string, password: string) => {
    // Local bypass for demo users
    if (email === "demo@example.com" || email === "admin@example.com") {
      setUser({ id: email, email, role: email === "demo@example.com" ? "authenticated" : "admin" } as unknown as User)
      setSession({
        access_token: "mock_token",
        refresh_token: "mock_token",
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: "bearer",
        user: { id: email, email, role: email === "demo@example.com" ? "authenticated" : "admin" } as unknown as User
      })
      setLoading(false)
      return {}
    }

    const { error } = await createClient().auth.signInWithPassword({
      email,
      password,
    })
    return { error: error?.message }
  }

  const signOut = async () => {
    // Clear both local mock state and Supabase session
    setUser(null)
    setSession(null)
    await createClient().auth.signOut()
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}