'use client'
import { createClient } from '~/services/supabase/client'

export const OAuthButton = () => {
  const supabase = createClient()

  return (
    <button
      className="bg-gray-800 rounded-md py-2 px-4 font-bold text-md mt-4 text-gray-200"
      onClick={() =>
        supabase.auth.signInWithOAuth({
          provider: 'google',
        })
      }
    >
      Google
    </button>
  )
}
