import { CalendarContent } from '@/components/dashboard/calendar-content'

export default async function CalendarPage({
  params,
  searchParams,
}: PageProps<"/dashboard/calendar">) {
  await Promise.all([params, searchParams])
    return (
        <CalendarContent />
    )
}
