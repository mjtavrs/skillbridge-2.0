import { ArrowUpRight } from '@phosphor-icons/react'
import { Container } from './FormComponents/Container'
import { Fieldset } from './FormComponents/Fieldset'
import { InputLabel } from './FormComponents/InputLabel'
import { Input } from './FormComponents/Input'
import { CheckboxInput } from './FormComponents/CheckboxInput'
import { GoogleAuth } from './FormComponents/GoogleAuth'
import { Button } from '@/app/Button'
import { Divider } from './FormComponents/Divider'

export function LoginForm() {
  return (
    <Container>
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
      <GoogleAuth kindOfForm="Login" />
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
    </Container>
  )
}

export function SignUpForm() {
  return (
    <Container>
      <Fieldset>
        <InputLabel htmlFor="fullName" label="Full Name" />
        <Input type="text" id="fullName" placeholder="Enter your Name" />
      </Fieldset>
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
      </Fieldset>
      <CheckboxInput label="I agree with Terms of Use and Privacy Policy" />
      <Button href="#" variant="orangeBlock">
        Sign Up
      </Button>
      <Divider />
      <GoogleAuth kindOfForm="Sign Up" />
      <div className="flex items-center justify-center">
        <p className="text-lg text-skillbridge-grey-15">
          Already have an account?&nbsp;
          <a
            href="/login"
            className="border-b border-skillbridge-grey-15 font-medium"
          >
            Login
          </a>
          &nbsp;
        </p>
        <ArrowUpRight width={24} height={24} />
      </div>
    </Container>
  )
}
