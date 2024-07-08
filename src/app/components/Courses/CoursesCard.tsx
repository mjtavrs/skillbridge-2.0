import * as Card from './index'
import { Button } from '@/app/Button'

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
    <Card.Root>
      <Card.ImageContainer cover={cover} />
      <Card.MetaInfo tags={tags} author={author} />
      <Card.CourseInfoContainer title={title} description={description} />
      <Button href={url} variant="greyBlock">
        Get It Now
      </Button>
    </Card.Root>
  )
}
