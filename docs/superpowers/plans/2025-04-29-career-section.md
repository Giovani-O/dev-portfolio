# Career & Education Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create Career & Education section with timeline for work experience and education, fully i18n-supported.

**Architecture:** Two-column layout on desktop (lg), single column on mobile. Left column: Work Experience timeline (3 jobs). Right column: Education timeline (2 degrees). Each entry has colored dot, card with role/degree, company/school, period, description, tech stack tags. Timeline with gradient lines.

**Tech Stack:** React, TypeScript, Tailwind CSS, HUGEICON, react-i18next, Vitest

---

## File Structure

- Create: `src/components/career.tsx`
- Create: `src/components/career.test.tsx`
- Create: `locales/en/career.json`
- Create: `locales/pt/career.json`
- Modify: `src/app.tsx` (add Career component)
- Modify: `src/i18n.ts` (register career.json)

---

### Task 1: Create English Locale File

**Files:**
- Create: `locales/en/career.json`

- [ ] **Step 1: Create locales/en/career.json**

```json
{
  "career": {
    "label": "experience",
    "title": "Career & Education",
    "subtitle": "The path that shaped my engineering perspective.",
    "work": {
      "title": "Work Experience",
      "items": [
        {
          "role": "Senior Full-Stack Engineer",
          "company": "Vercel",
          "companyColor": "text-tn-blue",
          "period": "2022 — Present",
          "description": "Leading development of internal tooling and developer experience features. Architected the new deployment pipeline reducing build times by 40%. Mentoring junior engineers.",
          "tech": ["TypeScript", "Next.js", "Go", "AWS"]
        },
        {
          "role": "Full-Stack Developer",
          "company": "Stripe",
          "companyColor": "text-tn-purple",
          "period": "2020 — 2022",
          "description": "Built and maintained payment processing interfaces handling millions of transactions. Designed the API error handling framework adopted across 12 teams.",
          "tech": ["React", "Ruby", "GraphQL", "Kafka"]
        },
        {
          "role": "Software Engineer Intern",
          "company": "GitHub",
          "companyColor": "text-tn-cyan",
          "period": "2019 — 2020",
          "description": "Contributed to the Actions workflow editor. Shipped a syntax validation feature that reduced user error reports by 25%. Wrote comprehensive integration tests.",
          "tech": ["TypeScript", "React", "Jest"]
        }
      ]
    },
    "education": {
      "title": "Education",
      "items": [
        {
          "degree": "M.S. Computer Science",
          "school": "Stanford University",
          "schoolColor": "text-tn-orange",
          "period": "2018 — 2020",
          "description": "Focused on distributed systems and human-computer interaction. Thesis on real-time collaborative editing algorithms. GPA: 3.9/4.0.",
          "tech": []
        },
        {
          "degree": "B.S. Computer Engineering",
          "school": "UC Berkeley",
          "schoolColor": "text-tn-green",
          "period": "2014 — 2018",
          "description": "Focused on computer architecture and software engineering. Capstone project on distributed build systems. GPA: 3.8/4.0.",
          "tech": []
        }
      ]
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add locales/en/career.json
git commit -m "feat: add English career locale file"
```

---

### Task 2: Create Portuguese Locale File

**Files:**
- Create: `locales/pt/career.json`

- [ ] **Step 1: Create locales/pt/career.json**

