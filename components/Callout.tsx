import type { ReactNode } from 'react'

type CalloutType = 'note' | 'warn' | 'legal' | 'tip'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const config: Record<CalloutType, { icon: string; color: string; bg: string; border: string }> = {
  note:  { icon: 'i', color: 'var(--accent-ink)', bg: 'var(--accent-bg)', border: 'var(--accent)' },
  warn:  { icon: '!', color: 'var(--warn)',       bg: 'var(--warn-bg)',   border: 'var(--warn)'   },
  legal: { icon: '§', color: 'var(--legal)',      bg: 'var(--legal-bg)', border: 'var(--legal)'  },
  tip:   { icon: '✓', color: '#5a4612',           bg: 'var(--gold-bg)',  border: 'var(--gold)'   },
}

const defaultTitle: Record<CalloutType, string> = {
  note:  'Note',
  warn:  'Heads up',
  legal: 'Compliance',
  tip:   'Pro tip',
}

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const { icon, color, bg, border } = config[type]
  const label = title ?? defaultTitle[type]

  return (
    <div style={{
      borderLeft: `3px solid ${border}`,
      background: bg,
      padding: '14px 18px',
      margin: '20px 0',
      borderRadius: '0 4px 4px 0',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '14px',
      alignItems: 'start',
      color,
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        border: `1.5px solid ${color}`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif, Georgia, serif)',
        fontStyle: 'italic',
        fontSize: '14px',
        flexShrink: 0,
        marginTop: '2px',
        color,
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          fontSize: '10px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          opacity: 0.85,
          marginBottom: '4px',
          fontWeight: 600,
        }}>
          {label}
        </div>
        <div style={{ fontSize: '13.5px', lineHeight: 1.55 }}>
          {children}
        </div>
      </div>
    </div>
  )
}
