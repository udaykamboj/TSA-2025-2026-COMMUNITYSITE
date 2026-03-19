import { AdminOrganizationsContent } from '@/components/dashboard/admin-organizations-content'

export default async function AdminOrganizationsPage({
  params,
  searchParams,
}: PageProps<"/admin/organizations">) {
  await Promise.all([params, searchParams])
    return (
        <AdminOrganizationsContent />
    )
}