```json
{
  "career": {
    "label": "experiencia",
    "title": "Carreira e Formação",
    "subtitle": "O caminho que moldou minha perspectiva de engenharia.",
    "work": {
      "title": "Experiência Profissional",
      "items": [
        {
          "role": "Engenheiro Full-Stack Sênior",
          "company": "Vercel",
          "companyColor": "text-tn-blue",
          "period": "2022 — Present",
          "description": "Liderando desenvolvimento de ferramentas internas e funcionalidades de experiência do desenvolvedor. Arquitetou o novo pipeline de deployment reduzindo tempos de build em 40%. Mentorei engenheiros júnior.",
          "tech": ["TypeScript", "Next.js", "Go", "AWS"]
        },
        {
          "role": "Desenvolvedor Full-Stack",
          "company": "Stripe",
          "companyColor": "text-tn-purple",
          "period": "2020 — 2022",
          "description": "Construiu e manteve interfaces de processamento de pagamentos处理ando milhões de transações. Projetou o framework de tratamento de erros adotado por 12 equipes.",
          "tech": ["React", "Ruby", "GraphQL", "Kafka"]
        },
        {
          "role": "Estagiário de Engenharia de Software",
          "company": "GitHub",
          "companyColor": "text-tn-cyan",
          "period": "2019 — 2020",
          "description": "Contribuiu para o editor de workflows do Actions. Entregou uma funcionalidade de validação de sintaxe que reduziu relatórios de erros em 25%. Escreveu testes de integração completos.",
          "tech": ["TypeScript", "React", "Jest"]
        }
      ]
    },
    "education": {
      "title": "Formação Acadêmica",
      "items": [
        {
          "degree": "M.Sc. Ciência da Computação",
          "school": "Stanford University",
          "schoolColor": "text-tn-orange",
          "period": "2018 — 2020",
          "description": "Focado em sistemas distribuídos e interação humano-computador. Tese sobre algoritmos de edição colaborativa em tempo real. CRA: 3.9/4.0.",
          "tech": []
        },
        {
          "degree": "B.S. Engenharia de Computação",
          "school": "UC Berkeley",
          "schoolColor": "text-tn-green",
          "period": "2014 — 2018",
          "description": "Focado em arquitetura de computadores e engenharia de software. Projeto de formatura sobre sistemas de build distribuídos. CRA: 3.8/4.0.",
          "tech": []
        }
      ]
    }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add locales/pt/career.json
git commit -m "feat: add Portuguese career locale file"
```

---

### Task 3: Register Career Locales in i18n

**Files:**
- Modify: `src/i18n.ts`

- [ ] **Step 1: Read i18n.ts to find import pattern**

```typescript
import commonEn from './locales/en/common.json'
```

- [ ] **Step 2: Add career imports and register**

After the existing imports, add:

```typescript
import careerEn from './locales/en/career.json'
import careerPt from './locales/pt/career.json'
```

- [ ] **Step 3: Add career to resources**

In the `resources` object, add:

```typescript
career: { en: { translation: careerEn.career }, pt: { translation: careerPt.career } },
```

- [ ] **Step 4: Commit**

```bash
git add src/i18n.ts
git commit -m "feat: register career locales in i18n"
```

---

### Task 4: Create Career Component Tests

**Files:**
- Create: `src/components/career.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { Career } from '../components/career'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Career', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders section label', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/experience/i)).toBeInTheDocument()
  })

  it('renders section title', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/career & education/i)).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/path that shaped/i)).toBeInTheDocument()
  })

  it('renders work experience title', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/work experience/i)).toBeInTheDocument()
  })

  it('renders education title', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/education/i)).toBeInTheDocument()
  })

  it('renders first job role', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/senior full-stack engineer/i)).toBeInTheDocument()
  })

  it('renders first job company', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/vercel/i)).toBeInTheDocument()
  })

  it('renders first job period', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/2022 — present/i)).toBeInTheDocument()
  })

  it('renders first education degree', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/m\.s\. computer science/i)).toBeInTheDocument()
  })

  it('renders first education school', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/stanford university/i)).toBeInTheDocument()
  })

  it('renders tech stack on first job', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/typescript/i)).toBeInTheDocument()
    expect(screen.getByText(/next\.js/i)).toBeInTheDocument()
  })

  it('has correct section id for navigation', () => {
    renderWithI18n(<Career />)
    const section = document.getElementById('career')
    expect(section).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test src/components/career.test.tsx
```

Expected: FAIL with "Cannot find module '../components/career'"

- [ ] **Step 3: Commit**

```bash
git add src/components/career.test.tsx
git commit -m "test: add Career component test skeleton"
```

---

### Task 5: Create Career Component

**Files:**
- Create: `src/components/career.tsx`

- [ ] **Step 1: Write minimal import to make test pass**

```tsx
import { useTranslation } from 'react-i18next'

export function Career() {
  const { t } = useTranslation()
  return <section id="career">{t('career.label')}</section>
}
```

- [ ] **Step 2: Run test to verify it passes**

```bash
npm test src/components/career.test.tsx
```

Expected: PASS (but failing on actual content checks)

- [ ] **Step 3: Write full Career component**

