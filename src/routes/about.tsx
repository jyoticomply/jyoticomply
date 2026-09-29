import { createFileRoute } from '@tanstack/react-router'
import { stats, team, values } from '@/data/content'
import { site } from '@/data/site'
import { SectionHeading } from '@/components/Section'
import { CTASection } from '@/components/CTASection'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <section className="bg-teal-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-5">About Us</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
            Fourteen years of keeping employers on the right side of every deadline.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-ivory/70 leading-relaxed">{site.description}</p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28 grid md:grid-cols-2 gap-16 items-start">
          <SectionHeading
            eyebrow="Our Story"
            title="Started to close the gap between HR intent and HR paperwork."
            description={
              <>
                Jyoti spent the first part of her career inside manufacturing and IT payroll teams,
                watching the same problem repeat: HR decisions were sound, but the paperwork behind them &mdash;
                PF filings, appointment letters, TDS deductions &mdash; consistently lagged behind. {site.name}{' '}
                was founded in 2012 to close that gap for other employers.
                <br />
                <br />
                What started as a one-person payroll practice now supports over 230 businesses across
                manufacturing, IT, retail, healthcare and hospitality, with the same principle intact: a
                consultant should be reachable, and a filing should never be a surprise.
              </>
            }
          />
          <dl className="grid grid-cols-2 gap-8 rounded-2xl border border-ivory-line bg-white/60 p-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-teal-900 font-semibold">{stat.value}</dt>
                <dd className="mt-1 text-xs text-teal-900/60 leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ivory-dim/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading eyebrow="What Guides Us" title="Our Values" align="center" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white/70 border border-ivory-line p-7 text-center">
                <h3 className="font-display text-lg font-semibold text-teal-950">{value.title}</h3>
                <p className="mt-2 text-sm text-teal-900/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading eyebrow="Who You'll Work With" title="Our Team" align="center" />
          <div className="mt-14 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-teal-900 flex items-center justify-center font-display text-2xl text-gold-light font-semibold">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-teal-950">{member.name}</h3>
                <p className="text-xs uppercase tracking-wide text-gold-dark mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-teal-900/70 leading-relaxed">{member.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Partner With Us"
        title="Let's look at where your compliance stands today."
        description="A first consultation costs nothing and usually surfaces two or three gaps worth fixing before they become penalties."
        secondaryLabel="Talk to Us"
        secondaryHref={`tel:${site.phoneHref}`}
      />
    </>
  )
}
