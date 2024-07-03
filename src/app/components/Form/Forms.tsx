import * as Form from './FormComponents/index'
import { Button } from '@/app/Button'
import { ArrowUpRight } from '@phosphor-icons/react'

export function LoginForm() {
  return (
    <Form.Container>
      <Form.Fieldset>
        <Form.InputLabel htmlFor="email" label="Email" />
        <Form.Input type="email" id="email" placeholder="Enter your email" />
      </Form.Fieldset>
      <Form.Fieldset>
        <Form.InputLabel htmlFor="password" label="Password" />
        <Form.Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <p className="cursor-pointer text-right text-skillbridge-grey-30">
          Forgot Password?
        </p>
      </Form.Fieldset>
      <Form.CheckboxInput label="Remember Me" />
      <Button href="#" variant="orangeBlock">
        Login
      </Button>
      <Form.Divider />
      <Form.GoogleAuth kindOfForm="Login" />
      <div className="flex items-center justify-center">
        <p className="text-lg text-skillbridge-grey-15 xl:pt-1">
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
    </Form.Container>
  )
}

export function SignUpForm() {
  return (
    <Form.Container>
      <Form.Fieldset>
        <Form.InputLabel htmlFor="fullName" label="Full Name" />
        <Form.Input type="text" id="fullName" placeholder="Enter your Name" />
      </Form.Fieldset>
      <Form.Fieldset>
        <Form.InputLabel htmlFor="email" label="Email" />
        <Form.Input type="email" id="email" placeholder="Enter your email" />
      </Form.Fieldset>
      <Form.Fieldset>
        <Form.InputLabel htmlFor="password" label="Password" />
        <Form.Input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </Form.Fieldset>
      <Form.CheckboxInput label="I agree with Terms of Use and Privacy Policy" />
      <Button href="#" variant="orangeBlock">
        Sign Up
      </Button>
      <Form.Divider />
      <Form.GoogleAuth kindOfForm="Sign Up" />
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
    </Form.Container>
  )
}
