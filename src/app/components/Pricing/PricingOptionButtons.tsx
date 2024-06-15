'use client'

import { Button } from '@/app/Button'
import { useState } from 'react'

type PricingOption = 'Monthly' | 'Yearly'

export function PricingOptionButtons() {
  const [selected, setSelected] = useState<PricingOption>('Monthly')

  const handleButtonClick = (option: PricingOption) => {
    setSelected(option)
  }

  return (
    <div className="rounded-lg bg-white p-3">
      <Button
        variant={selected === 'Monthly' ? 'orange' : 'white'}
        onClick={() => handleButtonClick('Monthly')}
      >
        Monthly
      </Button>
      <Button
        variant={selected === 'Yearly' ? 'orange' : 'white'}
        onClick={() => handleButtonClick('Yearly')}
      >
        Yearly
      </Button>
    </div>
  )
}
