'use client'

import { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/app/Button'

interface FaqQuestionProps {
  question: string
  answer: string
  answerCta: string
  answerUrl: string
}

export function FaqQuestion({
  question,
  answer,
  answerCta,
  answerUrl,
}: FaqQuestionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleToggle = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    )
  }

  return (
    <Accordion.Root
      type="multiple"
      className="rounded-xl border border-skillbridge-white-95 p-8"
      onValueChange={(values: string[]) => setOpenItems(values)}
    >
      <Accordion.Item value="question">
        <Accordion.Header className="grid grid-cols-faqQuestion items-center gap-8 text-skillbridge-grey-15 data-[state=open]:border-b data-[state=open]:border-skillbridge-white-95 data-[state=open]:pb-6">
          <p className="text-xl font-medium">{question}</p>
          <Accordion.Trigger
            className="child:duration-250 rounded-lg bg-skillbridge-orange-95 p-3 child:transition-transform child:data-[state=open]:rotate-45"
            onClick={() => handleToggle('question')}
          >
            <Plus size={28} weight="bold" />
          </Accordion.Trigger>
        </Accordion.Header>
        <AnimatePresence initial={false}>
          {openItems.includes('question') && (
            <Accordion.Content className="space-y-12" asChild forceMount>
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="pt-12 text-lg text-skillbridge-grey-30">
                  {answer}
                </p>
                <Button href={answerUrl} variant="greyBlock">
                  <div className="flex items-center justify-between">
                    <span className="text-skillbridge-grey-15">
                      {answerCta}
                    </span>
                    <div className="rounded-full bg-white p-4 text-skillbridge-grey-30">
                      <ArrowRight size={28} />
                    </div>
                  </div>
                </Button>
              </motion.div>
            </Accordion.Content>
          )}
        </AnimatePresence>
      </Accordion.Item>
    </Accordion.Root>
  )
}
