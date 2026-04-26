# AGENTS.md

## Core Docs

- `docs/core/PRD.md` — Project requirements and structure
- `docs/core/UBIQUITOUS_LANGUAGE.md` — Domain terminology
- `preview/index.html` — Visual design reference (consult when design details are unclear)

## Architecture

- **SPA**: Plain React with Vite (no routing)
- **i18n**: react-i18next with separate JSON files per section
- **Styling**: Tailwind CSS with Tokyo Night theme

## Locale Structure

```
locales/
├── en/
│   ├── common.json   # UI elements (navbar, buttons)
│   ├── hero.json
│   ├── skills.json
│   ├── projects.json
│   ├── career.json
│   └── contact.json
└── pt/
    └── (same structure)
```

## i18n Behavior

- Default: Detect system language (PT → Portuguese, otherwise → English)
- Toggle: In navbar
- Persistence: localStorage (`lang` key)

## Sections (in order)

1. Navbar (#hero, #skills, #projects, #career, #contact)
2. Hero (badge, name, bio, CTAs, social links, terminal on desktop)
3. Skills (6 category cards: Frontend, Backend, Database, DevOps, Tooling, Practices)
4. Projects (grid with featured project spanning full width)
5. Career & Education (timeline)
6. Contact (LinkedIn + GitHub buttons only)
7. Footer (copyright)

## Contact Requirements

- GitHub + LinkedIn only (no Twitter/X, Dev.to, email)
- Links in Hero + Contact section, no duplicate social links below Contact

## Icons

- Use HUGEICON (https://hugeicons.com/docs/integrations/react/quick-start)

## Testing

- Vitest for unit tests