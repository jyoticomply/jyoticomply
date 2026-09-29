import { useState } from 'react'
import services from '@/data/services'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const initialFields = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  'bot-field': '',
}

export function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'consultation', ...fields }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('submitted')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'submitted') {
    return (
      <div className="rounded-2xl border border-gold/40 bg-teal-900/5 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-teal-950">Thank you, {fields.name.split(' ')[0] || 'there'}.</h3>
        <p className="mt-3 text-sm text-teal-900/70 leading-relaxed">
          Your enquiry has reached our team. We reply to every consultation request within one working day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="consultation"
      className="grid gap-5 rounded-2xl border border-ivory-line bg-white/70 p-7 sm:p-8"
    >
      <input type="hidden" name="form-name" value="consultation" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" value={fields.name} onChange={handleChange} required />
        <Field label="Company / business name" name="company" value={fields.company} onChange={handleChange} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" value={fields.email} onChange={handleChange} required />
        <Field label="Phone" name="phone" type="tel" value={fields.phone} onChange={handleChange} required />
      </div>

      <label className="block">
        <span className="block text-sm font-medium text-teal-950 mb-1.5">Service you need</span>
        <select
          name="service"
          value={fields.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-ivory-line bg-ivory px-4 py-2.5 text-sm text-teal-950 focus:outline-none focus:ring-2 focus:ring-gold/50"
        >
          <option value="">Select a service (optional)</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — need guidance</option>
        </select>
      </label>

      <label className="block">
        <span className="block text-sm font-medium text-teal-950 mb-1.5">How can we help?</span>
        <textarea
          name="message"
          rows={4}
          value={fields.message}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-ivory-line bg-ivory px-4 py-2.5 text-sm text-teal-950 focus:outline-none focus:ring-2 focus:ring-gold/50"
        />
      </label>

      {status === 'error' && (
        <p className="text-sm text-red-700">
          Something went wrong sending this. Please try again, or reach us directly by phone or email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center rounded-full bg-teal-900 text-ivory px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-teal-800 transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Enquire Now'}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-teal-950 mb-1.5">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-ivory-line bg-ivory px-4 py-2.5 text-sm text-teal-950 focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
    </label>
  )
}
