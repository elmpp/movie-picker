
export type BreakpointsUnion = 'sm' | 'lg'

export const breakpoints: DictionaryUnion<number, BreakpointsUnion> = {
  sm: 400,
  lg: Infinity,
}
