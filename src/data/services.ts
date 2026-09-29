import {
  Users,
  Wallet,
  ShieldCheck,
  HeartPulse,
  Receipt,
  FileSpreadsheet,
  FileCheck2,
  Scale,
  FolderCheck,
  Compass,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  icon: LucideIcon
  tagline: string
  description: string
  bullets: Array<string>
}

const services: Array<Service> = [
  {
    id: 'hr-consultancy',
    title: 'HR Consultancy & HR Management',
    icon: Users,
    tagline: 'Structure and people practices built around how your business actually runs.',
    description:
      'From offer letters to appraisal cycles, we help you set up HR systems that scale with your headcount instead of slowing it down — policies, role structures, and the day-to-day people processes that keep a growing team organised.',
    bullets: [
      'HR policy design & employee handbooks',
      'Recruitment support & structured onboarding',
      'Performance appraisal frameworks',
      'Exit formalities & full-and-final settlements',
    ],
  },
  {
    id: 'payroll-management',
    title: 'Payroll Management',
    icon: Wallet,
    tagline: 'Accurate salary runs, every cycle, without the last-minute scramble.',
    description:
      'We run your payroll end to end — structuring CTCs, tracking attendance and leave, and closing every cycle with payslips and disbursals that reconcile cleanly against your books.',
    bullets: [
      'Monthly payroll processing & digital payslips',
      'Salary structuring & CTC design',
      'Leave, attendance & reimbursement tracking',
      'Payroll audits & bank reconciliation',
    ],
  },
  {
    id: 'epf-compliance',
    title: 'EPF / PF Compliance & Support',
    icon: ShieldCheck,
    tagline: 'Provident fund registrations, contributions and filings, handled end to end.',
    description:
      'Provident fund compliance rarely fails because of malice — it fails because of missed dates and mismatched data. We keep your PF filings current and your employees’ accounts in order.',
    bullets: [
      'PF registration for new establishments',
      'Monthly ECR filing & challan payment',
      'UAN generation & KYC updates',
      'PF withdrawal & transfer assistance',
    ],
  },
  {
    id: 'esic-compliance',
    title: 'ESIC Compliance & Support',
    icon: HeartPulse,
    tagline: 'Employee state insurance compliance, without the paperwork headaches.',
    description:
      'We handle ESIC code allotment, enrolment and monthly contributions so your workforce stays covered and your establishment stays inspection-ready.',
    bullets: [
      'ESIC registration & code allotment',
      'Monthly contribution filing',
      'Employee enrolment & e-card issuance',
      'Inspection & audit support',
    ],
  },
  {
    id: 'salary-tds',
    title: 'Salary & TDS Support',
    icon: Receipt,
    tagline: 'Tax deducted at source, calculated correctly and deposited on time.',
    description:
      'We compute TDS on salaries against the regime each employee actually elects, prepare Form 16 without last-quarter panic, and keep quarterly returns filed on schedule.',
    bullets: [
      'TDS computation on salaries',
      'Form 16 & 24Q preparation',
      'Quarterly TDS return filing',
      'Advance tax planning for employees',
    ],
  },
  {
    id: 'gst-support',
    title: 'GST Registration & GST Filing Support',
    icon: FileSpreadsheet,
    tagline: 'From first registration to monthly returns, GST handled without surprises.',
    description:
      'Whether you’re registering a new entity or catching up on backlogged returns, we reconcile input tax credit and file GSTR-1, GSTR-3B and annual returns against a calendar you can actually see.',
    bullets: [
      'New GST registration',
      'GSTR-1, GSTR-3B & annual returns',
      'Input tax credit reconciliation',
      'Notice & query resolution',
    ],
  },
  {
    id: 'itr-filing',
    title: 'ITR Filing Support',
    icon: FileCheck2,
    tagline: 'Income tax returns filed accurately, for the business and its people.',
    description:
      'We file income tax returns for proprietors, partnerships and companies, extend the same support to employees who need it, and reconcile everything against Form 26AS and the AIS before we sign off.',
    bullets: [
      'ITR filing for proprietors, firms & companies',
      'Employee ITR filing support',
      'Tax computation & advisory',
      'Form 26AS & AIS reconciliation',
    ],
  },
  {
    id: 'tax-business-compliance',
    title: 'Tax & Business Compliance',
    icon: Scale,
    tagline: 'The recurring filings and registrations that keep a business in good standing.',
    description:
      'Professional tax, the Shops & Establishments Act, minimum wage compliance, statutory registers — the obligations that rarely get attention until they’re overdue. We track and file them before that happens.',
    bullets: [
      'Professional tax registration & returns',
      'Labour law compliance (Shops Act, Minimum Wages)',
      'Statutory registers & records',
      'Compliance calendars & renewal reminders',
    ],
  },
  {
    id: 'employee-documentation',
    title: 'Employee Documentation & Compliance Support',
    icon: FolderCheck,
    tagline: 'Appointment letters, registers and records maintained the way an audit expects.',
    description:
      'We build and maintain the documentation trail inspectors and auditors actually ask for — appointment letters, statutory registers, and employee files that hold up under scrutiny.',
    bullets: [
      'Appointment & confirmation letters',
      'Statutory registers (attendance, wages, leave)',
      'Employee file audits',
      'Policy acknowledgements & documentation trails',
    ],
  },
  {
    id: 'business-advisory',
    title: 'Business Compliance & Advisory Support',
    icon: Compass,
    tagline: 'Ongoing advisory so compliance decisions get made before they become problems.',
    description:
      'Beyond filings, we act as a standing advisory line for compliance questions — new entity structuring, expansion into a new state, or simply a second opinion before a decision is final.',
    bullets: [
      'Quarterly compliance health checks',
      'New entity setup guidance',
      'Statutory deadline tracking',
      'Direct advisory access to our consultants',
    ],
  },
]

export default services
