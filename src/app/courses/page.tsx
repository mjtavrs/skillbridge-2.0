import { Button } from '../Button'
import { PageSection } from '../PageSection'
import { Tag } from '../components/Tags/Tag'

export default function Courses() {
  return (
    <>
      <PageSection
        title="Online Courses on Design and Development"
        description={`Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.`}
      />
      <section className="mx-40">
        <article className="rounded-xl bg-white p-12">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="max-w-[80.375rem] space-y-3">
                <p className="text-2xl font-semibold text-skillbridge-grey-15">
                  Web Design Fundamentals
                </p>
                <p className="text-lg text-skillbridge-grey-35">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
              </div>
              <Button href="#" variant="grey">
                View Course
              </Button>
            </div>
            <div className="grid grid-cols-threeColumnWrapper gap-8">
              <div className="h-96 bg-red-500"></div>
              <div className="h-96 bg-red-500"></div>
              <div className="h-96 bg-red-500"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-x-3">
                <Tag title="4 Weeks" />
                <Tag title="Beginner" />
              </div>
              <span className="text-xl font-medium text-skillbridge-grey-15">
                By John Smith
              </span>
            </div>
          </div>
          <div className="mt-12 divide-y divide-skillbridge-white-95 rounded-xl border border-skillbridge-white-95">
            <p className="px-8 py-6 text-2xl font-semibold text-skillbridge-grey-15">
              Curriculum
            </p>
            <div className="grid grid-cols-curriculumSection py-8">
              <article className="space-y-5 text-left odd:px-12 even:border-x even:border-skillbridge-white-95 even:px-12">
                <p className="text-5xl font-extrabold text-skillbridge-grey-15">
                  01
                </p>
                <p className="text-lg font-medium text-skillbridge-grey-20">
                  Introduction to HTML
                </p>
              </article>
              <article className="space-y-5 text-left odd:px-12 even:border-x even:border-skillbridge-white-95 even:px-12">
                <p className="text-5xl font-extrabold text-skillbridge-grey-15">
                  02
                </p>
                <p className="text-lg font-medium text-skillbridge-grey-20">
                  Styling with CSS
                </p>
              </article>
              <article className="space-y-5 text-left odd:px-12 even:border-x even:border-skillbridge-white-95 even:px-12">
                <p className="text-5xl font-extrabold text-skillbridge-grey-15">
                  03
                </p>
                <p className="text-lg font-medium text-skillbridge-grey-20">
                  Introduction to Responsive Design
                </p>
              </article>
              <article className="space-y-5 text-left odd:px-12 even:border-x even:border-skillbridge-white-95 even:px-12">
                <p className="text-5xl font-extrabold text-skillbridge-grey-15">
                  04
                </p>
                <p className="text-lg font-medium text-skillbridge-grey-20">
                  Design Principles for Web
                </p>
              </article>
              <article className="space-y-5 text-left odd:px-12 even:border-x even:border-skillbridge-white-95 even:px-12">
                <p className="text-5xl font-extrabold text-skillbridge-grey-15">
                  05
                </p>
                <p className="text-lg font-medium text-skillbridge-grey-20">
                  Building a Basic Website
                </p>
              </article>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
