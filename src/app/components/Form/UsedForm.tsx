import { FormTypes } from '@/app/interfaces/FormTypes'
import { LoginForm, SignUpForm } from './Forms'

interface UsedForm {
  formType: FormTypes
}

export function UsedForm({ formType }: UsedForm) {
  return (
    <>
      {formType === 'login' && <LoginForm />}
      {formType === 'sign-up' && <SignUpForm />}
    </>
  )
}
