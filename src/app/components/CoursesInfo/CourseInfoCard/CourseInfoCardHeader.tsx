import { Button } from '@/app/Button'
import { ReactNode } from 'react'
import { ListTags } from '../../Tags/ListTags'

interface CourseInfoCardHeaderProps {
  title: string
  description: string
  url: string
  tags: string[]
  author: string
  children: ReactNode
}

export function CourseInfoCardHeader({
  title,
  description,
  url,
  tags,
  author,
  children,
}: CourseInfoCardHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="max-w-[80.375rem] space-y-3">
          <p className="text-2xl font-semibold text-skillbridge-grey-15">
            {title}
          </p>
          <p className="text-lg text-skillbridge-grey-35">{description}</p>
        </div>
        <Button href={url} variant="grey">
          View Course
        </Button>
      </div>
      <>{children}</>
      <div className="flex items-center justify-between">
        <div className="space-x-3">
          <ListTags tags={tags} />
        </div>
        <span className="text-xl font-medium text-skillbridge-grey-15">
          By {author}
        </span>
      </div>
    </>
  )
}
