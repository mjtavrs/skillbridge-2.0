import { Metadata } from 'next'
import { PageSection } from '../PageSection'
import { Container } from './AboutUsSections/Container'
import { Header } from './AboutUsSections/Header'
import { CardsWrapper } from '../components/Section/CardsWrapper'
import { ListCards } from './AboutUsSections/ListCards'
import { Achievements, Goals } from '../data/AboutUsSections'

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
      <div className="mb-40 space-y-28">
        <Container>
          <Header
            title="Achievements"
            description="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
          />
          <CardsWrapper variant="twoColumns">
            <ListCards list={Achievements} />
          </CardsWrapper>
        </Container>
        <Container>
          <Header
            title="Our Goals"
            description="At Skillbridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact."
          />
          <CardsWrapper variant="twoColumns">
            <ListCards list={Goals} />
          </CardsWrapper>
        </Container>
      </div>
    </>
  )
}
