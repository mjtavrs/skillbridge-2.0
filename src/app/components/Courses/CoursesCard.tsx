import { Button } from '@/app/Button'
import Image from 'next/image'
import { ListTags } from '../Tags/ListTags'

interface CoursesCardProps {
  cover: string
  tags: string[]
  author: string
  title: string
  description: string
  url: string
}

export function CoursesCard({
  cover,
  tags,
  author,
  title,
  description,
  url,
}: CoursesCardProps) {
  return (
    <article className="space-y-6 rounded-xl border border-skillbridge-white-95 bg-white p-12">
      <div className="relative h-96">
        <Image
          src={cover}
          layout="fill"
          objectFit="cover"
          alt=""
          quality={80}
          className="rounded-lg"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="space-x-3">
            <ListTags tags={tags} />
          </div>
          <span className="text-xl font-medium text-skillbridge-grey-15">
            By {author}
          </span>
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-2xl font-semibold text-skillbridge-grey-15">
          {title}
        </p>
        <p className="text-lg text-skillbridge-grey-30">{description}</p>
      </div>
      <Button href={url} variant="greyBlock">
        Get It Now
      </Button>
    </article>
  )
}
