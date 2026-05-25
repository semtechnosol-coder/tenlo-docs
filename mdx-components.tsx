import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { Step, Steps } from './components/Step'
import { Callout } from './components/Callout'
import { Pill } from './components/Pill'
import { PrettyTable } from './components/PrettyTable'

type ThemeComponents = Parameters<typeof getThemeComponents>[0]

export function useMDXComponents(components: ThemeComponents = {}) {
  return {
    ...getThemeComponents(components),
    Step,
    Steps,
    Callout,
    Pill,
    PrettyTable,
  }
}
