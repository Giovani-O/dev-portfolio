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
    expect(screen.getByText(/codeSync/i)).toBeInTheDocument()
    expect(screen.getByText(/featured/i)).toBeInTheDocument()
  })

  it('renders codeSync project description', () => {
    renderWithI18n(<Projects />)
    expect(
      screen.getByText(/real-time collaborative code editor/i),
    ).toBeInTheDocument()
  })

  it('renders codeSync project tech stack', () => {
    renderWithI18n(<Projects />)
    const codeSyncTechs = screen.getAllByText(/^typescript$/i)
    expect(codeSyncTechs.length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^node\.js$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/websocket/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/crdt/i).length).toBeGreaterThan(0)
  })

  it('renders metricsViz project', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/metricsViz/i)).toBeInTheDocument()
  })

  it('renders neuralKit project', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/neuralKit/i)).toBeInTheDocument()
  })

  it('renders StowKit project with Docs link', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/stowKit/i)).toBeInTheDocument()
    expect(screen.getByText(/docs/i)).toBeInTheDocument()
  })

  it('renders GatewayX project', () => {
    renderWithI18n(<Projects />)
    expect(screen.getByText(/gatewayX/i)).toBeInTheDocument()
  })

  it('renders project links', () => {
    renderWithI18n(<Projects />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('has correct section id for navigation', () => {
    renderWithI18n(<Projects />)
    const section = document.getElementById('projects')
    expect(section).toBeInTheDocument()
  })
})