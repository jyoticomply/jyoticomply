# Jyoti HR & Compliance Solutions

A corporate marketing website for Jyoti HR & Compliance Solutions, an HR, payroll, and statutory compliance
consultancy serving employers across India. The site introduces the practice, its ten core services, a deep dive
into statutory compliance (EPF, ESIC, GST, TDS, ITR), downloadable-on-request resources, and a consultation
request form.

## Pages

- **Home** (`/`) — hero, services overview, why-choose-us, compliance support, industries served, process, FAQ, and a consultation CTA.
- **About Us** (`/about`) — company story, values, team, and headline stats.
- **Services** (`/services`) — full detail on all ten core services.
- **Compliance Solutions** (`/compliance-solutions`) — the statutory-filing side of the business (EPF, ESIC, GST, TDS, ITR, tax & business compliance) with a filing calendar.
- **Resources** (`/resources`) — checklists and guides available on request.
- **Contact** (`/contact`) — consultation request form plus direct contact details.

## Tech Stack

- **Framework:** TanStack Start (React 19, file-based routing via TanStack Router)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens in `src/styles.css`)
- **Icons:** lucide-react
- **Forms:** Netlify Forms (AJAX submission, static skeleton for build-time detection)
- **Images:** Netlify Image CDN, serving AI-generated brand textures and the company logo
- **Deployment:** Netlify

## Brand

- **Tagline:** "Your Compliance Partner for a Better Tomorrow"
- **Brand message:** Partner · Comply · Grow
- **Palette:** deep teal, ivory, and muted gold — matching the company's own logo (`public/img/logo.png`)
- **Type:** Fraunces (display) paired with Manrope (body)

Three background/texture images (`public/img/hero-pattern.png`, `about-graphic.png`, `cta-texture.png`) were
generated to match the brand palette; the company's own logo is used in the header and footer.

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs through Vite. For full Netlify feature emulation (forms, image CDN), use:

```bash
netlify dev
```

## Forms

The consultation form on `/contact` submits to Netlify Forms (`consultation`). A static skeleton at
`public/__forms.html` registers the form fields at build time — see the `netlify-forms-tanstack` skill notes
in `.agents/skills` if the form needs new fields. Form submissions only work on a deployed site, not local dev.

## Content

Static site content lives in `src/data/` (`services.ts`, `faqs.ts`, `resources.ts`, `content.ts`, `site.ts`) so
copy changes don't require touching route components.
