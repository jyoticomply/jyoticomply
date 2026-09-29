import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, Phone } from 'lucide-react'
import { navigation, site } from '@/data/site'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-ivory-line">
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-2 text-xs tracking-wide text-ivory bg-teal-950">
        <p className="uppercase tracking-[0.2em] text-gold-light">
          {site.brandMessage.join('  ·  ')}
        </p>
        <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 hover:text-gold-light transition-colors">
          <Phone size={13} strokeWidth={2} />
          {site.phone}
        </a>
      </div>

      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/.netlify/images?url=/img/logo.png&w=96&fm=webp"
            alt=""
            aria-hidden="true"
            className="h-11 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg lg:text-xl font-semibold text-teal-900">Jyoti</span>
            <span className="hidden sm:inline text-[0.65rem] uppercase tracking-[0.16em] text-teal-700/80 font-medium">
              HR &amp; Compliance Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className="text-sm font-medium text-teal-800/80 hover:text-teal-900 transition-colors"
              activeProps={{ className: 'text-teal-900! border-b-2 border-gold pb-1' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-teal-900 text-ivory px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-teal-800 transition-colors"
          >
            Get Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 -mr-2 text-teal-900"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ivory-line bg-ivory px-6 py-4 flex flex-col gap-1">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className="py-3 text-base font-medium text-teal-800 border-b border-ivory-line/70 last:border-none"
              activeProps={{ className: 'text-gold-dark!' }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-full bg-teal-900 text-ivory px-5 py-3 text-sm font-semibold tracking-wide"
          >
            Get Consultation
          </Link>
        </nav>
      )}
    </header>
  )
}
