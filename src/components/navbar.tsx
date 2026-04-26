import {
  ArrowRight01Icon,
  ComputerTerminal01Icon,
  Menu01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const navItems = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'career', labelKey: 'nav.career' },
]

export function Navbar() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('lang', newLang)
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tn-bgDark/95 backdrop-blur-xl border-b border-tn-border'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-tn-surface border border-tn-border flex items-center justify-center group-hover:border-tn-blue transition-colors">
            <HugeiconsIcon
              icon={ComputerTerminal01Icon}
              size={16}
              color="#7aa2f7"
            />
          </div>
          <span className="font-display font-semibold text-tn-text text-sm tracking-tight">
            giovani.oliveira
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ id, labelKey }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`nav-link text-xs font-medium transition-colors uppercase tracking-widest ${
                activeSection === id
                  ? 'text-tn-text active'
                  : 'text-tn-textMuted hover:text-tn-text'
              }`}
            >
              {t(labelKey)}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-mono text-tn-textMuted hover:text-tn-cyan transition-colors"
            title={t('nav.language')}
          >
            {i18n.language.toUpperCase()}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ml-2 px-4 py-2 bg-tn-blue/10 border border-tn-blue/20 rounded-lg text-xs font-medium text-tn-blue hover:bg-tn-blue/20 hover:border-tn-blue/40 transition-all flex items-center gap-1.5"
          >
            {t('nav.contact')}
            <HugeiconsIcon icon={ArrowRight01Icon} size={12} color="#7aa2f7" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-tn-border hover:border-tn-textMuted transition-colors"
          aria-label="Toggle menu"
        >
          <HugeiconsIcon icon={Menu01Icon} size={20} color="#c0caf5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-tn-bgDark/95 backdrop-blur-xl border-t border-tn-border`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navItems.map(({ id, labelKey }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="py-2.5 px-3 rounded-lg text-sm text-tn-textMuted hover:text-tn-text hover:bg-tn-surface/50 transition-all"
            >
              {t(labelKey)}
            </a>
          ))}

          <button
            type="button"
            onClick={toggleLanguage}
            className="py-2.5 px-3 rounded-lg text-sm text-tn-textMuted hover:text-tn-text hover:bg-tn-surface/50 transition-all text-left"
          >
            {i18n.language === 'en' ? 'Português' : 'English'}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="py-2.5 px-3 rounded-lg text-sm text-tn-blue bg-tn-blue/10 text-center"
          >
            {t('nav.contact')}
          </a>
        </div>
      </div>
    </nav>
  )
}
