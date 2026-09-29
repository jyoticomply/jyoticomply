import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark mb-4">
      <span className="h-px w-8 bg-gold" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
}) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-3xl sm:text-4xl font-semibold leading-tight ${
          light ? 'text-ivory' : 'text-teal-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-ivory/75' : 'text-teal-900/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
