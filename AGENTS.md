# AGENTS.md

Project overview for AI agents and developers working on this codebase.

## What This Is

A marketing/brochure website for Jyoti HR & Compliance Solutions (HR, payroll, and statutory compliance
consultancy). No user accounts, no database, no dynamic backend — every page is static content plus one
Netlify Forms submission on `/contact`.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Images | Netlify Image CDN |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
public/
  img/               # logo.png (real company logo) + AI-generated brand textures
  __forms.html       # static skeleton so Netlify detects the "consultation" form at build time
  favicon.ico
src/
  components/
    Header.tsx        # sticky nav, mobile menu, logo
    Footer.tsx         # footer nav, services, contact block
    Section.tsx        # SectionHeading/Eyebrow — shared heading pattern
    ServiceCard.tsx     # service grid card (home)
    CTASection.tsx      # dark consultation CTA band, reused across pages
    FaqAccordion.tsx     # expand/collapse FAQ list
    ContactForm.tsx       # the /contact page's Netlify Forms form
  data/
    site.ts            # company info, nav items
    services.ts         # the 10 core services (title, icon, tagline, description, bullets)
    faqs.ts             # FAQ content
    resources.ts        # resource/checklist cards
    content.ts           # stats, industries, process steps, benefits, team, values
  routes/
    __root.tsx          # document shell: fonts, meta, Header/Footer wrapper
    index.tsx            # home page (all homepage sections)
    about.tsx
    services.tsx          # detail page for all 10 services, deep-linkable via #<service-id>
    compliance-solutions.tsx
    resources.tsx
    contact.tsx            # consultation form + contact details
```

## Conventions

- **Content lives in `src/data/`, not inline in routes.** Adding a service, FAQ, or resource means editing the
  relevant data file — route components just map over the arrays.
- **Colors and fonts are Tailwind v4 `@theme` tokens** defined in `src/styles.css` (`--color-teal-*`,
  `--color-gold*`, `--color-ivory*`, `--font-display`, `--font-body`). Use the generated utilities
  (`bg-teal-900`, `text-gold-dark`, etc.) rather than hardcoding hex values.
- **Images go through Netlify Image CDN**: reference `/.netlify/images?url=/img/<file>&w=<width>&fm=webp`,
  never the raw file path, so nothing ships an unoptimized original.
- **Netlify Forms in TanStack Start requires the static skeleton trick** — see `public/__forms.html`. If you add
  a field to `ContactForm.tsx`, add the matching input to the skeleton file too, or the build won't register it.
- **Founder is referred to as "Jyoti" only** (no surname) — the site's logo and copy are built around the
  company name itself rather than a fabricated full name.

## Roadmap

There is no PLAN.md — this is a complete, single-surface brochure site with no deferred milestones. Future
work would most likely be: wiring the "Request this guide" resource links to an actual document store, or
adding a blog/insights section if the business wants ongoing content marketing.
