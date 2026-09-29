import { createFileRoute } from '@tanstack/react-router'
import resources from '@/data/resources'
import { site } from '@/data/site'
import { SectionHeading } from '@/components/Section'
import { CTASection } from '@/components/CTASection'

export const Route = createFileRoute('/resources')({
  component: Resources,
})

function Resources() {
  return (
    <>
      <section className="bg-teal-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-5">Resources</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight max-w-2xl">
            Checklists and calendars we actually use internally.
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
            These are working documents from our own client onboarding process, made available on request during a
            consultation.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            eyebrow="Guides & Checklists"
            title="Six starting points for common compliance questions."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <div
                  key={resource.id}
                  className="flex flex-col rounded-2xl border border-ivory-line bg-white/60 p-7"
                >
                  <div className="h-11 w-11 rounded-full bg-teal-900 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold-light" strokeWidth={1.75} />
                  </div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-gold-dark">
                    {resource.format}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-teal-950">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-900/70 flex-1">{resource.description}</p>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Request: ${resource.title}`)}`}
                    className="mt-5 inline-flex text-xs font-semibold text-teal-900 border-b-2 border-gold pb-0.5 hover:text-teal-700 transition-colors self-start"
                  >
                    Request this guide
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need something specific?"
        title="Ask us for the checklist that matches your situation."
        description="If your question isn't answered by a guide above, a short call usually gets you further than a document would."
        secondaryLabel="Talk to Us"
        secondaryHref={`tel:${site.phoneHref}`}
      />
    </>
  )
}
