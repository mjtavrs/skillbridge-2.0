export default function CourseDetails({
  params,
}: {
  params: { courseId: string }
}) {
  return <h1>Detalhes do curso {params.courseId}</h1>
}
