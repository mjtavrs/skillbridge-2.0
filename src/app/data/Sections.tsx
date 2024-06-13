import { BenefitsList } from '../components/Benefits/BenefitsList'
import { CoursesCard } from '../components/Courses/CoursesCard'
import { TestimonialsList } from '../components/Testimonials/TestimonialsList'
import { Section } from '../interfaces/SectionProps'

export const Sections: Section[] = [
  {
    id: '1',
    title: 'Benefits',
    description: `Discover the advantages of choosing our online courses! Our programs are designed to provide you with a flexible, engaging, and high-quality learning experience. Whether you're looking to advance your career, learn a new skill, or pursue a passion, our courses offer numerous benefits to help you achieve your goals. Explore the key benefits of our online courses and see how they can transform your educational journey. Join a community of motivated learners and take the next step toward your success!`,
    url: '#',
    columnsVariant: 'threeColumns',
    children: <BenefitsList />,
  },
  {
    id: '2',
    title: 'Our Courses',
    description:
      'Check our online courses, where you can enhance your skills in design and development. Choose from our carefully curated selection of courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses page and find the perfect fit for your learning journey.',
    url: '#',
    columnsVariant: 'twoColumns',
    children: <CoursesCard />,
  },
  {
    id: '3',
    title: 'Our Testimonials',
    description: `Discover the success stories of our students! Explore our testimonials to read firsthand experiences and see how our online courses have transformed their learning journeys. Hear directly from our students about the quality of our courses, the expertise of our instructors, and the impact our programs have had on their careers and personal growth. Don't just take our word for it - let our students tell you why they chose us for their education. Read their testimonials and join our community of motivated learners!`,
    url: '#',
    columnsVariant: 'twoColumns',
    children: <TestimonialsList />,
  },
  {
    id: '4',
    title: 'Our Pricing',
    description:
      'We offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you are an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.',
    url: '#',
    columnsVariant: 'twoColumns',
    children: <BenefitsList />,
  },
]
