import { Hero } from './Hero'
import { BenefitsList } from './components/Benefits/BenefitsList'
import { Section } from './components/Section/Section'

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        title="Benefits"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta similique magnam quod. Autem alias repellat adipisci possimus ducimus optio, repellendus soluta aperiam libero, excepturi dolorem deserunt, deleniti architecto aspernatur error."
        url="#"
        columnsVariant="threeColumns"
      >
        <BenefitsList />
      </Section>
    </>
  )
}
