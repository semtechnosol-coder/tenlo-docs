import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'nextra/mdx'
import { Step, Steps } from './components/Step'
import { Callout } from './components/Callout'
import { Pill } from './components/Pill'
import { PrettyTable } from './components/PrettyTable'

export function useMDXComponents(components: MDXComponents = {}) {
  return {
    ...getThemeComponents(components),
    Step,
    Steps,
    Callout,
    Pill,
    PrettyTable,
  }
}
