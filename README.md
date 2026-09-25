# Personal Portfolio

Shashank Agrawal's personal portfolio — About, Education, Skills, Projects, Certificates and Contact, built as a single-page Next.js site with a light/dark toggle.

**Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4, next-themes.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Project structure

```
src/
  app/                 # layout.tsx, page.tsx, globals.css
  components/
    layout/            # Navbar, Footer, ThemeToggle, ThemeProvider
    sections/          # About, Education, Skills, Projects, Certificates, Contact
    ui/                # ProjectCard, CertificateCard, SkillBadge, TimelineItem, Button, SectionHeading
  data/                # education.ts, skills.ts, projects.ts, certificates.ts, socials.ts — edit these to update content
  hooks/useTypewriter.ts
  lib/utils.ts
public/
  images/profile.webp        # add your real photo here (falls back to a placeholder if missing)
  images/projects/           # project screenshots
  images/certificates/       # certificate images
  resume.pdf                 # add your resume here for the "Download Resume" button
```

## Content still pending

- `public/images/profile.webp` — your real photo (currently a placeholder).
- `public/resume.pdf` — resume file for the download button.
- `public/images/projects/paycore-demo-placeholder.svg` — swap for a real PayCore demo screenshot.
- `public/images/projects/hyperlocal-cover-placeholder.svg` — swap for a real Smart Hyperlocal Commerce Platform screenshot.
- `src/data/certificates.ts` — two certificate titles/issuers are unconfirmed (marked `TODO`); their images in `public/images/certificates/` are placeholders pending the real files.
