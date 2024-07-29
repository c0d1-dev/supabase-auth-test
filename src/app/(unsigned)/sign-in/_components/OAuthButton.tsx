'use client'
import { createBrowserClient } from '~/services/supabase/browser-client'

export const OAuthButton = () => {
  const supabase = createBrowserClient()

  return (
    <button
      className="bg-gray-800 rounded-md py-2 px-4 font-bold text-md mt-4 text-gray-200"
      onClick={() =>
        supabase.auth.signInWithOAuth({
          provider: 'google',
          options: {
            redirectTo: 'http://localhost:3000/auth/callback',
          },
        })
      }
    >
      Google
    </button>
  )
}
