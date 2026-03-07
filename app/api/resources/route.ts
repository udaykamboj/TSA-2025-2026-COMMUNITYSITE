import { NextRequest, NextResponse } from 'next/server'
import { getServerClient, getPaginatedData, getCachedData } from '@/lib/database'

// Example API route with pagination and caching
export async function GET(request: NextRequest) {
  try {
    const supabase = await getServerClient()
    const { searchParams } = new URL(request.url)

    // Parse pagination parameters
    const page = parseInt(searchParams.get('page') || '1')
    const limit = Math.min(parseInt(searchParams.get('limit') || '20'), 100) // Max 100 items
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    // Build filters
    const filters: Record<string, any> = {}
    if (category) filters.category = category
    if (search) filters.title = { ilike: `%${search}%` } // Case-insensitive search

    // Use cached data for frequently accessed content
    const cacheKey = `resources_${page}_${limit}_${category || 'all'}_${search || ''}`

    const result = await getCachedData(
      cacheKey,
      () => getPaginatedData('resources', { page, limit }, filters),
      10 // Cache for 10 minutes
    )

    return NextResponse.json(result)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Example POST route with proper error handling
export async function POST(request: NextRequest) {
  try {
    const supabase = await getServerClient()
    const body = await request.json()

    // Validate required fields
    const { title, content, category } = body
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    // Insert with user context
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const { data, error } = await supabase
      .from('resources')
      .insert({
        title,
        content,
        category: category || 'general',
        author_id: user.id,
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to create resource' },
        { status: 500 }
      )
    }

    // Clear cache for this category
    // Note: In a real app, you'd want to clear related caches
    // cache.clear() // Would clear all cache

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}