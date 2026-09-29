import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Faq } from '@/data/faqs'

export function FaqAccordion({ items }: { items: Array<Faq> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-ivory-line border-y border-ivory-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-display text-base sm:text-lg font-semibold text-teal-950">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gold-dark transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-teal-900/70 max-w-2xl">{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
