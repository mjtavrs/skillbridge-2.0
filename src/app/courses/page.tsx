import { Metadata } from 'next'
import { PageSection } from '../PageSection'
import { ListCoursesInfos } from '../components/CoursesInfo/ListCoursesInfos'

export const metadata: Metadata = {
  title: 'Skillbridge • Courses',
}

export default function Courses() {
  return (
    <>
      <PageSection
        title="Online Courses on Design and Development"
        description={`Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.`}
      />
      <div className="mb-24 space-y-12">
        <ListCoursesInfos />
      </div>
    </>
  )
}
