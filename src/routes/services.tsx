import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2 } from 'lucide-react'
import services from '@/data/services'
import { site } from '@/data/site'
import { SectionHeading } from '@/components/Section'
import { CTASection } from '@/components/CTASection'

export const Route = createFileRoute('/services')({
  component: Services,
})

function Services() {
  return (
    <>
      <section className="bg-teal-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-5">Services</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight max-w-2xl">
            Ten services, one retainer, a single consultant relationship.
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
            Most clients start with two or three of these and add the rest as their team grows. Everything below is
            available individually or bundled into a monthly retainer.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 sm:py-28 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid md:grid-cols-[auto_1fr] gap-8 items-start rounded-3xl ${
                  index % 2 === 1 ? 'bg-ivory-dim/50 -mx-6 sm:-mx-8 px-6 sm:px-8 py-10' : ''
                }`}
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <span className="font-display text-4xl text-gold/40 font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-12 w-12 rounded-full bg-teal-900 flex items-center justify-center">
                    <Icon size={22} className="text-gold-light" strokeWidth={1.75} />
                  </div>
                </div>
                <div>
                  <SectionHeading title={service.title} description={service.description} />
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm text-teal-900/80">
                        <CheckCircle2 size={17} className="shrink-0 text-gold-dark mt-0.5" strokeWidth={2} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us what's on your plate and we'll scope the right services."
        description="A short consultation is usually enough to tell which two or three services matter most right now."
        secondaryLabel="Talk to Us"
        secondaryHref={`tel:${site.phoneHref}`}
      />
    </>
  )
}
