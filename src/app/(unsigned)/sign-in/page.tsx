import { OAuthButton } from './_components/OAuthButton'

export default function LoginPage() {
  return (
    <main className="bg-gray-950 justify-center items-center flex min-h-svh">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-gray-200 font-semibold">Sign in</h1>

        <OAuthButton />
      </div>
    </main>
  )
}
