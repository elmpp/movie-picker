/**
 *  - react-responsive lib - https://tinyurl.com/ngcn5bf
 */
import {breakpoints, BreakpointsUnion} from '../../style/breakpoints'
import {useMediaQuery} from 'react-responsive'

// @todo orientation queries
export const useBreakpoints = (): BreakpointsUnion => {
  if (useMediaQuery({maxWidth: breakpoints.sm})) return 'sm'
  if (useMediaQuery({maxWidth: breakpoints.lg})) return 'lg'
  return 'lg'
  // if (typeof window !== 'undefined') throw new Error('Unexpected media state')
}