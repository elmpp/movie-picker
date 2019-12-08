import '@expo/match-media' // polyfill for media queries - https://tinyurl.com/qomrntv

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {ScreenContainer} from '../../components/screens/screen-container'
import {theme} from '../../style/theme'


type ExternalProps = any
type InjectedProps = any
export interface Options {
  reactNativePaperProps?: Omit<React.ComponentProps<typeof PaperProvider>, 'children'>,
}

export const withRoot = (options: Options = {}) => <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InjectedProps>,
) => {
  const WithRootHOC: React.FC<OriginalProps & ExternalProps> = (...props) => {
    return <PaperProvider theme={theme} {...options.reactNativePaperProps}>
      <ScreenContainer>
        <Component {...props} />
      </ScreenContainer>
    </PaperProvider>
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRootHOC.displayName = 'WithRootHoc'
  }

  return WithRootHOC
}