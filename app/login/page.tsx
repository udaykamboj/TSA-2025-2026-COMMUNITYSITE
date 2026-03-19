import { Suspense } from 'react'
import LoginContent from '@/components/login/login-content'

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}