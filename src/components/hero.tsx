import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  GithubIcon,
  Linkedin01Icon,
} from '@hugeicons/core-free-icons'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-tn-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tn-purple/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tn-cyan/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-0 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-tn-border bg-tn-surface/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-tn-green animate-pulse" />
              <span className="text-xs font-mono text-tn-textMuted">
                {t('hero.available')}
              </span>
            </div>
          </div>

          <h1 className="animate-fade-in-up-d1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-tn-text">{t('hero.greeting')}</span>
            {' '}
            <span className="bg-gradient-to-r from-tn-blue via-tn-purple to-tn-cyan bg-clip-text text-transparent">
              {t('hero.name')}
            </span>
          </h1>

          <p className="animate-fade-in-up-d2 text-lg md:text-xl text-tn-textMuted leading-relaxed mb-8 max-w-lg">
            {t('hero.bio')}
          </p>

          <div className="animate-fade-in-up-d3 flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-tn-blue text-tn-bgDark font-medium text-sm rounded-lg hover:bg-tn-blue/90 transition-all glow-blue"
            >
              {t('hero.viewProjects')}
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-tn-surface border border-tn-border text-tn-text font-medium text-sm rounded-lg hover:border-tn-textMuted hover:bg-tn-surfaceLight transition-all"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
              {t('hero.getInTouch')}
            </a>
          </div>

          <div className="animate-fade-in-up-d4 flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tn-textMuted hover:text-tn-blue transition-colors"
              aria-label="GitHub"
            >
              <HugeiconsIcon icon={GithubIcon} size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tn-textMuted hover:text-tn-blue transition-colors"
              aria-label="LinkedIn"
            >
              <HugeiconsIcon icon={Linkedin01Icon} size={20} />
            </a>
            <div className="w-px h-5 bg-tn-border ml-1" />
            <span className="text-xs font-mono text-tn-textDim">
              ~/portfolio
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up-d3 animate-float hidden md:block">
          <div className="bg-tn-bgDark border border-tn-border rounded-xl overflow-hidden animate-pulse-glow max-w-md mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-tn-border bg-tn-surface/30">
              <div className="w-3 h-3 rounded-full bg-tn-red/80" />
              <div className="w-3 h-3 rounded-full bg-tn-orange/80" />
              <div className="w-3 h-3 rounded-full bg-tn-green/80" />
              <span className="ml-3 text-xs font-mono text-tn-textDim">
                zsh — 80×24
              </span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <div className="text-tn-green">
                $ <span className="text-tn-text">{t('hero.terminal.whoami')}</span>
              </div>
              <div className="text-tn-cyan mt-1 ml-2">giovani_oliveira</div>

              <div className="text-tn-green mt-3">
                $ <span className="text-tn-text">{t('hero.terminal.skills')}</span>
              </div>
              <div className="text-tn-textMuted mt-1 ml-2">{'{'}</div>
              <div className="ml-4">
                <span className="text-tn-purple">"frontend"</span>:
                <span className="text-tn-orange">["React", "TypeScript"]</span>,
              </div>
              <div className="ml-4">
                <span className="text-tn-purple">"backend"</span>:
                <span className="text-tn-orange">["Node", "Python"]</span>,
              </div>
              <div className="text-tn-textMuted ml-2">{'}'}</div>

              <div className="text-tn-green mt-3">
                $ <span className="text-tn-text">echo $STATUS</span>
              </div>
              <div className="text-tn-teal mt-1 ml-2 terminal-cursor">
                {t('hero.terminal.status')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up-d4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-tn-textDim font-mono">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-tn-border flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-tn-blue animate-bounce" />
        </div>
      </div>
    </section>
  )
}