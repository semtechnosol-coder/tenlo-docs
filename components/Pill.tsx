import type { ReactNode } from 'react'

type PillVariant = 'legal' | 'urgent' | 'draft' | 'handoff' | 'replied' | 'objection'

const styles: Record<PillVariant, { color: string; bg: string; border: string }> = {
  legal:     { color: 'var(--legal)', bg: 'var(--legal-bg)', border: '#e0b8b8' },
  urgent:    { color: 'var(--warn)',  bg: 'var(--warn-bg)',  border: '#e0c5b0' },
  draft:     { color: 'var(--gold)',  bg: 'var(--gold-bg)',  border: '#d9c98b' },
  handoff:   { color: 'var(--gold)',  bg: 'var(--gold-bg)',  border: '#d9c98b' },
  replied:   { color: 'var(--good)',  bg: 'var(--good-bg)',  border: '#b5c9a8' },
  objection: { color: 'var(--warn)',  bg: 'var(--warn-bg)',  border: '#e0c5b0' },
}

interface PillProps {
  v: PillVariant
  children: ReactNode
}

export function Pill({ v, children }: PillProps) {
  const { color, bg, border } = styles[v]
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-mono, ui-monospace, monospace)',
      fontSize: '10px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: '999px',
      border: `1px solid ${border}`,
      fontWeight: 500,
      color,
      background: bg,
      verticalAlign: 'middle',
    }}>
      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color, display: 'inline-block' }} />
      {children}
    </span>
  )
}
