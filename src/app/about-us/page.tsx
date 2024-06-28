import { Metadata } from 'next'
import { PageSection } from '../PageSection'
import { Container } from './AboutUsSections/Container'
import { Header } from './AboutUsSections/Header'
import { Card } from './AboutUsSections/Card'
import { CardsWrapper } from '../components/Section/CardsWrapper'

export const metadata: Metadata = {
  title: 'Skillbridge • About Us',
}

export default function AboutUs() {
  return (
    <>
      <PageSection
        title="About Skillbridge"
        description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      <Container>
        <Header />
        <CardsWrapper variant="twoColumns">
          <Card />
          <Card />
        </CardsWrapper>
      </Container>
    </>
  )
}
