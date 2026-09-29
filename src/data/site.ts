export const site = {
  name: 'Jyoti HR & Compliance Solutions',
  shortName: 'Jyoti HR & Compliance',
  tagline: 'Your Compliance Partner for a Better Tomorrow',
  brandMessage: ['Partner', 'Comply', 'Grow'],
  description:
    'HR, payroll, tax and statutory compliance support for employers who would rather run their business than chase deadlines.',
  phone: '+91 8858583815',
  phoneHref: '+918858583815',
  email: 'jyoticomply@gmail.com',
  address: {
    line1: 'New Delhi',
    line2: 'India',
  },
  hours: 'Monday – Saturday, 9:30 AM – 6:30 PM IST',
} as const

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Compliance Solutions', to: '/compliance-solutions' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
] as const
