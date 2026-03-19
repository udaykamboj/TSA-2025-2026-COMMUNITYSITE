import { ApplicationsContent } from '@/components/dashboard/applications-content'

export default async function ApplicationsPage({
  params,
  searchParams,
}: PageProps<"/dashboard/applications">) {
  await Promise.all([params, searchParams])
    return (
        <ApplicationsContent />
    )
}
