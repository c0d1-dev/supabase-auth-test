import { SignOutButton } from '~/components/auth/SignOutButton'

export default function SignedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <header>
        <SignOutButton>SignOUt</SignOutButton>
      </header>
      {children}
    </div>
  )
}
