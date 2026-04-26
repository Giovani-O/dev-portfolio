# Ubiquitous Language

## Portfolio Sections

| Term                 | Definition                                                                      | Aliases to avoid           |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------ |
| **Hero**             | Top section with name, bio, CTAs, social links, and terminal                         | Homepage, header           |
| **Skills**           | Section showing categorized technical skills as cards                              | Tech stack, expertise     |
| **Projects**         | Section displaying portfolio projects with images and descriptions                  | Work, portfolio items    |
| **Career & Education** | Section with timeline of professional experience and education                  | Experience, background |
| **Contact**         | Section with social links for getting in touch                                   | Footer, social          |
| **Navbar**          | Fixed top navigation bar with links and language toggle                          | Navigation, menu        |
| **Footer**          | Bottom section with copyright                                                      | —                       |

## Internationalization (i18n)

| Term            | Definition                                                              | Aliases to avoid          |
| -------------- | ---------------------------------------------------------------------- | ----------------------- |
| **Locale**      | Language and region (e.g., "en", "pt")                                    | language, lang          |
| **Translation** | Text content displayed to users                                           | string, text, copy      |
| **Toggle**      | UI element to switch between English and Portuguese                         | switch, button          |
| **System default** | Language detected from user's browser/OS                             | browser language, OS lang |

## UI Components

| Term          | Definition                                                              | Aliases to avoid         |
| ------------- | ---------------------------------------------------------------------- | --------------------- |
| **Skill card** | Card displaying a skill category with icon, title, and tag pills       | Category card, chip    |
| **Project card** | Card showing a project with image, description, tech stack, and links  | Projecttile, item      |
| **Timeline**    | Vertical layout connecting Career & Education items                        | —                      |
| **Terminal**    | Decorative terminal component showing simulated command output               | Console, shell         |
| **Badge**       | Small label/tag (e.g., "Available for work", "Featured")               | label, tag, pill       |
| **Pill**        | Small rounded tag showing a technology name                            | chip, tag, badge      |

## Technical Stack

| Term        | Definition                                   | Aliases to avoid      |
| ----------- | ------------------------------------------- | --------------------- |
| **SPA**     | Single Page Application (no page reloads)   | single-page app       |
| **Vite**    | Build tool for React projects                | —                     |
| **HUGEICON**| Icon library used for this project          | Huge Icons, hugeicons  |

## Navigation

| Term           | Definition                                                           | Aliases to avoid        |
| -------------- | ------------------------------------------------------------------ | ---------------------- |
| **Anchor link** | Link that scrolls to a section (e.g., `#skills`)                 | jump link, scroll link  |
| **Mobile menu**|Collapsible hamburger menu for mobile devices                         | hamburger, drawer      |

## Flagged ambiguities

- **"header"** was used for both the top navigation and the hero section headline — these are distinct: **Navbar** is the fixed top bar, **Hero** is the main landing section.
- **"section"** was used generically for both content areas and CSS `<section>` elements — in this project, every content area (Skills, Projects, Career) is a **Section** with a specific name.
- **"card"** was used for both skill categories and projects — these are visually similar but have different structures: **Skill cards** show categories/tags, **Project cards** show work samples with images.

## Example dialogue

> **Dev:** "Should the language **toggle** go in the **navbar** or **footer**?"

> **Domain expert:** "In the **navbar** — that's where users expect to find language settings. The **footer** is only for copyright."

> **Dev:** "And the terminal component goes in the **Hero** section?"

> **Domain expert:** "Yes, positioned on the right side on desktop. It's purely decorative — just adds visual interest. The data comes from the **locale** files."

> **Dev:** "Got it. So **Career & Education** is one **section** with a **timeline**?"

> **Domain expert:** "Exactly. One timeline, alternating between work experience and education. The **skill cards** are separate — one for each category like Frontend, Backend, etc."