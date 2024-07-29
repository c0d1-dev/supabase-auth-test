'use client'
import { ComponentProps, FC, ReactNode } from 'react'
import { signOut } from '~/actions/auth/sign-out'

type Props = ComponentProps<'button'> & {
  children: ReactNode
}
export const SignOutButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <button type="button" onClick={() => signOut()} {...rest}>
      {children}
    </button>
  )
}
