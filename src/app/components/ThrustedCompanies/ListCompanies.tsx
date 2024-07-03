import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Wrapper } from './components/Wrapper'

interface ListCompaniesProps {
  companies: StaticImport[]
}

export function ListCompanies({ companies }: ListCompaniesProps) {
  return (
    <>
      {companies.map((company, index) => (
        <Wrapper key={index} image={company} />
      ))}
    </>
  )
}
