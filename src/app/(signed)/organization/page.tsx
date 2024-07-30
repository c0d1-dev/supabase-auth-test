import { AuthServerClient } from '~/services/supabase/server-client'

const getOrganization = async () => {
  const { session } = await new AuthServerClient().getUserSessionOrThrow()

  const response = await fetch('http://localhost:3333/api/organizations', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`, // Ensure this key matches your session structure
    },
  })

  if (!response.ok) {
    console.log('cuase', response.headers)
    throw new Error('Failed to get organization')
  }
  return {
    data: await response.json(),
  }
}
export default async function Organization() {
  const { data } = await getOrganization()
  return (
    <main className="p-4">
      <h1>Organization</h1>
      <code>{JSON.stringify(data, null, 2)}</code>
    </main>
  )
}
