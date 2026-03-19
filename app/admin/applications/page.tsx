import { AdminApplicationsContent } from '@/components/dashboard/admin-applications-content'

export default async function AdminApplicationsPage({
  params,
  searchParams,
}: PageProps<"/admin/applications">) {
  await Promise.all([params, searchParams])
  return <AdminApplicationsContent />
}
