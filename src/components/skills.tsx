import {
  AiIdeaIcon,
  CloudIcon,
  CodeIcon,
  Database01Icon,
  ServerStack03Icon,
  Wrench01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

const categoryConfig = [
  {
    key: 'frontend',
    icon: CodeIcon,
    colorClass: 'text-tn-blue',
    bgClass: 'bg-tn-blue/10',
    borderClass: 'border-tn-blue/20',
    hoverBgClass: 'bg-tn-blue/20',
    hoverBorderClass: 'border-blue/40',
    hoverIconClass: 'group-hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)]',
  },
  {
    key: 'backend',
    icon: ServerStack03Icon,
    colorClass: 'text-tn-green',
    bgClass: 'bg-tn-green/10',
    borderClass: 'border-tn-green/20',
    hoverBgClass: 'bg-tn-green/20',
    hoverBorderClass: 'border-green/40',
    hoverIconClass: 'group-hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]',
  },
  {
    key: 'database',
    icon: Database01Icon,
    colorClass: 'text-tn-orange',
    bgClass: 'bg-tn-orange/10',
    borderClass: 'border-tn-orange/20',
    hoverBgClass: 'bg-tn-orange/20',
    hoverBorderClass: 'border-orange/40',
    hoverIconClass: 'group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]',
  },
  {
    key: 'devops',
    icon: CloudIcon,
    colorClass: 'text-tn-cyan',
    bgClass: 'bg-tn-cyan/10',
    borderClass: 'border-tn-cyan/20',
    hoverBgClass: 'bg-tn-cyan/20',
    hoverBorderClass: 'border-cyan/40',
    hoverIconClass: 'group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]',
  },
  {
    key: 'tooling',
    icon: Wrench01Icon,
    colorClass: 'text-tn-purple',
    bgClass: 'bg-tn-purple/10',
    borderClass: 'border-tn-purple/20',
    hoverBgClass: 'bg-tn-purple/20',
    hoverBorderClass: 'border-purple/40',
    hoverIconClass: 'group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]',
  },
  {
    key: 'practices',
    icon: AiIdeaIcon,
    colorClass: 'text-tn-teal',
    bgClass: 'bg-tn-teal/10',
    borderClass: 'border-tn-teal/20',
    hoverBgClass: 'bg-tn-teal/20',
    hoverBorderClass: 'border-teal/40',
    hoverIconClass: 'group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]',
  },
]

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <span className="inline-block text-xs font-mono text-tn-blue uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-tn-blue/20 bg-tn-blue/5">
            &lt;{t('skills.label')}&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-tn-textMuted max-w-lg mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoryConfig.map((category) => {
            const categoryData = t(`skills.categories.${category.key}`, {
              returnObjects: true,
            }) as {
              title: string
              subtitle: string
              skills: string[]
            }

            return (
              <div
                key={category.key}
                className="scroll-reveal card-hover bg-tn-surface/40 border border-tn-border rounded-xl p-6 group"
              >
                <div className="flex items-start gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-lg ${category.bgClass} border ${category.borderClass} flex items-center justify-center shrink-0 group-hover:${category.hoverBgClass} transition-colors`}
                  >
                    <HugeiconsIcon
                      icon={category.icon}
                      size={20}
                      className={`${category.colorClass} transition-all duration-300 ${category.hoverIconClass}`}
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-semibold text-sm">
                      {categoryData.title}
                    </h3>
                    <p className="text-[11px] text-tn-textMuted font-mono">
                      {categoryData.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoryData.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-tn-bg/60 border border-tn-border text-xs font-mono text-tn-text hover:border-tn-blue/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
