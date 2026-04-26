# Project Initialization Implementation Plan

> **For agentic workers:** Use subagent-driven-development or executing-plans to implement this plan task-by-task.

**Goal:** Initialize Vite + React + TypeScript project with Tailwind, react-i18next, and HUGEICON configured

**Architecture:** Empty React SPA with tooling ready — sections built separately later

**Tech Stack:** Vite, React, TypeScript, Tailwind CSS, react-i18next, HUGEICON

---

### Task 1: Initialize Vite + React + TypeScript project

**Files:**
- Create: project root (all Vite scaffolding)

- [ ] **Step 1: Create Vite project**

Run:
```bash
npm create vite@latest . -- --template react-ts
```

- [ ] **Step 2: Install base dependencies**

Run:
```bash
npm install
```

---

### Task 2: Setup Tailwind CSS

**Files:**
- Modify: `package.json`, `tailwind.config.js`, `src/index.css`

- [ ] **Step 1: Install Tailwind**

Run:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 2: Configure Tailwind**

Edit `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokyo: {
          night: {
            bg: '#1a1b26',
            surface: '#24283b',
            border: '#414868',
            text: '#c0caf5',
            accent: '#7aa2f7',
            green: '#9ece6a',
            yellow: '#e0af68',
            red: '#f7768e',
          }
        }
      }
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Add Tailwind directives to CSS**

Edit `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #1a1b26;
  color: #c0caf5;
}
```

---

### Task 3: Setup react-i18next

**Files:**
- Create: `src/i18n.ts`, `locales/`
- Modify: `src/main.tsx`

- [ ] **Step 1: Install react-i18next**

Run:
```bash
npm install i18next react-i18next
```

- [ ] **Step 2: Create i18n configuration**

Create `src/i18n.ts`:
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
      en: { translation: {} },
      pt: { translation: {} },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

- [ ] **Step 3: Import i18n in main**

Edit `src/main.tsx`:
```typescript
import './i18n';
```

---

### Task 4: Install HUGEICON

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install HUGEICON React**

Run:
```bash
npm install @hugeicons/react
```

---

### Task 5: Verify empty shell builds

**Files:**
- All

- [ ] **Step 1: Run typecheck**

Run:
```bash
npm run build
```
Expected: Build succeeds with no errors

- [ ] **Step 2: Start dev server (verify no crash)**

Run:
```bash
npm run dev
```
Expected: Dev server starts on localhost:5173

---

### Task 6: Commit

```bash
git init
git add .
git commit -m "chore: initialize Vite + React + TypeScript with Tailwind and i18n"
```

---

## Notes

- **Empty shell only** — no components, no sections
- **Sections come later** — one by one, each with its own task
- **Tailwind colors** — Tokyo Night theme from preview/index.html
- **i18n ready** — locales structure to be filled in per-section