```tsx
import { BriefcaseIcon, GraduationCapIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

const jobColors = [
  { dotBg: 'bg-tn-blue', borderColor: 'border-tn-blue' },
  { dotBg: 'bg-tn-purple', borderColor: 'border-tn-purple' },
  { dotBg: 'bg-tn-cyan', borderColor: 'border-tn-cyan' },
]

const eduColors = [
  { dotBg: 'bg-tn-orange', borderColor: 'border-tn-orange' },
  { dotBg: 'bg-tn-green', borderColor: 'border-tn-green' },
]

export function Career() {
  const { t } = useTranslation()

  const workData = t('career.work', { returnObjects: true }) as {
    title: string
    items: Array<{
      role: string
      company: string
      companyColor: string
      period: string
      description: string
      tech: string[]
    }>
  }

  const eduData = t('career.education', { returnObjects: true }) as {
    title: string
    items: Array<{
      degree: string
      school: string
      schoolColor: string
      period: string
      description: string
      tech: string[]
    }>
  }

  return (
    <section id="career" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <span className="inline-block text-xs font-mono text-tn-cyan uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-tn-cyan/20 bg-tn-cyan/5">
            &lt;{t('career.label')}&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('career.title')}
          </h2>
          <p className="text-tn-textMuted max-w-lg mx-auto">
            {t('career.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="scroll-reveal flex items-center gap-2 mb-8">
              <HugeiconsIcon
                icon={BriefcaseIcon}
                size={20}
                className="text-tn-blue"
              />
              <h3 className="font-display font-semibold text-lg">
                {workData.title}
              </h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-tn-blue via-tn-purple to-tn-cyan opacity-30" />

              {workData.items.map((job, index) => (
                <div key={index} className="scroll-reveal relative mb-10 last:mb-0">
                  <div
                    className={`absolute -left-8 top-1.5 w-[23px] h-[23px] rounded-full border-2 ${jobColors[index].borderColor} bg-tn-bg flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${jobColors[index].dotBg}`}
                    />
                  </div>
                  <div className="card-hover bg-tn-surface/40 border border-tn-border rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-semibold text-sm">
                          {job.role}
                        </h4>
                        <p className={`${job.companyColor} text-sm font-medium`}>
                          {job.company}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-tn-textMuted px-2 py-0.5 rounded bg-tn-bg/60 border border-tn-border whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-tn-textMuted text-sm leading-relaxed mb-3">
                      {job.description}
                    </p>
                    {job.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((techItem, techIndex) => (
                          <span key={techIndex}>
                            <span className="text-[10px] font-mono text-tn-textDim">
                              {techItem}
                            </span>
                            {techIndex < job.tech.length - 1 && (
                              <span className="text-[10px] text-tn-border"> · </span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="scroll-reveal flex items-center gap-2 mb-8">
              <HugeiconsIcon
                icon={GraduationCapIcon}
                size={20}
                className="text-tn-orange"
              />
              <h3 className="font-display font-semibold text-lg">
                {eduData.title}
              </h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-tn-orange/30 via-tn-green/30 to-tn-teal/30" />

              {eduData.items.map((item, index) => (
                <div key={index} className="scroll-reveal relative mb-10 last:mb-0">
                  <div
                    className={`absolute -left-8 top-1.5 w-[23px] h-[23px] rounded-full border-2 ${eduColors[index].borderColor} bg-tn-bg flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${eduColors[index].dotBg}`}
                    />
                  </div>
                  <div className="card-hover bg-tn-surface/40 border border-tn-border rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-semibold text-sm">
                          {item.degree}
                        </h4>
                        <p className={`${item.schoolColor} text-sm font-medium`}>
                          {item.school}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-tn-textMuted px-2 py-0.5 rounded bg-tn-bg/60 border border-tn-border whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-tn-textMuted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test src/components/career.test.tsx
```

Expected: PASS all tests

- [ ] **Step 5: Commit**

```bash
git add src/components/career.tsx src/components/career.test.tsx
git commit -m "feat: add Career component with timeline"
```

---

### Task 6: Add Career to App

**Files:**
- Modify: `src/app.tsx`

- [ ] **Step 1: Import Career component**

After existing imports, add:

```tsx
import { Career } from './components/career'
```

- [ ] **Step 2: Add Career to App render**

After `<Projects />`, add:

```tsx
<Career />
```

- [ ] **Step 3: Run tests to verify app works**

```bash
npm test
```

Expected: All tests pass

- [ ] **Step 4: Commit**

```bash
git add src/app.tsx
git commit -m "feat: add Career component to App"
```

---

### Task 7: Verify in Browser

**Files:**
- Verify visually

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Navigate to Career section**

Scroll down to verify Career section renders with:
- Section label `&lt;experience&gt;`
- Title and subtitle
- Two-column layout on desktop
- Single column on mobile (resize browser)
- Timeline dots with gradient lines
- All job and education cards

- [ ] **Step 3: Test i18n toggle**

Click language toggle in navbar, verify content switches to Portuguese

---

**Plan complete and saved to `docs/superpowers/plans/YYYY-MM-DD-career-section.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**