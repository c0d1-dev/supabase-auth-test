import * as Supabase from '@supabase/ssr'

export function createBrowserClient() {
  return Supabase.createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
