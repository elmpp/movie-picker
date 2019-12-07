import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';


type ExternalProps = any
type InjectedProps = any
export interface Options {
  reactNativePaperProps?: React.ComponentProps<typeof PaperProvider>,
}

export const withRoot = (options: Options = {}) => <OriginalProps extends {}>(
  Component: React.ComponentType<OriginalProps & InjectedProps>,
) => {
  const WithRootHOC: React.FC<OriginalProps & ExternalProps> = (...props) => {
    // return <PaperProvider {...options.reactNativePaperProps}><Component {...props} /></PaperProvider>
    return <Component {...props} />
  }

  if (process.env.NODE_ENV !== 'production') {
    WithRootHOC.displayName = 'WithRootHoc'
  }

  return WithRootHOC
}