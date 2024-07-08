import { Button } from '@/app/Button'

export function Buttons() {
  return (
    <div className="space-x-3">
      <Button href="/courses" variant="orange">
        Explore Courses
      </Button>
      <Button href="/pricing">View Pricing</Button>
    </div>
  )
}
