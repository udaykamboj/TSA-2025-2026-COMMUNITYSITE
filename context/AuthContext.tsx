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
        // Check for mock session first
        const mockSessionStr = localStorage.getItem('mock_session')
        if (mockSessionStr) {
          const mockSession = JSON.parse(mockSessionStr)
          // If the mock session hasn't expired
          if (mockSession.expires_at > Math.floor(Date.now() / 1000)) {
            setSession(mockSession)
            setUser(mockSession.user)
            setLoading(false)
            return
          } else {
            localStorage.removeItem('mock_session')
          }
        }

        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, session: Session | null) => {
        // Only update from Supabase Auth if we don't have a mock session
        if (!localStorage.getItem('mock_session')) {
          setSession(session)
          setUser(session?.user ?? null)
          setLoading(false)
        }
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
    // Local bypass for demo users with password validation
    if (email === "demo@example.com" || email === "admin@example.com") {
      const expectedPassword = email === "demo@example.com" ? "demo123456" : "admin123456";
      
      if (password !== expectedPassword) {
        return { error: "Invalid login credentials" }
      }

      const role = email === "demo@example.com" ? "authenticated" : "admin";
      const mockUser = { id: email, email, role } as unknown as User;
      
      const mockSession: Session = {
        access_token: "mock_token_" + role,
        refresh_token: "mock_refresh_token",
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        token_type: "bearer",
        user: mockUser
      } as unknown as Session;

      setUser(mockUser)
      setSession(mockSession)
      localStorage.setItem('mock_session', JSON.stringify(mockSession))
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
    localStorage.removeItem('mock_session')
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