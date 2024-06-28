import { CrownSimple } from '@phosphor-icons/react/dist/ssr'

export function Card() {
  return (
    <div className="space-y-8 bg-white p-12">
      <span className="inline-block rounded-lg border border-skillbridge-orange-90 bg-skillbridge-orange-97 p-4">
        <CrownSimple
          height={34}
          width={34}
          weight="fill"
          className="text-skillbridge-orange-50"
        />
      </span>
      <div className="space-y-4">
        <p className="text-2xl font-medium text-skillbridge-grey-15">
          Trusted by Thousands
        </p>
        <p className="text-lg text-skillbridge-grey-35">
          We have successfully served thousands of students, helping them unlock
          their potential and achieve their career goals.
        </p>
      </div>
    </div>
  )
}
