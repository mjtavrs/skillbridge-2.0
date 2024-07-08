import { Metadata } from 'next'
import { PageSection } from '@/app/PageSection'
import { Video } from '@/app/Video'
import { SectionColumns } from '@/app/components/Section/SectionColumns'
import { ListClassItemCards } from './ClassItems/ClassItemCard/ListClassItemCards'
import { ExampleClassesList } from '@/app/data/ExampleClassesList'

export const metadata: Metadata = {
  title: 'Skillbridge • UI/UX Design Course',
}

export default function CourseDetails() {
  return (
    <>
      <PageSection
        title="UI/UX Design Course"
        description="Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum"
      />
      <Video coverImage="/assets/webp/courses/uiUxDesign/cover.webp" />
      <div className="mx-40 my-24 xl:mx-14 xl:my-20">
        <SectionColumns variant="twoColumns">
          <ListClassItemCards classes={ExampleClassesList} />
        </SectionColumns>
      </div>
    </>
  )
}
