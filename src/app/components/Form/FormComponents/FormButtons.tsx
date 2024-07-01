import { Button } from '@/app/Button'
import { Divider } from './Divider'
import { GoogleAuth } from './GoogleAuth'

export function FormButtons() {
  return (
    <>
      <Button href="#" variant="orangeBlock">
        Login
      </Button>
      <Divider />
      <GoogleAuth kindOfForm="Login" />
    </>
  )
}
