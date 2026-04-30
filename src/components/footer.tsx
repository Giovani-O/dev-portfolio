import { TerminalIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-tn-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-tn-surface border border-tn-border flex items-center justify-center">
            <HugeiconsIcon icon={TerminalIcon} size={14} className="text-tn-blue" />
          </div>
          <span className="font-display text-sm font-medium text-tn-textMuted">
            {t('footer.copyright')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-tn-green" />
          <span className="text-xs font-mono text-tn-textDim">
            {t('footer.status')}
          </span>
        </div>
      </div>
    </footer>
  )
}
