import { OrganizationsContent } from '@/components/dashboard/organizations-content'

export default async function OrganizationsPage({
  params,
  searchParams,
}: PageProps<"/dashboard/organizations">) {
  await Promise.all([params, searchParams])
    return (
        <OrganizationsContent />
    )
}
