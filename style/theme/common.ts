import {Theme as RNPTheme} from 'react-native-paper'
// import {aux} from '../common'

export interface Theme extends RNPTheme {

}

export const augmentTheme = (theme: Theme): RNPTheme => {
  return theme
}