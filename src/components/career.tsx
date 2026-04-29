import {
  Briefcase01Icon,
  GraduationScrollIcon,
  Certificate01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

export function Career() {
  const { t } = useTranslation()

  const workData = t('career.work', { returnObjects: true }) as {
    title: string
    items: Array<{
      role: string
      company: string
      companyColor: string
      period: string
      description: string
      tech: string[]
    }>
  }

  const eduData = t('career.education', { returnObjects: true }) as {
    title: string
    items: Array<{
      degree: string
      school: string
      schoolColor: string
      period: string
      description: string
      tech: string[]
    }>
  }

  const certData = t('career.certifications', { returnObjects: true }) as {
    title: string
    subtitle: string
    color: string
    items: Array<{
      name: string
      iconColor: string
    }>
  }

  return (
    <section id="career" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal text-center mb-16">
          <span className="inline-block text-xs font-mono text-tn-cyan uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-tn-cyan/20 bg-tn-cyan/5">
            &lt;{t('career.label')}&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('career.title')}
          </h2>
          <p className="text-tn-textMuted max-w-lg mx-auto">
            {t('career.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <div className="scroll-reveal flex items-center gap-2 mb-8">
              <HugeiconsIcon
                icon={Briefcase01Icon}
                size={20}
                className="text-tn-blue"
              />
              <h3 className="font-display font-semibold text-lg">
                {workData.title}
              </h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-tn-blue via-tn-purple to-tn-cyan opacity-30" />

              {workData.items.map((job) => (
                <div
                  key={job.role + job.company}
                  className="scroll-reveal relative mb-10 last:mb-0"
                >
                  <div
                    className={`absolute -left-8 top-1.5 w-[23px] h-[23px] rounded-full border-2 ${job.companyColor} bg-tn-bg flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${job.companyColor.replace('text-', 'bg-')}`}
                    />
                  </div>
                  <div className="card-hover bg-tn-surface/40 border border-tn-border rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-semibold text-sm">
                          {job.role}
                        </h4>
                        <p
                          className={`${job.companyColor} text-sm font-medium`}
                        >
                          {job.company}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-tn-textMuted px-2 py-0.5 rounded bg-tn-bg/60 border border-tn-border whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-tn-textMuted text-sm leading-relaxed mb-3">
                      {job.description}
                    </p>
                    {job.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((techItem, techIndex) => (
                          <span key={techItem}>
                            <span className="text-[10px] font-mono text-tn-textDim">
                              {techItem}
                            </span>
                            {techIndex < job.tech.length - 1 && (
                              <span className="text-[10px] text-tn-border">
                                {' '}
                                ·{' '}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="scroll-reveal flex items-center gap-2 mb-8">
              <HugeiconsIcon
                icon={GraduationScrollIcon}
                size={20}
                className="text-tn-orange"
              />
              <h3 className="font-display font-semibold text-lg">
                {eduData.title}
              </h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-tn-orange/30 via-tn-green/30 to-tn-teal/30" />

              {eduData.items.map((item) => (
                <div
                  key={item.degree + item.school}
                  className="scroll-reveal relative mb-10 last:mb-0"
                >
                  <div
                    className={`absolute -left-8 top-1.5 w-[23px] h-[23px] rounded-full border-2 ${item.schoolColor} bg-tn-bg flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${item.schoolColor.replace('text-', 'bg-')}`}
                    />
                  </div>
                  <div className="card-hover bg-tn-surface/40 border border-tn-border rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="font-display font-semibold text-sm">
                          {item.degree}
                        </h4>
                        <p
                          className={`${item.schoolColor} text-sm font-medium`}
                        >
                          {item.school}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-tn-textMuted px-2 py-0.5 rounded bg-tn-bg/60 border border-tn-border whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-tn-textMuted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Certifications */}
              <div className="scroll-reveal relative">
                <div
                  className={`absolute -left-8 top-1.5 w-[23px] h-[23px] rounded-full border-2 ${certData.color} bg-tn-bg flex items-center justify-center`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${certData.color.replace('text-', 'bg-')}`}
                  />
                </div>
                <div className="card-hover bg-tn-surface/40 border border-tn-border rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-display font-semibold text-sm">
                        {certData.title}
                      </h4>
                      <p className={`${certData.color} text-sm font-medium`}>
                        {certData.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {certData.items.map((cert) => (
                      <div key={cert.name} className="flex items-center gap-3">
                        <HugeiconsIcon
                          icon={Certificate01Icon}
                          size={16}
                          className={`${cert.iconColor}`}
                        />
                        <span className="text-sm text-tn-textMuted">
                          {cert.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
