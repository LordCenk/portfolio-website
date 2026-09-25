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
  images/profile.webp        # your real photo
  images/projects/           # project screenshots
  images/certificates/       # certificate images
  resume.pdf                 # resume file for the "Download Resume" button
```
