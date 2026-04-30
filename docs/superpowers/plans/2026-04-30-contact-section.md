# Contact & Footer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Contact section and Footer component per PRD requirements, with i18n support and tests.

**Architecture:** Two standalone React components following existing patterns (skills/career). Contact shows LinkedIn + GitHub social buttons only (per PRD: no email, no schedule, no Twitter/X, no resume). Footer displays copyright. Both integrate into App.tsx.

**Tech Stack:** React, TypeScript, Tailwind CSS (Tokyo Night), react-i18next, Hugeicons, Vitest, Testing Library

---

## File Structure

| File | Responsibility |
|------|---------------|
| `locales/en/contact.json` | English translations for contact section |
| `locales/pt/contact.json` | Portuguese translations for contact section |
| `src/components/contact.tsx` | Contact section component with social links |
| `src/components/contact.test.tsx` | Unit tests for Contact component |
| `src/components/footer.tsx` | Footer component |
| `src/components/footer.test.tsx` | Unit tests for Footer component |
| `src/i18n.ts` | Add contact locale imports and merge |
| `src/app.tsx` | Import and render Contact + Footer |

### File not modified

The `src/index.css` already has the `.card-hover`, `.scroll-reveal` classes needed. No CSS changes required.

---

### Task 1: Create i18n locale files for Contact

**Files:**
- Create: `locales/en/contact.json`
- Create: `locales/pt/contact.json`

- [ ] **Step 1: Create English locale**

Write `locales/en/contact.json`:

```json
{
  "contact": {
    "label": "contact",
    "title": "Let's Build",
    "titleAccent": "Something Together",
    "subtitle": "I'm always open to interesting conversations, new opportunities, and collaborative projects. Drop me a line.",
    "socials": {
      "github": {
        "label": "GitHub",
        "url": "https://github.com/your-username"
      },
      "linkedin": {
        "label": "LinkedIn",
        "url": "https://linkedin.com/in/your-username"
      }
    }
  },
  "footer": {
    "copyright": "Designed & built with care — © 2025",
    "status": "All systems operational"
  }
}
```

- [ ] **Step 2: Create Portuguese locale**

Write `locales/pt/contact.json`:

```json
{
  "contact": {
    "label": "contato",
    "title": "Vamos Construir",
    "titleAccent": "Algo Juntos",
    "subtitle": "Estou sempre aberto a conversas interessantes, novas oportunidades e projetos colaborativos. Entre em contato.",
    "socials": {
      "github": {
        "label": "GitHub",
        "url": "https://github.com/your-username"
      },
      "linkedin": {
        "label": "LinkedIn",
        "url": "https://linkedin.com/in/your-username"
      }
    }
  },
  "footer": {
    "copyright": "Desenvolvido com cuidado — © 2025",
    "status": "Todos os sistemas operacionais"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add locales/en/contact.json locales/pt/contact.json
git commit -m "feat: add contact section i18n locale files"
```

---

### Task 2: Register contact locales in i18n.ts

**Files:**
- Modify: `src/i18n.ts`

- [ ] **Step 1: Add contact locale imports and merge**

Read current `src/i18n.ts`, then add:

```typescript
import enContact from '../locales/en/contact.json'
import ptContact from '../locales/pt/contact.json'
```

And update the resources:

```typescript
resources: {
  en: { translation: { ...enCommon, ...enHero, ...enSkills, ...enProjects, ...enCareer, ...enContact } },
  pt: { translation: { ...ptCommon, ...ptHero, ...ptSkills, ...ptProjects, ...ptCareer, ...ptContact } },
},
```

The full file after modification:

```typescript
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from '../locales/en/common.json'
import enHero from '../locales/en/hero.json'
import enProjects from '../locales/en/projects.json'
import enSkills from '../locales/en/skills.json'
import ptCommon from '../locales/pt/common.json'
import ptHero from '../locales/pt/hero.json'
import ptProjects from '../locales/pt/projects.json'
import ptSkills from '../locales/pt/skills.json'
import enCareer from '../locales/en/career.json'
import ptCareer from '../locales/pt/career.json'
import enContact from '../locales/en/contact.json'
import ptContact from '../locales/pt/contact.json'

function getInitialLanguage(): string {
  const stored = localStorage.getItem('@dev-portfolio-lang')
  if (stored) return stored
  const browserLang = navigator.language
  if (browserLang.startsWith('pt')) return 'pt'
  return 'en'
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { ...enCommon, ...enHero, ...enSkills, ...enProjects, ...enCareer, ...enContact } },
    pt: { translation: { ...ptCommon, ...ptHero, ...ptSkills, ...ptProjects, ...ptCareer, ...ptContact } },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n.ts
git commit -m "feat: register contact locales in i18n config"
```

---

### Task 3: Build Contact Component

**Files:**
- Create: `src/components/contact.tsx`

- [ ] **Step 1: Write the Contact component**

Write `src/components/contact.tsx`:

