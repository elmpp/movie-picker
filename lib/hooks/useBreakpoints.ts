import {breakpoints, BreakpointsUnion} from '../../style/breakpoints'
import {useMediaQuery} from 'react-responsive'

// @todo orientation queries
export const useBreakpoints = (): BreakpointsUnion => {
  if (useMediaQuery({query: `(max-width: ${breakpoints.sm}px)`})) return 'sm'
  if (useMediaQuery({query: `(max-width: ${breakpoints.lg}px)`})) return 'lg'
}