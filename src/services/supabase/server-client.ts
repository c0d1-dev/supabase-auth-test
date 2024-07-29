import * as Supabase from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createServerClient() {
  const cookieStore = cookies()

  return Supabase.createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  )
}

export class AuthServerClient {
  constructor(private client = createServerClient()) {}

  async getUser(jwt?: string) {
    return await this.client.auth.getUser(jwt)
  }

  async getUserOrThrow(jwt?: string) {
    const { data, error } = await this.client.auth.getUser(jwt)
    if (error) throw error
    if (!data.user) throw new Error('User not found')
    return data
  }
}
