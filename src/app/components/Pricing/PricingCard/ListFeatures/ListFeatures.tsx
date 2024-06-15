import { Check, X } from '@phosphor-icons/react/dist/ssr'
import { Feature } from './Feature'

interface ListFeaturesProps {
  availableFeatures: string[]
  unavailableFeatures?: string[]
}

export function ListFeatures({
  availableFeatures,
  unavailableFeatures = [],
}: ListFeaturesProps) {
  return (
    <>
      <>
        {availableFeatures.map((feature) => (
          <Feature
            key=""
            icon={<Check width={20} weight="bold" />}
            feature={feature}
            variant="available"
          />
        ))}
      </>
      <>
        {unavailableFeatures.map((feature) => (
          <Feature
            key=""
            icon={<X width={20} weight="bold" />}
            feature={feature}
            variant="unavailable"
          />
        ))}
      </>
    </>
  )
}
