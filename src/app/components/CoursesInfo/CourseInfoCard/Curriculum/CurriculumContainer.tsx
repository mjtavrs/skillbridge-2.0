import { ComponentProps, ReactNode } from 'react'

interface CurriculumWrapperProps {
  children: ReactNode
}

function CurriculumWrapper({ children }: CurriculumWrapperProps) {
  return (
    <div className="mt-12 divide-y divide-skillbridge-white-95 rounded-xl border border-skillbridge-white-95">
      <p className="px-8 py-6 text-2xl font-semibold text-skillbridge-grey-15 xl:px-6 xl:py-5 xl:text-lg">
        Curriculum
      </p>
      {children}
    </div>
  )
}

type CurriculumContainerProps = ComponentProps<'div'>

export function CurriculumContainer({ ...props }: CurriculumContainerProps) {
  return (
    <CurriculumWrapper>
      <div
        {...props}
        className="grid grid-cols-curriculumSection py-8 xl:py-6"
      />
    </CurriculumWrapper>
  )
}
