import { ArrowUpRight } from '@phosphor-icons/react'
import { Button } from '../Button'
import { CheckboxInput } from '../components/Form/FormItems/CheckboxInput'
import { Divider } from '../components/Form/FormItems/Divider'
import { Fieldset } from '../components/Form/FormItems/Fieldset'
import { GoogleSignIn } from '../components/Form/FormItems/GoogleAuth'
import { Input } from '../components/Form/FormItems/Input'
import { InputLabel } from '../components/Form/FormItems/InputLabel'

export function LoginForm() {
  return (
    <form className="space-y-6">
      <Fieldset>
        <InputLabel htmlFor="email" label="Email" />
        <Input type="email" id="email" placeholder="Enter your email" />
      </Fieldset>
      <Fieldset>
        <InputLabel htmlFor="password" label="Password" />
        <Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <p className="cursor-pointer text-right text-skillbridge-grey-30">
          Forgot Password?
        </p>
      </Fieldset>
      <CheckboxInput label="Remember Me" />
      <Button href="#" variant="orangeBlock">
        Login
      </Button>
      <Divider />
      <GoogleSignIn kindOfForm="Login" />
      <div className="flex items-center justify-center">
        <p className="text-lg text-skillbridge-grey-15">
          Don&apos;t have an account?&nbsp;
          <a
            href="/sign-up"
            className="border-b border-skillbridge-grey-15 font-medium"
          >
            Sign Up
          </a>
          &nbsp;
        </p>
        <ArrowUpRight width={24} height={24} />
      </div>
    </form>
  )
}
