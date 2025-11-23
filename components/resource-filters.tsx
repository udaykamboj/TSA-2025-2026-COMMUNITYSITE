"use client"

interface ResourceFiltersProps {
  categories: string[]
  ageGroups: string[]
  serviceTypes: string[]

  selectedCategory: string
  selectedAgeGroups: string[]
  selectedServiceTypes: string[]
  selectedOperatingHours: string

  onCategoryChange: (category: string) => void
  onAgeGroupToggle: (ageGroup: string) => void
  onServiceTypeToggle: (serviceType: string) => void
  onOperatingHoursChange: (hours: string) => void
  onReset: () => void
}

export default function ResourceFilters({
  categories,
  ageGroups,
  serviceTypes,
  selectedCategory,
  selectedAgeGroups,
  selectedServiceTypes,
  selectedOperatingHours,
  onCategoryChange,
  onAgeGroupToggle,
  onServiceTypeToggle,
  onOperatingHoursChange,
  onReset,
}: ResourceFiltersProps) {
  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedAgeGroups.length > 0 ||
    selectedServiceTypes.length > 0 ||
    selectedOperatingHours !== "all"

  return (
    <div className="bg-white border-2 border-slate-900 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="text-slate-900 hover:bg-slate-100 px-3 py-1 border-2 border-slate-900 font-semibold transition"
          >
            Reset All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="form-label">Category</label>
          <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} className="form-select">
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Age Group Filter */}
        <div>
          <label className="form-label">Age Group</label>
          <div className="space-y-2">
            {ageGroups.map((ageGroup) => (
              <label key={ageGroup} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedAgeGroups.includes(ageGroup)}
                  onChange={() => onAgeGroupToggle(ageGroup)}
                  className="form-checkbox"
                />
                <span className="text-sm text-slate-900">{ageGroup}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Service Type Filter */}
        <div>
          <label className="form-label">Service Type</label>
          <div className="space-y-2">
            {serviceTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedServiceTypes.includes(type)}
                  onChange={() => onServiceTypeToggle(type)}
                  className="form-checkbox"
                />
                <span className="text-sm text-slate-900">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Operating Hours Filter */}
        <div>
          <label className="form-label">Operating Hours</label>
          <select
            value={selectedOperatingHours}
            onChange={(e) => onOperatingHoursChange(e.target.value)}
            className="form-select"
          >
            <option value="all">Any Time</option>
            <option value="open-now">Open Now</option>
            <option value="weekends">Weekend Availability</option>
            <option value="evenings">Evening Hours</option>
          </select>
        </div>
      </div>
    </div>
  )
}
