import { EventDetailContent } from '@/components/dashboard/event-detail-content'

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <EventDetailContent id={id} />
    )
}
