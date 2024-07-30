import Link from 'next/link'
import { SignOutButton } from '../auth/SignOutButton'

export default function SignedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <header className="flex gap-4 items-center p-4">
        <Link href={'/organization'}>Organization</Link>
        <Link href={'/profile'}>Profile</Link>

        <SignOutButton className="ml-auto">SignOUt</SignOutButton>
      </header>
      {children}
    </div>
  )
}
