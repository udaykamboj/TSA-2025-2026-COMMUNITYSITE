import { Suspense } from 'react'
import ResourcesContent from '@/components/resources/resources-content'

export default function ResourcesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-xl font-semibold text-slate-600">Loading...</div>
      </div>
    }>
      <ResourcesContent />
    </Suspense>
  )
}
