import type { ReactNode } from 'react'

interface Column {
  key: string
  label: string
  mono?: boolean   // render cell as monospace token (teal)
  meta?: boolean   // render cell as muted mono-caps metadata
}

interface PrettyTableProps {
  columns: Column[]
  rows: Record<string, ReactNode>[]
  note?: string
}

export function PrettyTable({ columns, rows, note }: PrettyTableProps) {
  return (
    <div style={{ margin: '8px 0 24px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{
                textAlign: 'left',
                fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--mute)',
                fontWeight: 500,
                padding: '10px 14px 10px 0',
                borderBottom: '1px solid var(--ink)',
              }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key} style={{
                  padding: '13px 14px 13px 0',
                  borderBottom: '1px solid var(--rule)',
                  verticalAlign: 'top',
                  lineHeight: 1.5,
                  ...(col.mono ? {
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                    fontSize: '12px',
                    color: 'var(--accent-ink)',
                    background: 'var(--accent-bg)',
                    paddingLeft: '8px',
                    paddingRight: '12px',
                    borderRadius: '3px',
                    whiteSpace: 'nowrap' as const,
                    width: '1%',
                  } : col.meta ? {
                    fontFamily: 'var(--font-mono, ui-monospace, monospace)',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase' as const,
                    color: 'var(--mute)',
                    whiteSpace: 'nowrap' as const,
                    width: '1%',
                  } : {}),
                }}>
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <p style={{
          fontFamily: 'var(--font-mono, ui-monospace, monospace)',
          fontSize: '11px',
          color: 'var(--mute)',
          marginTop: '10px',
          letterSpacing: '0.02em',
        }}>
          {note}
        </p>
      )}
    </div>
  )
}
