'use server'
import { revalidatePath as revalidate } from 'next/cache'
import { redirect } from 'next/navigation'
import { UNSIGNED_HOME } from '~/constants/routes'
import { createServerClient } from '~/services/supabase/server-client'

type Params = {
  revalidatePath?: string
  redirectPath?: string
}
export async function signOut({
  revalidatePath = UNSIGNED_HOME,
  redirectPath = UNSIGNED_HOME,
}: Params = {}) {
  const supabase = createServerClient()

  await supabase.auth.signOut()
  revalidate(revalidatePath, 'layout')
  return redirect(redirectPath)
}
