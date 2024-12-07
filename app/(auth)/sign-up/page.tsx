import AuthForm from '@/components/ui/auth-form'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex-center size-full max-small:px-6 '>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp