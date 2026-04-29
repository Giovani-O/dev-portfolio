import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { beforeEach, describe, expect, it } from 'vitest'
import { Career } from '../components/career'
import i18n from '../i18n'

function renderWithI18n(ui: React.ReactElement) {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>)
}

describe('Career', () => {
  beforeEach(() => {
    i18n.changeLanguage('en')
  })

  it('renders section label', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText('<experience>')).toBeInTheDocument()
  })

  it('renders section title', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/career & education/i)).toBeInTheDocument()
  })

  it('renders section subtitle', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/path that shaped/i)).toBeInTheDocument()
  })

  it('renders work experience title', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/work experience/i)).toBeInTheDocument()
  })

  it('renders education title', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders first job role', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/senior full-stack engineer/i)).toBeInTheDocument()
  })

  it('renders first job company', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/vercel/i)).toBeInTheDocument()
  })

  it('renders first job period', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/2022 — present/i)).toBeInTheDocument()
  })

  it('renders first education degree', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/m\.s\. computer science/i)).toBeInTheDocument()
  })

  it('renders first education school', () => {
    renderWithI18n(<Career />)
    expect(screen.getByText(/stanford university/i)).toBeInTheDocument()
  })

  it('renders tech stack on first job', () => {
    renderWithI18n(<Career />)
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Next.js').length).toBeGreaterThan(0)
  })

  it('has correct section id for navigation', () => {
    renderWithI18n(<Career />)
    const section = document.getElementById('career')
    expect(section).toBeInTheDocument()
  })
})