```typescript
import { Github01Icon, Linkedin01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-tn-blue/3 via-transparent to-transparent pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="scroll-reveal">
          <span className="inline-block text-xs font-mono text-tn-teal uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-tn-teal/20 bg-tn-teal/5">
            &lt;{t('contact.label')}&gt;
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t('contact.title')}
            <br />
            <span className="bg-gradient-to-r from-tn-blue via-tn-purple to-tn-cyan bg-clip-text text-transparent">
              {t('contact.titleAccent')}
            </span>
          </h2>
          <p className="text-tn-textMuted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href={t('contact.socials.github.url')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 text-tn-textMuted hover:text-tn-text transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-tn-surface border border-tn-border flex items-center justify-center group-hover:border-tn-textMuted transition-colors">
                <HugeiconsIcon icon={Github01Icon} size={20} className="text-tn-text" />
              </div>
              <span className="text-[10px] font-mono">{t('contact.socials.github.label')}</span>
            </a>
            <a
              href={t('contact.socials.linkedin.url')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1.5 text-tn-textMuted hover:text-tn-text transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-tn-surface border border-tn-border flex items-center justify-center group-hover:border-tn-textMuted transition-colors">
                <HugeiconsIcon icon={Linkedin01Icon} size={20} className="text-tn-text" />
              </div>
              <span className="text-[10px] font-mono">{t('contact.socials.linkedin.label')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/contact.tsx
git commit -m "feat: add Contact component with GitHub and LinkedIn social links"
```

---

### Task 4: Write Contact Component Tests

**Files:**
- Create: `src/components/contact.test.tsx`

- [ ] **Step 1: Write the test file**

Write `src/components/contact.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { Contact } from '../components/contact'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Contact', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders section label', () => {
    renderWithI18n(<Contact />)
    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })

  it('renders section title', () => {
    renderWithI18n(<Contact />)
    expect(screen.getByText(/let's build/i)).toBeInTheDocument()
  })

  it('renders accent title', () => {
    renderWithI18n(<Contact />)
    expect(screen.getByText(/something together/i)).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    renderWithI18n(<Contact />)
    expect(
      screen.getByText(/always open to interesting conversations/i),
    ).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    renderWithI18n(<Contact />)
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'))
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders LinkedIn link', () => {
    renderWithI18n(<Contact />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has exactly 2 social links', () => {
    renderWithI18n(<Contact />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
  })

  it('has correct section id for navigation', () => {
    renderWithI18n(<Contact />)
    const section = document.getElementById('contact')
    expect(section).toBeInTheDocument()
  })

  it('renders in Portuguese when language is pt', () => {
    i18n.changeLanguage('pt')
    renderWithI18n(<Contact />)
    expect(screen.getByText(/vamos construir/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they pass**

Run: `npm test -- src/components/contact.test.tsx`
Expected: All 9 tests PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/contact.test.tsx
git commit -m "test: add Contact component tests"
```

---

### Task 5: Build Footer Component

**Files:**
- Create: `src/components/footer.tsx`

- [ ] **Step 1: Write the Footer component**

Write `src/components/footer.tsx`:

```typescript
import { TerminalIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-tn-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-tn-surface border border-tn-border flex items-center justify-center">
            <HugeiconsIcon icon={TerminalIcon} size={14} className="text-tn-blue" />
          </div>
          <span className="font-display text-sm font-medium text-tn-textMuted">
            {t('footer.copyright')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-tn-textDim">
          <span className="w-2 h-2 rounded-full bg-tn-green" />
          {t('footer.status')}
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/footer.tsx
git commit -m "feat: add Footer component"
```

---

### Task 6: Write Footer Component Tests

**Files:**
- Create: `src/components/footer.test.tsx`

- [ ] **Step 1: Write the test file**

Write `src/components/footer.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { Footer } from '../components/footer'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Footer', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders copyright text', () => {
    renderWithI18n(<Footer />)
    expect(screen.getByText(/designed & built with care/i)).toBeInTheDocument()
  })

  it('renders status indicator', () => {
    renderWithI18n(<Footer />)
    expect(screen.getByText(/all systems operational/i)).toBeInTheDocument()
  })

  it('renders in Portuguese when language is pt', () => {
    i18n.changeLanguage('pt')
    renderWithI18n(<Footer />)
    expect(screen.getByText(/desenvolvido com cuidado/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to verify they pass**

Run: `npm test -- src/components/footer.test.tsx`
Expected: All 3 tests PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/footer.test.tsx
git commit -m "test: add Footer component tests"
```

---

### Task 7: Integrate Contact and Footer into App

**Files:**
- Modify: `src/app.tsx`

- [ ] **Step 1: Add Contact and Footer to App**

Read current `src/app.tsx`, then replace with:

```typescript
import './app.css'
import { Hero } from './components/hero'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { Career } from './components/career'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Career />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
```

- [ ] **Step 2: Run all tests**

Run: `npm test`
Expected: All tests PASS (existing + new)

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: No errors

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add src/app.tsx
git commit -m "feat: integrate Contact and Footer into App"
```

---

## PRD Coverage Checklist

| Requirement | Task | Status |
|-------------|------|--------|
| Contact section with LinkedIn + GitHub buttons | Task 3 | Covered |
| Footer with copyright | Task 5 | Covered |
| i18n support (EN/PT) | Tasks 1, 2 | Covered |
| Only GitHub + LinkedIn (no other socials) | Task 3 (exactly 2 links) | Covered |
| Vitest unit tests | Tasks 4, 6 | Covered |
| Mobile-responsive | Component uses responsive Tailwind classes | Covered |
| Section id="contact" for nav | Task 3 | Covered |
| Tokyo Night theme | Uses existing tn-* color classes | Covered |

## Self-Review

1. **Spec coverage:** All PRD requirements for contact section and footer are covered by tasks.
2. **Placeholder scan:** No TBDs, no TODOs, all code blocks contain actual content.
3. **Type consistency:** Uses `useTranslation()` pattern matching skills/career. Uses Hugeicons pattern matching other components. Test setup uses same `renderWithI18n` helper pattern as skills.test.tsx. i18n imports follow existing structure.
