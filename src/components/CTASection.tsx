import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

export function CTASection({
  eyebrow = 'Start the conversation',
  title,
  description,
  primaryLabel = 'Get Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Talk to Us',
  secondaryHref,
}: {
  eyebrow?: string
  title: string
  description: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-teal-950">
      <img
        src="/.netlify/images?url=/img/cta-texture.png&w=1600&fm=webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory max-w-2xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-ivory/70 max-w-xl mx-auto leading-relaxed">{description}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={primaryTo}
            className="inline-flex items-center gap-2 rounded-full bg-gold text-teal-950 px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors"
          >
            {primaryLabel}
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>
          {secondaryHref && (
            <a
              href={secondaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 text-ivory px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-ivory/60 transition-colors"
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
