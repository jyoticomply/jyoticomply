import {
  CalendarClock,
  ClipboardList,
  Rocket,
  FileSpreadsheet,
  FileText,
  BookOpenCheck,
  type LucideIcon,
} from 'lucide-react'

export interface Resource {
  id: string
  title: string
  icon: LucideIcon
  format: string
  description: string
}

const resources: Array<Resource> = [
  {
    id: 'compliance-calendar',
    title: 'Statutory Compliance Calendar',
    icon: CalendarClock,
    format: 'Reference sheet',
    description:
      'Every recurring EPF, ESIC, GST, TDS and professional tax due date in one place, mapped to the month it falls in.',
  },
  {
    id: 'onboarding-checklist',
    title: 'New Employee Onboarding Checklist',
    icon: ClipboardList,
    format: 'Checklist',
    description:
      'The documents, forms and statutory enrolments to complete in an employee’s first week, so nothing gets backfilled later.',
  },
  {
    id: 'payroll-setup',
    title: 'Payroll Setup Checklist for Startups',
    icon: Rocket,
    format: 'Checklist',
    description:
      'What a first-time employer needs before running payroll for the first time — registrations, bank mandates and salary structuring basics.',
  },
  {
    id: 'gst-filing-checklist',
    title: 'GST Filing Checklist',
    icon: FileSpreadsheet,
    format: 'Checklist',
    description:
      'The reconciliation steps we run before every GSTR-1 and GSTR-3B filing, so returns match your books on the first submission.',
  },
  {
    id: 'itr-document-list',
    title: 'ITR Filing Document Checklist',
    icon: FileText,
    format: 'Checklist',
    description:
      'What to gather before income tax filing season — for proprietors, partnerships, companies and individual employees alike.',
  },
  {
    id: 'hr-policy-starter',
    title: 'HR Policy Handbook Starter',
    icon: BookOpenCheck,
    format: 'Guide',
    description:
      'The core policies most growing teams need first — leave, conduct, and appraisal — before a full employee handbook is worth writing.',
  },
]

export default resources
