# Developer Portfolio - PRD

## Problem Statement

As a developer, I want a personal portfolio website that showcases my skills, projects, career history, and education in a visually appealing Tokyo Night-themed design, available in both Portuguese and English.

## Solution

A React SPA built with Vite, TypeScript, and Tailwind CSS featuring:
- Hero section with terminal component
- Skills section with categorized cards
- Personal projects section with featured project
- Career & Education timeline
- Contact section with social links
- Full i18n support (EN/PT)
- Mobile-responsive design

## Tech Stack

- **Build**: Vite
- **Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Tokyo Night theme)
- **Icons**: HUGEICON
- **i18n**: react-i18next
- **Testing**: Vitest

## User Stories

### Navigation
1. As a visitor, I want to see a fixed navbar, so that I can navigate to any section
2. As a visitor, I want a mobile hamburger menu, so that I can navigate on mobile devices
3. As a visitor, I want to switch languages, so that I can view content in my preferred language

### Hero Section
4. As a visitor, I want to see the developer's name and headline, so that I know who they are
5. As a visitor, I want to see a brief bio/description, so that I understand their focus
6. As a visitor, I want to see CTA buttons to projects and contact, so that I can take action
7. As a visitor, I want to see social links (GitHub, LinkedIn), so that I can connect
8. As a visitor on desktop, I want to see a terminal component with skills, so that it adds visual interest

### Skills Section
9. As a visitor, I want to see skills organized by category (Frontend, Backend, Database, DevOps, Tooling, Practices), so that I can quickly understand technical expertise
10. As a visitor, I want to see skill tags/pills, so that I can identify specific technologies

### Personal Projects Section
11. As a visitor, I want to see a grid of projects, so that I can browse work samples
12. As a visitor, I want to see project details (title, description, tech stack, links), so that I can understand each project
13. As a visitor, I want to see a featured project that spans full width, so that the most important work stands out

### Career & Education
14. As a visitor, I want to see a timeline of career history, so that I can understand professional experience
15. As a visitor, I want to see education background, so that I can understand academic background
16. As a visitor, I want to see role/degree details and periods, so that I get complete information

### Contact
17. As a visitor, I want to see contact buttons (LinkedIn, GitHub), so that I can connect on social platforms
18. As a visitor, I want to see a footer with copyright, so that I know the site ownership

### Internationalization
19. As a Brazilian or Portuguese user, I want content displayed in Portuguese by default if system is PT, so that I understand the content
20. As a user, I want language preference remembered, so that I don't have to toggle every visit

## Implementation Decisions

### Structure
- SPA (no routing needed)
- Component-first approach, refactor later if needed
- Separate JSON files per section for i18n:
  - `locales/{lang}/common.json` (UI elements)
  - `locales/{lang}/hero.json`
  - `locales/{lang}/skills.json`
  - `locales/{lang}/projects.json`
  - `locales/{lang}/career.json`
  - `locales/{lang}/contact.json`

### i18n Behavior
- Default: Detect system language (PT → Portuguese, otherwise → English)
- Toggle in navbar
- Persist selection in localStorage

### Styling
- Tokyo Night color scheme from preview (exact values)
- Tailwind theme configuration
- Native CSS smooth scroll

### Sections (in order)
1. Navbar
2. Hero (with terminal on desktop)
3. Skills
4. Projects
5. Career & Education
6. Contact
7. Footer

### Contact Buttons
- Replace email/schedule call with LinkedIn + GitHub buttons
- No duplicate social links below

### Testing
- Vitest for unit tests
- Test components in isolation

## Out of Scope

- Contact form (email service integration)
- Blog integration
- CMS/content management
- Analytics
- Real project images (use placeholders initially)
- More than 2 social links (GitHub, LinkedIn only)

## Further Notes

- `preview/index.html` is the visual design reference. The agent should consult it when needing to understand the design details (colors, spacing, animations, component structure). If needed, serve the HTML file and visualize it with Playwright MCP to inspect elements.
- Data content will be created incrementally step-by-step
- Terminal component was in preview but may not render on some screens - will debug during build
- No Twitter/X or Dev.to links (removed from original preview)
