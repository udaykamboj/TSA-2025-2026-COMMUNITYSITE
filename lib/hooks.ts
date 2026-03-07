'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Debounce hook — delays value updates by the given ms.
 */
export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}

/**
 * Paginated data hook with client-side caching.
 */
interface PaginatedOptions {
    limit?: number
    filters?: Record<string, any>
    cacheKey?: string
    cacheTime?: number
}

interface PaginatedResult<T> {
    data: T[]
    loading: boolean
    error: string | null
    hasMore: boolean
    loadMore: () => void
    refresh: () => void
    totalCount: number
}

const clientCache = new Map<string, { data: any; expires: number }>()

export function usePaginatedData<T>(
    endpoint: string,
    options: PaginatedOptions = {}
): PaginatedResult<T> {
    const { limit = 20, filters = {}, cacheKey, cacheTime = 5 } = options
    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [hasMore, setHasMore] = useState(false)
    const abortRef = useRef<AbortController | null>(null)

    const fetchData = useCallback(
        async (pageNum: number, append: boolean = false) => {
            // Check cache
            const key = cacheKey ? `${cacheKey}_page${pageNum}` : null
            if (key) {
                const cached = clientCache.get(key)
                if (cached && cached.expires > Date.now()) {
                    setData((prev) => (append ? [...prev, ...cached.data.data] : cached.data.data))
                    setTotalCount(cached.data.totalCount)
                    setHasMore(cached.data.hasMore)
                    setLoading(false)
                    return
                }
            }

            abortRef.current?.abort()
            const controller = new AbortController()
            abortRef.current = controller

            setLoading(true)
            setError(null)

            try {
                const params = new URLSearchParams({
                    page: String(pageNum),
                    limit: String(limit),
                    ...Object.fromEntries(
                        Object.entries(filters)
                            .filter(([, v]) => v !== undefined && v !== '')
                            .map(([k, v]) => [k, String(v)])
                    ),
                })

                const res = await fetch(`${endpoint}?${params}`, { signal: controller.signal })
                if (!res.ok) throw new Error(`HTTP ${res.status}`)

                const result = await res.json()

                if (key) {
                    clientCache.set(key, { data: result, expires: Date.now() + cacheTime * 60_000 })
                }

                setData((prev) => (append ? [...prev, ...(result.data || [])] : result.data || []))
                setTotalCount(result.totalCount || 0)
                setHasMore(result.hasMore ?? false)
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Failed to load data')
                }
            } finally {
                setLoading(false)
            }
        },
        [endpoint, limit, JSON.stringify(filters), cacheKey, cacheTime]
    )

    useEffect(() => {
        setPage(1)
        setData([])
        fetchData(1, false)
    }, [fetchData])

    const loadMore = useCallback(() => {
        const next = page + 1
        setPage(next)
        fetchData(next, true)
    }, [page, fetchData])

    const refresh = useCallback(() => {
        // Clear relevant cache entries
        if (cacheKey) {
            for (const k of clientCache.keys()) {
                if (k.startsWith(cacheKey)) clientCache.delete(k)
            }
        }
        setPage(1)
        setData([])
        fetchData(1, false)
    }, [cacheKey, fetchData])

    return { data, loading, error, hasMore, loadMore, refresh, totalCount }
}
