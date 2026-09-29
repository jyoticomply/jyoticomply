import type { Service } from '@/data/services'

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon

  return (
    <div className="group relative rounded-2xl border border-ivory-line bg-white/60 p-7 hover:border-gold/60 hover:shadow-[0_18px_40px_-24px_rgba(14,57,54,0.35)] transition-all duration-300">
      <span className="absolute top-6 right-7 font-display text-3xl text-teal-900/10 group-hover:text-gold/30 transition-colors">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="h-11 w-11 rounded-full bg-teal-900 flex items-center justify-center mb-5">
        <Icon size={20} className="text-gold-light" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-lg font-semibold text-teal-950 mb-2 pr-8">{service.title}</h3>
      <p className="text-sm leading-relaxed text-teal-900/70">{service.tagline}</p>
    </div>
  )
}
