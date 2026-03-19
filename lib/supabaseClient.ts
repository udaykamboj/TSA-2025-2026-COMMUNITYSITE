import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'public-anon-key'

let client: ReturnType<typeof createBrowserClient> | null = null
let warnedMisconfig = false

function warnIfPlaceholderEnv() {
  if (typeof window === 'undefined' || warnedMisconfig || process.env.NODE_ENV === 'production') return
  const badUrl = /example\.supabase\.co/i.test(supabaseUrl) || !supabaseUrl?.startsWith('https://')
  const badKey =
    !supabaseAnonKey ||
    supabaseAnonKey === 'public-anon-key' ||
    supabaseAnonKey === 'YOUR_ANON_KEY'
  if (badUrl || badKey) {
    warnedMisconfig = true
    console.error(
      '[Supabase] Missing or default env: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in `.env.local` (Next.js does not load `.env.example`). Then restart `next dev`. Auth requests will fail with "Failed to fetch" until this is fixed.'
    )
  }
}

export function createClient() {
  warnIfPlaceholderEnv()
  if (typeof window !== 'undefined' && client) return client
  client = createBrowserClient(supabaseUrl, supabaseAnonKey)
  return client
}
