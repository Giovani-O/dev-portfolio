import { GithubIcon, Linkedin01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

const socials = [
  {
    key: 'github',
    icon: GithubIcon,
  },
  {
    key: 'linkedin',
    icon: Linkedin01Icon,
  },
] as const

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="scroll-reveal text-center">
          <span className="inline-block text-xs font-mono text-tn-teal uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-tn-teal/20 bg-tn-teal/5">
            &lt;{t('contact.label')}&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('contact.title')}
            <br />
            <span className="bg-gradient-to-r from-tn-blue via-tn-purple to-tn-cyan bg-clip-text text-transparent">
              {t('contact.titleAccent')}
            </span>
          </h2>
          <p className="text-tn-textMuted max-w-lg mx-auto mb-10">
            {t('contact.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-6">
            {socials.map((social) => (
              <div key={social.key} className="flex flex-col items-center gap-2">
                <a
                  href={t(`contact.socials.${social.key}.url`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`contact.socials.${social.key}.label`)}
                  className="w-11 h-11 rounded-xl bg-tn-surface border border-tn-border flex items-center justify-center hover:border-tn-teal/40 transition-colors"
                >
                  <HugeiconsIcon icon={social.icon} size={20} className="text-tn-text" />
                </a>
                <span className="text-xs font-mono text-tn-textMuted">
                  {t(`contact.socials.${social.key}.label`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
