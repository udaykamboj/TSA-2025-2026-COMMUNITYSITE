import { createClient } from '@/lib/supabaseClient'

/**
 * Returns a Supabase server client.
 */
export async function getServerClient() {
    return createClient()
}

/**
 * Simple in-memory cache.
 */
const cache = new Map<string, { data: any; expires: number }>()

/**
 * Fetches data from cache or calls the fetcher function.
 */
export async function getCachedData<T>(
    key: string,
    fetcher: () => Promise<T>,
    cacheMinutes: number = 5
): Promise<T> {
    const cached = cache.get(key)
    if (cached && cached.expires > Date.now()) {
        return cached.data as T
    }

    const data = await fetcher()
    cache.set(key, { data, expires: Date.now() + cacheMinutes * 60 * 1000 })
    return data
}

/**
 * Paginated data fetcher from Supabase.
 */
export async function getPaginatedData(
    table: string,
    { page = 1, limit = 20 }: { page?: number; limit?: number },
    filters: Record<string, any> = {}
) {
    const supabase = await getServerClient()
    const from = (page - 1) * limit
    const to = from + limit - 1

    let query = supabase.from(table).select('*', { count: 'exact' })

    // Apply simple equality filters
    for (const [key, value] of Object.entries(filters)) {
        if (typeof value === 'object' && value?.ilike) {
            query = query.ilike(key, value.ilike)
        } else {
            query = query.eq(key, value)
        }
    }

    const { data, error, count } = await query.range(from, to)

    if (error) throw error

    return {
        data: data || [],
        totalCount: count || 0,
        page,
        limit,
        hasMore: (count || 0) > to + 1,
    }
}
