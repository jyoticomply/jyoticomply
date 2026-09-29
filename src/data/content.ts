export interface Stat {
  value: string
  label: string
}

export const stats: Array<Stat> = [
  { value: '14 yrs', label: 'guiding HR & compliance decisions' },
  { value: '230+', label: 'businesses currently on retainer' },
  { value: '1,900+', label: 'statutory filings completed' },
  { value: '96%', label: 'filings submitted ahead of deadline' },
]

export interface Industry {
  name: string
  note: string
}

export const industries: Array<Industry> = [
  { name: 'Manufacturing & Engineering', note: 'Factory Act, wage and PF compliance for shop-floor headcounts' },
  { name: 'IT, ITES & Startups', note: 'Fast-scaling payroll and first-time statutory registrations' },
  { name: 'Retail & Trading', note: 'Multi-location GST filings and seasonal staffing' },
  { name: 'Healthcare & Diagnostics', note: 'ESIC enrolment and shift-based payroll' },
  { name: 'Hospitality & Restaurants', note: 'High-turnover onboarding and minimum wage compliance' },
  { name: 'NGOs & Trusts', note: 'Grant-linked documentation and statutory reporting' },
  { name: 'Educational Institutes', note: 'Faculty payroll structuring and TDS on salaries' },
  { name: 'Logistics & Warehousing', note: 'Multi-state PF/ESIC codes and driver payroll' },
]

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const process: Array<ProcessStep> = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We map your entity type, current headcount, and whatever HR or compliance setup already exists — or doesn’t.',
  },
  {
    step: '02',
    title: 'Compliance Audit',
    description:
      'We check your position against EPF, ESIC, GST, TDS and labour law requirements, and flag gaps in writing.',
  },
  {
    step: '03',
    title: 'Onboarding & Setup',
    description:
      'Missing registrations get filed, payroll gets structured, and documentation gets brought up to date.',
  },
  {
    step: '04',
    title: 'Ongoing Management',
    description:
      'Monthly payroll runs, statutory filings and renewals proceed on a calendar you can see, not one we keep to ourselves.',
  },
  {
    step: '05',
    title: 'Advisory & Growth',
    description:
      'Quarterly reviews keep pace as your team, locations and obligations expand.',
  },
]

export interface Benefit {
  title: string
  description: string
}

export const benefits: Array<Benefit> = [
  {
    title: 'Fewer penalties, less risk',
    description: 'Deadlines tracked against a shared calendar instead of memory.',
  },
  {
    title: 'Hours back every month',
    description: 'Payroll, filings and paperwork off your desk and onto ours.',
  },
  {
    title: 'Salaries that go out on time',
    description: 'Reconciled payslips and disbursals, every cycle, without errors to unwind later.',
  },
  {
    title: 'A consultant, not a call queue',
    description: 'Direct access to the person handling your account — no ticket numbers.',
  },
  {
    title: 'One point of contact',
    description: 'HR, payroll and tax compliance coordinated under a single relationship.',
  },
  {
    title: 'Audit-ready, always',
    description: 'Documentation kept current enough to withstand a funding round or an inspection with no scramble.',
  },
]

export interface TeamMember {
  name: string
  role: string
  note: string
}

export const team: Array<TeamMember> = [
  {
    name: 'Jyoti',
    role: 'Founder & Principal Consultant',
    note: '14 years across manufacturing, IT and retail payrolls before founding the practice in 2012.',
  },
  {
    name: 'Sanika Kulkarni',
    role: 'Payroll & PF Lead',
    note: 'Runs monthly payroll cycles and PF/ESIC filings for over 80 client accounts.',
  },
  {
    name: 'Abhishek Rane',
    role: 'GST & Tax Compliance Lead',
    note: 'Handles GST registrations, returns and ITR filing for proprietors through private companies.',
  },
]

export interface Value {
  title: string
  description: string
}

export const values: Array<Value> = [
  { title: 'Accuracy', description: 'Numbers reconciled before they’re filed, not after a notice arrives.' },
  { title: 'Transparency', description: 'A shared filing calendar and plain-language status updates, not jargon.' },
  { title: 'Responsiveness', description: 'A phone number that reaches an actual consultant, same working day.' },
  { title: 'Confidentiality', description: 'Payroll and employee data handled under strict access controls.' },
]
