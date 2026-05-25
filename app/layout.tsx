import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import 'nextra-theme-docs/style.css'
import '../styles/globals.css'

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Reputation AI — Tenlo Docs',
    template: '%s — Tenlo Docs',
  },
  description:
    'Operator handbook for Tenlo Reputation AI (P09). Review replies, campaigns, compliance, and settings.',
}

const navbar = (
  <Navbar
    logo={
      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontStyle: 'italic' }}>
        Tenlo Docs
      </span>
    }
    projectLink="https://app.tenloai.com"
    projectIcon={
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Open App →
      </span>
    }
  />
)

const footer = (
  <Footer>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5 }}>
      Tenlo AI Inc. · support@tenloai.com · Mon–Fri 9am–5pm EST
    </span>
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/semtechnosol-coder/tenlo-docs/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true, toggleButton: true }}
          toc={{ title: 'On this page', backToTop: true }}
          editLink="Edit this page"
          feedback={{ content: 'Was this helpful?' }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
