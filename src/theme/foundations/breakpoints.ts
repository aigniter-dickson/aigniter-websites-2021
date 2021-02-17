import { createBreakpoints } from '@chakra-ui/theme-tools'
import type { BaseBreakpointConfig } from '@chakra-ui/theme-tools'

/**
 * Breakpoints for responsive design
 */
export const breakpointConfig: BaseBreakpointConfig = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const breakpoints = createBreakpoints(breakpointConfig)

export default breakpoints
