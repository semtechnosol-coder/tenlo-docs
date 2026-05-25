import type { ReactNode } from 'react'

interface StepProps {
  n: number
  title: string
  time?: string
  path?: string
  children: ReactNode
}

export function Step({ n, title, time, path, children }: StepProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: '24px',
      padding: '28px 0',
      borderTop: '1px solid var(--rule)',
    }}>
      <div style={{
        fontFamily: 'var(--font-serif, Georgia, serif)',
        fontSize: '52px',
        lineHeight: 1,
        color: 'var(--accent)',
        fontWeight: 400,
        paddingTop: '4px',
      }}>
        {String(n).padStart(2, '0')}
      </div>
      <div>
        {(time || path) && (
          <div style={{
            fontFamily: 'var(--font-mono, ui-monospace, monospace)',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--mute)',
            marginBottom: '8px',
          }}>
            {[time, path].filter(Boolean).join(' · ')}
          </div>
        )}
        <div style={{
          fontFamily: 'var(--font-sans, ui-sans-serif, system-ui, sans-serif)',
          fontSize: '18px',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          marginBottom: '10px',
          color: 'var(--ink)',
        }}>
          {title}
        </div>
        <div style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.65 }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function Steps({ children }: { children: ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid var(--rule)', marginBottom: '32px' }}>
      {children}
    </div>
  )
}
