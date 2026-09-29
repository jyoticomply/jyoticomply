export interface Faq {
  question: string
  answer: string
}

const faqs: Array<Faq> = [
  {
    question: 'We don’t have any HR setup yet — can you still help?',
    answer:
      'Yes. Most of our clients come to us before they have formal HR in place. We start with a compliance audit, register whatever is missing (PF, ESIC, professional tax), and build policies and payroll structure from there.',
  },
  {
    question: 'Can you manage payroll for a team of any size?',
    answer:
      'We work with teams from 4 employees to a few hundred. The process is the same — attendance and leave data in, reconciled payslips and statutory filings out — just scaled to your headcount and pay cycle.',
  },
  {
    question: 'What happens if we’re served a compliance notice or inspection?',
    answer:
      'We represent the documentation side of an EPF, ESIC or GST notice directly — preparing the response, reconciling the records an inspector asks for, and attending where our presence is useful.',
  },
  {
    question: 'Do you handle both HR-side and tax-side compliance, or just one?',
    answer:
      'Both, by design. HR, payroll, PF/ESIC and tax filings are interconnected — a change in salary structure affects TDS and PF contributions in the same cycle, so we keep them under one consultant relationship rather than split across vendors.',
  },
  {
    question: 'How do you charge for your services?',
    answer:
      'Retainers are scoped to headcount and the services you need — most clients are on a monthly retainer covering payroll plus statutory filings, with one-off registrations and advisory billed separately. We quote this after the first consultation.',
  },
  {
    question: 'Can you take over compliance from our previous consultant mid-year?',
    answer:
      'Yes — this is a common starting point. We run a transition audit first to reconcile what’s already been filed for the year, flag any gaps, and take over from the next filing cycle without a break in continuity.',
  },
]

export default faqs
