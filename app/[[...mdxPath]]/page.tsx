import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

// The "Last updated" line comes from each page's `lastUpdated:` frontmatter,
// not from git. Nextra fills `metadata.timestamp` from the file's last commit,
// which on Vercel reflects the checkout rather than when the content was last
// reviewed. A page without `lastUpdated` shows no date at all.
//
// The date is pinned to 12:00 UTC so the browser's local-time formatting shows
// the same calendar day in every timezone from UTC-11 to UTC+11.
function frontmatterTimestamp(value: unknown): number | undefined {
  if (!value) return undefined
  const day =
    value instanceof Date
      ? value.toISOString().slice(0, 10)
      : String(value).trim().slice(0, 10)
  const ms = Date.parse(`${day}T12:00:00Z`)
  return Number.isNaN(ms) ? undefined : ms
}

export default async function Page(props: { params: Promise<{ mdxPath?: string[] }> }) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(params.mdxPath)
  const pageMetadata = {
    ...metadata,
    timestamp: frontmatterTimestamp((metadata as { lastUpdated?: unknown }).lastUpdated),
  }
  return (
    <Wrapper toc={toc} metadata={pageMetadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
