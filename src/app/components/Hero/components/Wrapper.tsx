import { Lightning } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export function Wrapper() {
  return (
    <>
      <div className="relative rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 px-5 py-4 xl:p-3">
        <Image
          src="/assets/svg/homeCtaLines.svg"
          alt=""
          height={43}
          width={39}
          className="absolute left-[-1.75rem] top-[-1.6rem]"
        />
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-skillbridge-orange-95 p-3 text-skillbridge-grey-20">
            <Lightning size={34} weight="fill" />
          </span>
          <h1 className="text-5xl font-semibold leading-6 text-skillbridge-grey-10 xl:text-4xl">
            <span className="text-skillbridge-orange-50">Unlock</span> Your
            Creative Potential
          </h1>
        </div>
      </div>
      <div className="mb-14 mt-5 flex flex-col items-center gap-3">
        <h2 className="text-4xl font-medium leading-6 text-skillbridge-grey-15 xl:text-[1.75rem]">
          with Online Design and Development Courses.
        </h2>
        <p className="text-lg leading-6 text-skillbridge-grey-15 xl:text-base">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
    </>
  )
}
