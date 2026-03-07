'use client'

import { useState } from 'react'
import { usePaginatedData, useDebounce } from '@/lib/hooks'
import { Button } from '@/components/ui/button'

interface Resource {
  id: string
  title: string
  content: string
  category: string
  created_at: string
  author_id: string
}

export default function OptimizedResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 300)

  // Use the paginated data hook with caching
  const {
    data: resources,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    totalCount
  } = usePaginatedData<Resource>('/api/resources', {
    limit: 10,
    filters: {
      ...(debouncedSearch && { search: debouncedSearch }),
      ...(selectedCategory && { category: selectedCategory })
    },
    cacheKey: `resources_${debouncedSearch}_${selectedCategory}`,
    cacheTime: 10 // Cache for 10 minutes
  })

  const categories = ['general', 'housing', 'employment', 'healthcare', 'education']

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600 mb-4">Error loading resources: {error}</p>
        <Button onClick={refresh}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Community Resources</h1>
        <p className="text-gray-600 mb-6">
          Discover scalable, cached, and paginated community resources following best practices.
        </p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>

          <Button onClick={refresh} variant="outline">
            Refresh
          </Button>
        </div>

        {/* Results Summary */}
        <p className="text-gray-600 mb-4">
          Showing {resources.length} of {totalCount} resources
          {debouncedSearch && ` for "${debouncedSearch}"`}
          {selectedCategory && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Loading State */}
      {loading && resources.length === 0 && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resources...</p>
        </div>
      )}

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {resource.title}
              </h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2 flex-shrink-0">
                {resource.category}
              </span>
            </div>

            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {resource.content}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                {new Date(resource.created_at).toLocaleDateString()}
              </span>
              <button className="text-blue-600 hover:text-blue-800">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            className="px-8 py-2"
          >
            {loading ? 'Loading...' : 'Load More Resources'}
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!loading && resources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">
            {debouncedSearch || selectedCategory
              ? 'No resources found matching your criteria.'
              : 'No resources available yet.'}
          </p>
          {(debouncedSearch || selectedCategory) && (
            <Button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('')
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          )}
        </div>
      )}

      {/* Best Practices Info */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">🚀 Scalability Features</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Pagination:</strong> Loads only 10 items at a time</li>
          <li>• <strong>Caching:</strong> Results cached for 10 minutes</li>
          <li>• <strong>Debounced Search:</strong> Reduces API calls during typing</li>
          <li>• <strong>Connection Pooling:</strong> Server-side API handles DB connections</li>
          <li>• <strong>Optimistic Loading:</strong> Smooth user experience</li>
        </ul>
      </div>
    </div>
  )
}