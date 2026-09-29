import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import services from '@/data/services'
import { site } from '@/data/site'
import { SectionHeading } from '@/components/Section'
import { CTASection } from '@/components/CTASection'

export const Route = createFileRoute('/compliance-solutions')({
  component: ComplianceSolutions,
})

const complianceIds = [
  'epf-compliance',
  'esic-compliance',
  'salary-tds',
  'gst-support',
  'itr-filing',
  'tax-business-compliance',
]

const complianceServices = services.filter((service) => complianceIds.includes(service.id))

const calendar = [
  { period: 'Monthly', items: 'PF ECR filing, ESIC contribution, TDS deposit, GSTR-1 (monthly filers)' },
  { period: 'Quarterly', items: 'GSTR-1 (quarterly filers), TDS return (24Q/26Q), professional tax returns' },
  { period: 'Annually', items: 'GST annual return, Form 16 issuance, ITR filing, statutory register renewal' },
]

function ComplianceSolutions() {
  return (
    <>
      <section className="bg-teal-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-5">
            Compliance Solutions
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight max-w-2xl">
            The statutory side of employment, mapped and managed.
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
            EPF, ESIC, GST, TDS and ITR each carry their own registration process, filing frequency and penalty
            structure. We consolidate all six into a single compliance calendar for your business.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            eyebrow="What's Covered"
            title="Six compliance areas, one consultant relationship."
            description="Each area below links to the full service detail — registration, ongoing filing, and how we handle notices when they arrive."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceServices.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.id}
                  to="/services"
                  hash={service.id}
                  className="group rounded-2xl border border-ivory-line bg-white/60 p-7 hover:border-gold/60 transition-colors"
                >
                  <div className="h-11 w-11 rounded-full bg-teal-900 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-gold-light" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-teal-950 mb-2">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-teal-900/70">{service.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold-dark opacity-0 group-hover:opacity-100 transition-opacity">
                    See details <ArrowUpRight size={13} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-teal-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            light
            eyebrow="Filing Rhythm"
            title="A compliance calendar, not a compliance surprise."
            description="Every filing has a lead time built in — we start reconciliation a week before any statutory due date, not on it."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {calendar.map((row) => (
              <div key={row.period} className="rounded-2xl border border-ivory/15 bg-ivory/5 p-7">
                <p className="font-display text-xl font-semibold text-ivory">{row.period}</p>
                <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{row.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <div className="rounded-2xl border border-gold/40 bg-gold/5 p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
            <ShieldCheck size={32} className="shrink-0 text-gold-dark" strokeWidth={1.75} />
            <div>
              <h3 className="font-display text-xl font-semibold text-teal-950">Already received a notice?</h3>
              <p className="mt-2 text-sm text-teal-900/75 leading-relaxed max-w-2xl">
                An EPF, ESIC or GST notice has a response window, usually measured in days rather than weeks. Send us
                the notice and we'll tell you, before you sign a retainer, whether we can respond in time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Compliance Solutions"
        title="Bring us your current filings and we'll audit them for free."
        description="Most audits surface at least one filing gap worth closing before the next due date."
        secondaryLabel="Talk to Us"
        secondaryHref={`tel:${site.phoneHref}`}
      />
    </>
  )
}
