import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navigation, site } from '@/data/site'
import services from '@/data/services'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-teal-950 text-ivory/85">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/.netlify/images?url=/img/logo.png&w=80&fm=webp"
              alt=""
              aria-hidden="true"
              className="h-9 w-auto rounded-full bg-ivory p-1"
            />
            <div>
              <p className="font-display text-xl text-ivory font-semibold leading-none">Jyoti</p>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold-light mt-1">
                HR &amp; Compliance Solutions
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-ivory/70">{site.description}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-light">
            {site.brandMessage.join('  ·  ')}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Navigate</p>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold-light transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Services</p>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link to="/services" className="hover:text-gold-light transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ivory mb-4">Reach Us</p>
          <ul className="space-y-3.5 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-gold-light mt-0.5" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="shrink-0 text-gold-light" />
              <a href={`tel:${site.phoneHref}`} className="hover:text-gold-light transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="shrink-0 text-gold-light" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-light transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-ivory/50">
          <p>&copy; {year} Jyoti HR &amp; Compliance Solutions. All rights reserved.</p>
          <p>Registered office: Pune, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  )
}
