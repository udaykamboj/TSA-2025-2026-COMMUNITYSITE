'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/dashboard/ui/button'
import { createClient } from '@/lib/supabaseClient'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

function getRedirectPath(searchParams: URLSearchParams | null): string {
  const redirect = searchParams?.get('redirect')
  if (!redirect || typeof redirect !== 'string') return '/dashboard'
  if (redirect.startsWith('/') && !redirect.startsWith('//')) return redirect
  return '/dashboard'
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetLoading, setResetLoading] = useState(false)
  const [resetMessage, setResetMessage] = useState('')

  const { signIn, signUp, user } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()
  const redirectPath = getRedirectPath(searchParams)

  useEffect(() => {
    if (user) {
      router.push(redirectPath)
    }
  }, [user, router, redirectPath])

  if (user) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const { error } = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password)

    if (error) {
      // Handle specific error cases with user-friendly messages
      let userFriendlyError = error

      if (isSignUp) {
        // Sign up specific errors
        if (error.includes('Email rate limit exceeded')) {
          userFriendlyError = 'Too many emails sent recently. Please wait a few minutes before trying again.'
        } else if (
          error.includes('User already registered') ||
          error.includes('already been registered') ||
          error.includes('already exists')
        ) {
          userFriendlyError = 'An account with this email already exists. Please sign in instead.'
        } else if (error.includes('Password should be at least')) {
          userFriendlyError = 'Password must be at least 6 characters long.'
        } else if (error.includes('Invalid email')) {
          userFriendlyError = 'Please enter a valid email address.'
        }
      } else {
        // Sign in specific errors
        if (error.includes('Invalid login credentials') || error.includes('Email not found')) {
          userFriendlyError = 'No account found with this email. Would you like to create one?'
        } else if (error.includes('Invalid email')) {
          userFriendlyError = 'Please enter a valid email address.'
        }
      }

      setError(userFriendlyError)
    } else if (isSignUp) {
      router.push(redirectPath)
    } else {
      router.push(redirectPath)
    }
    setLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setResetMessage('')
    setResetLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      if (error.message.includes('Email rate limit exceeded')) {
        setResetMessage('Too many emails sent recently. Please wait a few minutes before requesting another password reset.')
      } else {
        setResetMessage(error.message)
      }
    } else {
      setResetMessage('Password reset email sent. Check your inbox.')
    }
    setResetLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}${redirectPath}`,
      },
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  const hasRedirectMessage = redirectPath !== '/dashboard' && searchParams?.has('redirect')

  return (
    <main className="min-h-screen flex flex-col w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div
          className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isSignUp ? 'Sign up to access your dashboard' : 'Sign in to your account'}
            </p>
            {hasRedirectMessage && !isSignUp && (
              <div className="mt-4 p-3 bg-amber-50 text-amber-800 rounded-md border border-amber-200 text-sm font-medium">
                Please securely sign in to access this protected page.
              </div>
            )}
          </div>

        {showForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Reset Password</h3>
              <p className="mt-1 text-sm text-gray-600">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>
            <div>
              <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="resetEmail"
                name="resetEmail"
                type="email"
                required
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {resetMessage && (
              <p className={`text-sm ${resetMessage.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>
                {resetMessage}
              </p>
            )}
            <div className="flex space-x-3">
              <Button type="submit" disabled={resetLoading} className="flex-1">
                {resetLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForgotPassword(false)}
                className="flex-1"
              >
                Back to Login
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isSignUp ? "new-password" : "current-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            {!isSignUp && (
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-50 p-3 rounded-md">
                <p className="text-red-600 text-sm">{error}</p>
                {error.includes('already exists') && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(false)
                      setError('')
                      setSuccess('')
                    }}
                    className="text-sm text-red-700 underline mt-1 hover:text-red-800"
                  >
                    Click here to sign in instead
                  </button>
                )}
                {error.includes('No account found') && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsSignUp(true)
                      setError('')
                      setSuccess('')
                    }}
                    className="text-sm text-red-700 underline mt-1 hover:text-red-800"
                  >
                    Click here to create an account
                  </button>
                )}
              </div>
            )}
            <div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div>
              <Button
                type="button"
                variant="outline"
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                  setSuccess('')
                }}
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
              </button>
            </div>

            {!isSignUp && (
              <div className="mt-8 pt-6 text-center text-sm text-gray-500">
                <p className="mb-2">Demo Credentials</p>
                <div className="flex justify-center gap-6">
                  <div>
                    <span className="font-medium text-gray-700">Volunteer:</span> demo@example.com (demo123456)
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Admin:</span> admin@example.com (admin123456)
                  </div>
                </div>
              </div>
            )}
          </form>
        )}
      </motion.div>
      </div>
      <Footer />
    </main>
  )
}