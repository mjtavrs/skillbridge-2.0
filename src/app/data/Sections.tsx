import { BenefitsList } from '../components/Benefits/BenefitsList'
import { CoursesCard } from '../components/Courses/CoursesCard'
import { Section } from '../interfaces/SectionProps'

export const Sections: Section[] = [
  {
    id: '1',
    title: 'Benefits',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta similique magnam quod. Autem alias repellat adipisci possimus ducimus optio, repellendus soluta aperiam libero, excepturi dolorem deserunt, deleniti architecto aspernatur error.',
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
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eveniet consectetur alias harum quas suscipit ut voluptatum rem, voluptatibus similique iusto voluptatem fugiat nostrum iure possimus laudantium repudiandae, magni reprehenderit.',
    url: '#',
    columnsVariant: 'twoColumns',
    children: <BenefitsList />,
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
