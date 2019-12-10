/**
 * Vars and groupings to DRY the styles. "It ain't global styling", he says
 *
 *  - Qix's color util - https://tinyurl.com/uqcdk5c
 */
import {BreakpointsUnion} from './breakpoints'
import { useBreakpoints } from '../lib/hooks/use-breakpoints'
import { ViewStyle } from 'react-native'
import Color from 'color'


export const styleAux = {
  responsiveVal: (key: keyof typeof scales) => scales[key][useBreakpoints()],
  addOpacity: (color: string, opacity = styleVars.opacityLevel): string => Color(color).alpha(opacity).string(),
  positionBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
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
  carouselItemWidth: number | string,
  opacityLevel: number,
}
export const styleVars: StyleVars = {
  ...scales,
  carouselHeight: 250,
  carouselItemWidth: 380,
  opacityLevel: 0.6,
}