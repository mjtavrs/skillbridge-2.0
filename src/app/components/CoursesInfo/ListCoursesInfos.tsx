import { CoursesList } from '@/app/data/CoursesList'
import { CoursesInfoWrapper } from './CourseInfoCard/CoursesInfoWrapper'
import { CourseInfoCardContainer } from './CourseInfoCard/CourseInfoCardContainer'
import { CourseInfoCardHeaderWrapper } from './CourseInfoCard/CourseInfoCardHeaderWrapper'
import { CourseInfoCardHeader } from './CourseInfoCard/CourseInfoCardHeader'
import { CourseInfoCardImagesContainer } from './CourseInfoCard/CourseInfoCardImagesContainer'
import { ListImages } from './CourseInfoCard/ListImages'
import { CurriculumContainer } from './CourseInfoCard/Curriculum/CurriculumContainer'
import { ListCurriculumItems } from './CourseInfoCard/Curriculum/ListCurriculumItems'

export function ListCoursesInfos() {
  return (
    <>
      {CoursesList.map((course) => (
        <CoursesInfoWrapper key={course.id}>
          <CourseInfoCardContainer>
            <CourseInfoCardHeaderWrapper>
              <CourseInfoCardHeader
                title={course.title}
                description={course.description}
                url={course.url}
                tags={course.tags}
                author={course.author}
              >
                <CourseInfoCardImagesContainer>
                  <ListImages imageList={course.pictures} />
                </CourseInfoCardImagesContainer>
              </CourseInfoCardHeader>
            </CourseInfoCardHeaderWrapper>
            <CurriculumContainer>
              <ListCurriculumItems list={course.curriculum} />
            </CurriculumContainer>
          </CourseInfoCardContainer>
        </CoursesInfoWrapper>
      ))}
    </>
  )
}
