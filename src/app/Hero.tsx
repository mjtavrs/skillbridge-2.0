import { Lightning } from '@phosphor-icons/react/dist/ssr'
import { Button } from './Button'
import { ComponentProps } from 'react'

type HeroContainerProps = ComponentProps<'div'>

function HeroContainer(props: HeroContainerProps) {
  return <div className="flex justify-center" {...props} />
}

type HeroWrapperProps = ComponentProps<'section'>

function HeroWrapper(props: HeroWrapperProps) {
  return (
    <section
      className="my-24 flex w-[60rem] flex-col items-center"
      {...props}
    />
  )
}

function HeroButtons() {
  return (
    <div className="space-x-3">
      <Button href="#" variant="orange">
        Explore Courses
      </Button>
      <Button href="#">View Pricing</Button>
    </div>
  )
}

export function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <div className="rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-skillbridge-orange-95 p-3 text-skillbridge-grey-20">
              <Lightning size={34} weight="fill" />
            </span>
            <h1 className="text-5xl font-semibold leading-6 text-skillbridge-grey-10">
              <span className="text-skillbridge-orange-50">Unlock</span> Your
              Creative Potential
            </h1>
          </div>
        </div>
        <div className="mb-14 mt-5 flex flex-col items-center gap-3">
          <h2 className="text-4xl font-medium leading-6 text-skillbridge-grey-15">
            with Online Design and Development Courses.
          </h2>
          <p className="text-lg leading-6 text-skillbridge-grey-15">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        <HeroButtons />
      </HeroWrapper>
    </HeroContainer>
  )
}
