import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {ScreenContainer} from '../components/screens/screen-container'
import { View, Text } from 'react-native';


type ExternalProps = any
type InjectedProps = any
export interface Options {
  reactNativePaperProps?: Omit<React.ComponentProps<typeof PaperProvider>, 'children'>,
}

export const withRoot = (options: Options = {}) => <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InjectedProps>,
) => {
  const WithRootHOC: React.FC<OriginalProps & ExternalProps> = (...props) => {
    return <PaperProvider {...options.reactNativePaperProps}>
      <ScreenContainer>
        <Component {...props} />
      </ScreenContainer>
    </PaperProvider>
    return <Component {...props} />
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRootHOC.displayName = 'WithRootHoc'
  }

  return WithRootHOC
}