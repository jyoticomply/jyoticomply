import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import services from '@/data/services'
import faqs from '@/data/faqs'
import { benefits, industries, process, stats, values } from '@/data/content'
import { site } from '@/data/site'
import { SectionHeading } from '@/components/Section'
import { ServiceCard } from '@/components/ServiceCard'
import { CTASection } from '@/components/CTASection'
import { FaqAccordion } from '@/components/FaqAccordion'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-950">
        <img
          src="/.netlify/images?url=/img/hero-pattern.png&w=1800&fm=webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-6">
            HR &middot; Payroll &middot; Tax &amp; Statutory Compliance
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-ivory max-w-3xl leading-[1.08]">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-ivory/75 leading-relaxed">
            {site.name} keeps HR processes, payroll and statutory filings accurate for employers who
            would rather run their business than chase deadlines.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-teal-950 px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors"
            >
              Get Consultation
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-ivory/30 text-ivory px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-ivory/60 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <dl className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl border-t border-ivory/15 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl text-gold-light font-semibold">{stat.value}</dt>
                <dd className="mt-1 text-xs text-ivory/60 leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="About Jyoti HR & Compliance Solutions"
              title="Compliance handled by people who answer the phone."
              description={`Founded in 2012, ${site.shortName} was built around a simple idea: HR and statutory compliance shouldn't require a business owner to become an expert in EPF rules, GST notices, or labour law. We do that work, so you don't have to.`}
            />
            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li key={value.title} className="flex gap-3">
                  <CheckCircle2 size={20} className="shrink-0 text-gold-dark mt-0.5" strokeWidth={2} />
                  <p className="text-sm text-teal-900/80">
                    <span className="font-semibold text-teal-950">{value.title}.</span> {value.description}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-900 border-b-2 border-gold pb-0.5 hover:text-teal-700 transition-colors"
            >
              Meet the team <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="relative">
            <img
              src="/.netlify/images?url=/img/about-graphic.png&w=900&fm=webp"
              alt="Abstract illustration representing steady partnership and compliance"
              className="w-full max-w-md mx-auto rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-ivory-dim/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            align="center"
            eyebrow="Core Services"
            title="Everything a compliant employer needs, under one retainer."
            description="From the first payroll run to the annual GST reconciliation, our services cover the full HR and statutory compliance lifecycle."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-teal-900 text-ivory px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-teal-800 transition-colors"
            >
              View All Services
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Client Benefits"
            description="What changes for an employer once compliance stops being their problem to track."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-l-2 border-gold pl-5">
                <h3 className="font-display text-lg font-semibold text-teal-950">{benefit.title}</h3>
                <p className="mt-2 text-sm text-teal-900/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance support */}
      <section className="bg-teal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            light
            eyebrow="Compliance Support"
            title="Statutory obligations, tracked on a calendar you can see."
            description="EPF, ESIC, GST, TDS and professional tax each run on their own filing cycle. We consolidate all of it into one compliance calendar and one point of contact."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['EPF / PF', 'ESIC', 'GST', 'TDS & ITR'].map((label) => (
              <div key={label} className="rounded-2xl border border-ivory/15 bg-ivory/5 p-6">
                <p className="font-display text-lg font-semibold text-ivory">{label}</p>
                <p className="mt-2 text-sm text-ivory/60">Registration, monthly filing and renewal tracking.</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/compliance-solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light border-b-2 border-gold/60 pb-0.5 hover:text-gold transition-colors"
            >
              See Compliance Solutions in detail <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Industries & Businesses We Serve"
            description="Compliance requirements shift by sector — our filings are built around the industry you're actually in."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ivory-line rounded-2xl overflow-hidden">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-ivory p-6">
                <p className="font-semibold text-teal-950 text-sm">{industry.name}</p>
                <p className="mt-2 text-xs text-teal-900/60 leading-relaxed">{industry.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ivory-dim/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading eyebrow="How We Work" title="Our Process" />
          <div className="mt-14 grid md:grid-cols-5 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative pl-1">
                <p className="font-display text-4xl text-gold/50 font-semibold mb-3">{item.step}</p>
                <h3 className="font-semibold text-teal-950 text-sm uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-teal-900/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 sm:py-28">
          <SectionHeading align="center" eyebrow="Questions" title="Frequently Asked Questions" />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to stop tracking deadlines yourself?"
        description="Book a consultation and we'll map your current HR and compliance position within the first call."
        secondaryLabel="Talk to Us"
        secondaryHref={`tel:${site.phoneHref}`}
      />
    </>
  )
}
