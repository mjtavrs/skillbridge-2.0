import { Button } from '@/app/Button'
import { FcGoogle } from 'react-icons/fc'

interface GoogleSignInProps {
  kindOfForm: 'Login' | 'Sign Up'
}

export function GoogleAuth({ kindOfForm }: GoogleSignInProps) {
  return (
    <Button href="#" variant="greyBlock">
      <div className="flex items-center justify-center gap-2 xl:text-sm">
        <FcGoogle className="h-7 w-7 xl:h-6 xl:w-6" />
        {kindOfForm} with Google
      </div>
    </Button>
  )
}
