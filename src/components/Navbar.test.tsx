import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from '../components/Navbar'
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

describe('Navbar', () => {
  beforeEach(async () => {
    document.body.innerHTML =
      '<div id="hero"></div><div id="skills"></div><div id="projects"></div><div id="career"></div><div id="contact"></div>'
    i18n.changeLanguage('en')
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders navbar with logo', () => {
    renderWithI18n(<Navbar />)
    expect(screen.getByText('giovani.oliveira')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    renderWithI18n(<Navbar />)
    const links = screen.getAllByRole('link', { name: /home/i })
    expect(
      links.filter((link) => link.classList.contains('nav-link')),
    ).toHaveLength(1)
  })

  it('renders contact link', () => {
    renderWithI18n(<Navbar />)
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBe(2)
  })

  it('renders language toggle button', () => {
    renderWithI18n(<Navbar />)
    const buttons = screen.getAllByRole('button', { name: /en/i })
    expect(buttons[0]).toHaveAttribute('title', 'Switch to Portuguese')
  })

  it('toggles language on button click', async () => {
    renderWithI18n(<Navbar />)
    const langBtn = screen.getAllByRole('button', { name: /en/i })[0]

    fireEvent.click(langBtn)

    await waitFor(() => {
      expect(
        screen.getAllByRole('button', { name: /pt/i })[0],
      ).toBeInTheDocument()
    })
  })

  it('renders mobile menu button', () => {
    renderWithI18n(<Navbar />)
    expect(
      screen.getByRole('button', { name: /toggle menu/i }),
    ).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    renderWithI18n(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /toggle menu/i })

    fireEvent.click(menuBtn)

    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    expect(mobileLinks.length).toBe(2)
  })

  it('shows different language label in mobile menu', async () => {
    renderWithI18n(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /toggle menu/i })

    fireEvent.click(menuBtn)

    const mobileLangBtns = screen.getAllByRole('button', { name: /português/i })
    expect(mobileLangBtns[0]).toBeInTheDocument()
  })
})
