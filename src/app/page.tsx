import { redirect } from 'next/navigation'
import { SignedIn, SignedOut } from '~/components/auth/control-components'
import { SignOutButton } from '~/components/auth/SignOutButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <SignedIn>
        <div className="flex flex-col gap-2">
          <header>
            <SignOutButton className="py-2 px-4 rounded-md bg-purple-950 text-gray-100">
              SignOut
            </SignOutButton>
          </header>
        </div>
      </SignedIn>
      <SignedOut>{redirect('/sign-in')}</SignedOut>
    </main>
  )
}
