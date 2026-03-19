import { HistoryContent } from '@/components/dashboard/history-content'

export default async function HistoryPage({
  params,
  searchParams,
}: PageProps<"/dashboard/history">) {
  await Promise.all([params, searchParams])
    return (
        <HistoryContent />
    )
}
