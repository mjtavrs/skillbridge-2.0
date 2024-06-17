import { FaqQuestions } from '@/app/data/FaqQuestions'
import { FaqQuestion } from './FaqQuestion'

export function ListFaqQuestions() {
  return (
    <>
      {FaqQuestions.map((question) => (
        <FaqQuestion
          key={question.id}
          question={question.question}
          answer={question.answer}
          answerCta={question.answerCta}
          answerUrl={question.answerUrl}
        />
      ))}
    </>
  )
}
