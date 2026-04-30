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
    expect(screen.getByText(/Let's Build/i)).toBeInTheDocument()
  })

  it('renders accent title', () => {
    renderWithI18n(<Contact />)
    expect(screen.getByText(/Something Together/i)).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    renderWithI18n(<Contact />)
    expect(
      screen.getByText(/always open to interesting conversations/i),
    ).toBeInTheDocument()
  })

  it('renders GitHub link with correct attributes', () => {
    renderWithI18n(<Contact />)
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink.getAttribute('href')).toContain('github.com')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders LinkedIn link with correct attributes', () => {
    renderWithI18n(<Contact />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink.getAttribute('href')).toContain('linkedin.com')
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
    expect(screen.getByText(/Vamos Construir/i)).toBeInTheDocument()
  })
})
