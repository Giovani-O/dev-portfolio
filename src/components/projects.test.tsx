import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Projects } from '../components/projects'
import i18n from '../i18n'

class MockIntersectionObserver {
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Projects', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders section label', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/<projects>/i)).toBeInTheDocument()
  })

  it('renders section title', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/personal projects/i)).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    renderWithI18n(<Projects />)
    expect(
      screen.getByText(/selected works that showcase my approach/i),
    ).toBeInTheDocument()
  })

  it('renders featured project', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/clerk webhook/i)).toBeInTheDocument()
    expect(screen.getByText(/featured/i)).toBeInTheDocument()
  })

  it('renders clerk webhook description', () => {
    renderWithI18n(<Projects />)
    expect(
      screen.getByText(/experiment with webhooks/i),
    ).toBeInTheDocument()
  })

  it('renders clerk webhook tech stack', () => {
    renderWithI18n(<Projects />)
    expect(screen.getAllByText(/^webhooks$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^clerk$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^node\.js$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^fastify$/i).length).toBeGreaterThan(0)
  })

  it('renders other projects', () => {
    renderWithI18n(<Projects />)
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0)
  })

  it('has correct section id for navigation', () => {
    renderWithI18n(<Projects />)
    const section = document.getElementById('projects')
    expect(section).toBeInTheDocument()
  })
})