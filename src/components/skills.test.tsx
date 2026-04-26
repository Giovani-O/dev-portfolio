import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { Skills } from '../components/skills'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Skills', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders section label', () => {
    renderWithI18n(<Skills />)
    expect(screen.getByText(/skills/i)).toBeInTheDocument()
  })

  it('renders section title', () => {
    renderWithI18n(<Skills />)
    expect(screen.getByText(/technical arsenal/i)).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    renderWithI18n(<Skills />)
    expect(
      screen.getByText(/tools and technologies i work with daily/i),
    ).toBeInTheDocument()
  })

  it('renders all 6 category cards', () => {
    renderWithI18n(<Skills />)
    expect(screen.getByText(/frontend/i)).toBeInTheDocument()
    expect(screen.getByText(/backend/i)).toBeInTheDocument()
    expect(screen.getByText(/database/i)).toBeInTheDocument()
    expect(screen.getByText(/devops/i)).toBeInTheDocument()
    expect(screen.getByText(/tooling/i)).toBeInTheDocument()
    expect(screen.getByText(/practices/i)).toBeInTheDocument()
  })

  it('renders React in frontend skills', () => {
    renderWithI18n(<Skills />)
    const reactElements = screen.getAllByText(/^react$/i)
    expect(reactElements).toHaveLength(1)
  })

  it('renders Next.js in frontend skills', () => {
    renderWithI18n(<Skills />)
    expect(screen.getByText(/next\.js/i)).toBeInTheDocument()
  })

  it('renders TypeScript skills', () => {
    renderWithI18n(<Skills />)
    const typescriptElements = screen.getAllByText(/typescript/i)
    expect(typescriptElements).toHaveLength(2)
  })

  it('renders backend skills', () => {
    renderWithI18n(<Skills />)
    expect(screen.getByText(/node\.js/i)).toBeInTheDocument()
    expect(screen.getByText(/fastify/i)).toBeInTheDocument()
    expect(screen.getByText(/nestjs/i)).toBeInTheDocument()
  })

  it('renders database skills', () => {
    renderWithI18n(<Skills />)
    expect(screen.getByText(/postgresql/i)).toBeInTheDocument()
    expect(screen.getByText(/mongodb/i)).toBeInTheDocument()
  })

  it('has correct section id for navigation', () => {
    renderWithI18n(<Skills />)
    const section = document.getElementById('skills')
    expect(section).toBeInTheDocument()
  })
})