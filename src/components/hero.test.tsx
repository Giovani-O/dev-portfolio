import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it, beforeEach } from 'vitest'
import { Hero } from '../components/hero'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Hero', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders availability badge', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByText(/available for work/i)).toBeInTheDocument()
  })

  it('renders developer name', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByText(/giovani de oliveira/i)).toBeInTheDocument()
  })

  it('renders bio/description', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByText(/full-stack developer/i)).toBeInTheDocument()
  })

  it('renders View Projects CTA button', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument()
  })

  it('renders Get in Touch CTA button', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders GitHub social link', () => {
    renderWithI18n(<Hero />)
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github'))
  })

  it('renders LinkedIn social link', () => {
    renderWithI18n(<Hero />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin'))
  })

  it('renders terminal component on desktop', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByText(/whoami/i)).toBeInTheDocument()
    expect(screen.getByText(/cat skills\.json/i)).toBeInTheDocument()
  })

  it('renders scroll indicator', () => {
    renderWithI18n(<Hero />)
    expect(screen.getByText(/scroll/i)).toBeInTheDocument()
  })
})