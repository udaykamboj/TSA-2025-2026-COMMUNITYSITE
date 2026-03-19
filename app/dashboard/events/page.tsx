import { EventsContent } from '@/components/dashboard/events-content'

export default async function EventsPage({
  params,
  searchParams,
}: PageProps<"/dashboard/events">) {
  await Promise.all([params, searchParams])
    return (
        <EventsContent />
    )
}
