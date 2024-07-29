import { AuthServerClient } from '~/services/supabase/server-client'

export default async function ProfilePage() {
  const data = await new AuthServerClient().getUserOrThrow()

  return (
    <main className="min-h-screen bg-slate-950 p-4 gap-4 flex flex-col">
      <div className="flex flex-col gap-1 bg-slate-900 p-2">
        <div className="flex flex-col gap-2">
          <strong>Email: </strong> <span>{data.user.email}</span>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Role: </strong> <span>{data.user.role}</span>
        </div>
      </div>

      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  )
}
