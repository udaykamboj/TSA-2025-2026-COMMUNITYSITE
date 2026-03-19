import { EventDetailContent } from '@/components/dashboard/event-detail-content'

export default async function EventDetailPage({
  params,
  searchParams,
}: PageProps<"/dashboard/events/[id]">) {
  await searchParams
  const { id } = await params
    return (
        <EventDetailContent id={id} />
    )
}
