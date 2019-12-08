/**
 * Vars and groupings to DRY the styles. "It ain't global styling", he says
 */
import {BreakpointsUnion} from './breakpoints'
import { useBreakpoints } from '../lib/hooks/use-breakpoints'


export const styleAux = {
  responsiveVal: (key: keyof typeof scales) => scales[key][useBreakpoints()]
}

type Scales = DictionaryUnion<DictionaryUnion<number, BreakpointsUnion>, 'gutter'>
/**
 *  - If had more time would surely get styled-system in the mix - https://tinyurl.com/rpyrxmg
 */
const scales: Scales = {
  gutter: {
    sm: 10,
    lg: 15,
  },
}

interface StyleVars extends Scales {
  carouselHeight: number,
  carouselWidth: number,
  carouselItemWidth: number | string,
}
export const styleVars: StyleVars = {
  ...scales,
  carouselHeight: 250,
  carouselWidth: '100%',
  carouselItemWidth: 380,
}