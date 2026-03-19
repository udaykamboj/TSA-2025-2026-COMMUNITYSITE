import { ProfileContent } from '@/components/dashboard/profile-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Profile | Mill Creek Community Resource Hub',
  description: 'Manage your volunteer profile',
}

export default function ProfilePage() {
  return <ProfileContent />
}
