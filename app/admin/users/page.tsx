import { AdminUsersContent } from '@/components/dashboard/admin-users-content'

export default async function AdminUsersPage({
  params,
  searchParams,
}: PageProps<"/admin/users">) {
  await Promise.all([params, searchParams])
    return (
        <AdminUsersContent />
    )
}
