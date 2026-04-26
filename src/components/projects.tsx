import { ArrowRight01Icon, GithubIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const techColors = [
  'text-tn-cyan bg-tn-cyan/10 border-tn-cyan/20',
  'text-tn-green bg-tn-green/10 border-tn-green/20',
  'text-tn-purple bg-tn-purple/10 border-tn-purple/20',
  'text-tn-orange bg-tn-orange/10 border-tn-orange/20',
]

export function Projects() {
  const { t } = useTranslation()

  const projectKeys = Object.keys(
    t('projects.projects', { returnObjects: true }) as Record<string, unknown>,
  ) as string[]

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    )
    revealElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tn-surface/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="scroll-reveal mb-16">
          <span className="inline-block text-xs font-mono text-tn-purple uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full border border-tn-purple/20 bg-tn-purple/5">
            &lt;{t('projects.label')}&gt;
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-left">
            {t('projects.title')}
          </h2>
          <p className="text-tn-textMuted max-w-lg text-left">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projectKeys.map((key, index) => {
            const project = t(`projects.projects.${key}`, {
              returnObjects: true,
            }) as {
              title: string
              description: string
              type: string
              stars?: string
              tech: string[]
              demoUrl: string
              sourceUrl: string
              image: string
            }

            const isFeatured = index === 0
            const isLast = index === projectKeys.length - 1
            const typeLabel = t(`projects.${project.type}`)

            const hasDemo =
              project.demoUrl &&
              project.demoUrl !== '' &&
              project.type !== 'openSource'
            const hasDocs = key === 'stowKit'

            const typeColor =
              project.type === 'openSource'
                ? 'text-tn-blue'
                : project.type === 'sideProject'
                  ? 'text-tn-green'
                  : project.type === 'experiment'
                    ? 'text-tn-purple'
                    : 'text-tn-cyan'

            const hoverColor =
              project.type === 'openSource'
                ? 'group-hover:text-tn-blue'
                : project.type === 'sideProject'
                  ? 'group-hover:text-tn-green'
                  : project.type === 'experiment'
                    ? 'group-hover:text-tn-purple'
                    : 'group-hover:text-tn-cyan'

            return (
              <div
                key={key}
                className={`scroll-reveal project-card card-hover bg-tn-surface/40 border border-tn-border rounded-xl overflow-hidden group ${
                  isFeatured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={isFeatured ? 'grid md:grid-cols-2' : ''}>
                  <div className={isFeatured ? 'relative h-full min-h-[400px]' : 'relative overflow-hidden aspect-video'}>
{project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-img absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 w-full h-full bg-tn-bgDark" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-tn-bgDark/80 via-transparent to-transparent" />
                    {isFeatured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 rounded-md bg-tn-blue/20 border border-tn-blue/30 text-[10px] font-mono text-tn-blue uppercase">
                          {t('projects.featured')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`p-6 ${
                      isFeatured ? 'md:p-8 flex flex-col justify-center' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={typeColor}>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </span>
                      <span className="text-[11px] font-mono text-tn-textMuted">
                        {typeLabel}
                        {project.stars &&
                          ` • ${project.stars} ${t('projects.stars')}`}
                      </span>
                    </div>
                    <h3
                      className={`font-display text-xl md:text-2xl font-bold mb-3 ${hoverColor} transition-colors`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-tn-textMuted text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            techColors[techIndex % techColors.length]
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {hasDemo && (
                        <a
                          href={project.demoUrl}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-tn-blue hover:underline"
                        >
                          {isFeatured
                            ? t('projects.demo')
                            : t('projects.demoShort')}
                          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                        </a>
                      )}
                      {hasDocs && (
                        <a
                          href={project.docsUrl || '#'}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-tn-textMuted hover:text-tn-text transition-colors"
                        >
                          {t('projects.docs')}
                        </a>
                      )}
                      <a
                        href={project.sourceUrl}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-tn-textMuted hover:text-tn-text transition-colors"
                      >
                        <HugeiconsIcon icon={GithubIcon} size={14} />
                        {t('projects.source')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
