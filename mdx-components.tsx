import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import { Step, Steps } from './components/Step'
import { Callout } from './components/Callout'
import { Pill } from './components/Pill'
import { PrettyTable } from './components/PrettyTable'

export function useMDXComponents(components: Record<string, React.ComponentType> = {}) {
  return {
    ...getThemeComponents(components),
    Step,
    Steps,
    Callout,
    Pill,
    PrettyTable,
  }
}
