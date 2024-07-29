import { FC, PropsWithChildren } from 'react'
import { createServerClient } from '~/services/supabase/server-client'

export async function SignedIn({ children }: { children: JSX.Element }) {
  const supabase = createServerClient()
  const { data } = await supabase.auth.getUser()
  const userId = data.user?.id
  return userId ? children : null
}

export async function SignedOut({ children }: { children: JSX.Element }) {
  const supabase = createServerClient()
  const { data } = await supabase.auth.getUser()
  const userId = data.user?.id
  return userId ? null : children
}

export const Protect: FC<PropsWithChildren> = ({ children }) => {
  return children
}
