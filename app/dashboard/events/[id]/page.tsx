import { EventDetailContent } from '@/components/dashboard/event-detail-content'

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <EventDetailContent params={params} />
    )
}
