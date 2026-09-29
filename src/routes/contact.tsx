import { createFileRoute } from '@tanstack/react-router'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { site } from '@/data/site'
import { SectionHeading } from '@/components/Section'
import { ContactForm } from '@/components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <>
      <section className="bg-teal-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-16 pb-16 sm:pt-24 sm:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light mb-5">Contact</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight max-w-2xl">
            Get Consultation
          </h1>
          <p className="mt-6 max-w-xl text-ivory/70 leading-relaxed">
            Tell us about your business and current setup. We reply to every enquiry within one working day.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 sm:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <SectionHeading eyebrow="Reach Us Directly" title="Prefer to talk first?" />
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-teal-900 flex items-center justify-center">
                  <Phone size={18} className="text-gold-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal-950">Phone</p>
                  <a href={`tel:${site.phoneHref}`} className="text-sm text-teal-900/70 hover:text-teal-900">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-teal-900 flex items-center justify-center">
                  <Mail size={18} className="text-gold-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal-950">Email</p>
                  <a href={`mailto:${site.email}`} className="text-sm text-teal-900/70 hover:text-teal-900">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-teal-900 flex items-center justify-center">
                  <MapPin size={18} className="text-gold-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal-950">Office</p>
                  <p className="text-sm text-teal-900/70">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 shrink-0 rounded-full bg-teal-900 flex items-center justify-center">
                  <Clock size={18} className="text-gold-light" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-teal-950">Hours</p>
                  <p className="text-sm text-teal-900/70">{site.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
