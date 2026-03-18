'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'

export default function ConfirmEmailPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Parse the hash parameters
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const token_hash = hashParams.get('token_hash');
        const type = hashParams.get('type');

        if (!token_hash) {
          setStatus('error');
          setMessage('Invalid confirmation link.');
          return;
        }

        const { data, error } = await supabase.auth.verifyOtp({
          token_hash,
          type: (type as 'email' | 'signup') || 'email',
        })

        if (error) {
          setStatus('error')
          setMessage(error.message)
        } else {
          setStatus('success')
          setMessage('Your email has been successfully verified! You can now sign in.')
          // Redirect to login after 3 seconds
          setTimeout(() => {
            router.push('/login')
          }, 3000)
        }
      } catch (err) {
        setStatus('error')
        setMessage('An error occurred while verifying your email.')
      }
    }

    if (window.location.hash) {
      confirmEmail()
    } else {
      setStatus('error')
      setMessage('Invalid confirmation link.')
    }
  }, [router, supabase])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <motion.div
        className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">Verifying Email</h2>
            <p className="text-gray-600">Please wait while we confirm your email address...</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">Email Verified!</h2>
            <p className="text-gray-600 mt-2">{message}</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting to login page...</p>
            <Button
              onClick={() => router.push('/login')}
              className="mt-4 w-full"
            >
              Go to Login
            </Button>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">Verification Failed</h2>
            <p className="text-red-600 mt-2">{message}</p>
            <div className="mt-6 space-y-3">
              <Button
                onClick={() => router.push('/login')}
                className="w-full"
              >
                Back to Login
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Try Again
              </Button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}