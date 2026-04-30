import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { Footer } from '../components/footer'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Footer', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders copyright text', () => {
    renderWithI18n(<Footer />)
    expect(screen.getByText(/Designed & built with care/i)).toBeInTheDocument()
  })

  it('renders status indicator', () => {
    renderWithI18n(<Footer />)
    expect(screen.getByText(/All systems operational/i)).toBeInTheDocument()
  })

  it('renders in Portuguese when language is pt', () => {
    i18n.changeLanguage('pt')
    renderWithI18n(<Footer />)
    expect(screen.getByText(/Desenvolvido com cuidado/i)).toBeInTheDocument()
  })
})
