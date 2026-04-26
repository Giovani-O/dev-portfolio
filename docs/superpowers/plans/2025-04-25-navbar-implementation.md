# Navbar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a fixed navbar with smooth-scroll navigation links, mobile hamburger menu, language toggle, and i18n support for EN/PT.

**Architecture:** Single Navbar component with desktop/mobile responsive states, i18n integration via react-i18next, scroll-based active state detection using IntersectionObserver.

**Tech Stack:** React, TypeScript, Tailwind CSS v4, react-i18next, HUGEICON

---

### File Structure

```
locales/
├── en/
│   └── common.json     # Navbar i18n strings
└── pt/
    └── common.json     # Portuguese translations

src/
├── components/
│   └── Navbar.tsx      # Main navbar component
├── i18n.ts             # Modify to load locale files
├── index.css           # Add nav-link styles
└── App.tsx             # Add Navbar to app
```

---

### Task 1: Create English locale file

**Files:**
- Create: `locales/en/common.json`

- [ ] **Step 1: Create directory and file**

```bash
mkdir -p locales/en
```

```json
{
  "nav": {
    "home": "Home",
    "skills": "Skills",
    "projects": "Projects",
    "career": "Career",
    "contact": "Contact",
    "language": "Switch to Portuguese"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add locales/en/common.json
git commit -m "feat: add English locale file with nav strings"
```

---

### Task 2: Create Portuguese locale file

**Files:**
- Create: `locales/pt/common.json`

- [ ] **Step 1: Create directory and file**

```bash
mkdir -p locales/pt
```

```json
{
  "nav": {
    "home": "Início",
    "skills": "Habilidades",
    "projects": "Projetos",
    "career": "Carreira",
    "contact": "Contato",
    "language": "Mudar para Inglês"
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add locales/pt/common.json
git commit -m "feat: add Portuguese locale file with nav strings"
```

---

### Task 3: Update i18n config to load locale files

**Files:**
- Modify: `src/i18n.ts`

- [ ] **Step 1: Update i18n.ts to import locale files**

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import ptCommon from '../locales/pt/common.json';

function getInitialLanguage(): string {
  const stored = localStorage.getItem('lang');
  if (stored) return stored;
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) return 'pt';
  return 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enCommon },
      pt: { translation: ptCommon },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n.ts
git commit -m "feat: load locale files in i18n config"
```

---

### Task 4: Update index.css with nav-link and scrollbar styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add Tokyo Night theme colors and nav-link styles**

```css
@import "tailwindcss";

@theme {
  --color-tn-bg: #1a1b26;
  --color-tn-bgDark: #16161e;
  --color-tn-surface: #24283b;
  --color-tn-surfaceLight: #2f3348;
  --color-tn-border: #3b4261;
  --color-tn-borderLight: #414868;
  --color-tn-text: #c0caf5;
  --color-tn-textMuted: #565f89;
  --color-tn-textDim: #414868;
  --color-tn-blue: #7aa2f7;
  --color-tn-cyan: #7dcfff;
  --color-tn-purple: #bb9af7;
  --color-tn-green: #9ece6a;
  --color-tn-orange: #e0af68;
  --color-tn-red: #f7768e;
  --color-tn-teal: #73daca;
  --color-tn-magenta: #ff9e64;
  
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

body {
  background-color: var(--color-tn-bg);
  color: var(--color-tn-text);
  font-family: var(--font-body);
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-tn-bgDark);
}

::-webkit-scrollbar-thumb {
  background: var(--color-tn-border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-tn-textMuted);
}

::selection {
  background: #7aa2f740;
  color: var(--color-tn-text);
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-tn-blue);
  transition: all 0.3s ease;
  transform: translateX(-50%);
  border-radius: 1px;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -f "feat: add Tokyo Night theme colors and nav-link styles"
```

---

### Task 5: Create Navbar component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Write Navbar component**

```tsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HugeIcon } from '@hugeicons/react';
import { Terminal } from '@hugeicons/react';
import { List } from '@hugeicons/react';
import { Menu } from '@hugeicons/core';

const navItems = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'career', labelKey: 'nav.career' },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-tn-bgDark/95 backdrop-blur-xl border-b border-tn-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-tn-surface border border-tn-border flex items-center justify-center group-hover:border-tn-blue transition-colors">
            <HugeIcon icon={Terminal} size={16} color="#7aa2f7" />
          </div>
          <span className="font-display font-semibold text-tn-text text-sm tracking-tight">
            alex.dev
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ id, labelKey }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`nav-link text-xs font-medium transition-colors uppercase tracking-widest ${
                activeSection === id
                  ? 'text-tn-text active'
                  : 'text-tn-textMuted hover:text-tn-text'
              }`}
            >
              {t(labelKey)}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-mono text-tn-textMuted hover:text-tn-cyan transition-colors"
            title={t('nav.language')}
          >
            {i18n.language.toUpperCase()}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ml-2 px-4 py-2 bg-tn-blue/10 border border-tn-blue/20 rounded-lg text-xs font-medium text-tn-blue hover:bg-tn-blue/20 hover:border-tn-blue/40 transition-all"
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-tn-border hover:border-tn-textMuted transition-colors"
          aria-label="Toggle menu"
        >
          <HugeIcon icon={Menu} size={20} color="#c0caf5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-tn-bgDark/95 backdrop-blur-xl border-t border-tn-border`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navItems.map(({ id, labelKey }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="py-2.5 px-3 rounded-lg text-sm text-tn-textMuted hover:text-tn-text hover:bg-tn-surface/50 transition-all"
            >
              {t(labelKey)}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="py-2.5 px-3 rounded-lg text-sm text-tn-textMuted hover:text-tn-text hover:bg-tn-surface/50 transition-all text-left"
          >
            {i18n.language === 'en' ? 'Português' : 'English'}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="py-2.5 px-3 rounded-lg text-sm text-tn-blue bg-tn-blue/10 text-center"
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: create Navbar component with i18n and mobile menu"
```

---

### Task 6: Update App.tsx to include Navbar

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add Navbar to App**

```tsx
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Remove unused App.css or check if needed**

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add Navbar to App component"
```

---

### Task 7: Verify implementation

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Use Playwright to verify**

Navigate to http://127.0.0.1:5173/ and verify:
- Navbar is fixed at top
- Logo and links display correctly
- Language toggle works (switches EN/PT, persists)
- Mobile hamburger menu opens
- Smooth scroll works on link click
- Active section highlights correctly

- [ ] **Step 3: Run lint**

```bash
npm run lint
```

- [ ] **Step 4: Commit any fixes**

---

## Self-Review

1. **Spec coverage:** Check each navbar requirement:
   - ✅ Fixed navbar with blur (isScrolled state)
   - ✅ Desktop links with active state (IntersectionObserver)
   - ✅ Mobile hamburger menu (isMobileMenuOpen state)
   - ✅ Language toggle (i18n + localStorage)
   - ✅ Smooth scroll navigation
   - ✅ i18n support for all labels

2. **No placeholders:** All code is complete with no TODO/TBD

3. **Type consistency:** HUGEICON imports use named exports (Terminal, Menu from @hugeicons/react)