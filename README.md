# Tawatchai — Luxury Retail & Learning Development Portfolio

A luxury-editorial portfolio for a retail professional (15+ years high-end retail, 10 years
CHANEL) transitioning into Retail Training and Learning & Development. Built with mock data
only — no CMS or database is connected yet.

## 1. Project folder structure

```
portfolio/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── public/images/            # AI-generated bespoke editorial imagery
└── src/
    ├── app/
    │   ├── layout.tsx        # fonts, metadata, smooth scroll, chrome
    │   ├── page.tsx          # Home
    │   ├── globals.css       # design tokens, grain, marquee, motion CSS
    │   ├── icon.svg          # original SVG favicon mark
    │   ├── about/page.tsx
    │   ├── projects/page.tsx
    │   ├── projects/[slug]/page.tsx
    │   ├── contact/page.tsx
    │   ├── not-found.tsx
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── layout/           # header, footer, smooth-scroll (lenis), reveal (motion)
    │   ├── hero/             # kinetic masked-reveal hero
    │   ├── sections/         # highlights, marquee, featured, competencies, contact CTA
    │   ├── project-card/
    │   ├── project-grid/     # filtering + search + empty state
    │   └── ui/               # arrow button, tags/badges, headings, type note
    ├── data/                 # mock data (separate from UI)
    │   ├── profile.ts
    │   └── projects.ts
    ├── lib/                  # queries and utils
    └── types/                # project.ts, profile.ts
```

## 2. Technology stack

- Next.js 15 (App Router, static generation) · TypeScript (strict) · Tailwind CSS
- framer-motion (reveals, parallax, micro-interactions) · lenis (momentum scrolling)
- lucide-react (icons) · next/font (Cormorant Garamond / Manrope / JetBrains Mono)
- Mock data only — Notion CMS / Supabase deliberately not connected. No secrets in client code.

## 3. Pages

- `/` — hero, professional highlights, marquee, featured projects, competencies bento, contact CTA
- `/about` — summary, career journey, employment history, responsibilities, skills, education
- `/projects` — featured case study, category filtering, search, responsive grid, empty state
- `/projects/[slug]` — case study (context, objective, role, approach, outcomes, skills, related)
- `/contact` — placeholder email/LinkedIn cards, CTA

## 4. Features

- Kinetic hero: masked line-by-line reveal, subtle parallax, status pill
- Lenis smooth scrolling, grain overlay, slow editorial ribbon marquee
- Project filtering with counts, search, animated grid, proper empty state
- Project records typed per the brief; only `publicationStatus === "Published"` renders
  (Draft / Needs Review / Private records are included as test data and correctly 404)
- Project types clearly labelled: Historical Experience · Portfolio Demonstration ·
  Proposed Framework — each detail page carries an explanatory credibility note
- SEO: per-page metadata, Open Graph, sitemap.xml, robots.txt; semantic HTML, alt text,
  skip link, keyboard-visible focus, reduced-motion support
- Mobile-first responsive at 390 / 768 / 1440+

## 5. Known limitations

- Contact email, LinkedIn, location, some role titles and all dates are **placeholders**,
  marked in `[brackets]` and with Placeholder chips, awaiting final verification
- No invented metrics: outcomes are qualitative by design
- Imagery is AI-generated editorial placeholder art
- Notion CMS integration is not wired yet; swapping `src/data/*` for CMS calls requires no UI changes

## 6. Run

```bash
cd portfolio
yarn install
yarn dev        # http://localhost:3000
yarn build && yarn start   # production
```

Deploy on Vercel: import the repo, framework auto-detected, no env vars required
(optionally set `NEXT_PUBLIC_SITE_URL` to the production URL for absolute OG/sitemap URLs).
