/**
 * HOC to supply all required "root" components (mainly just those that set Context)
 * Only need to shimmy in the react-navigation AppContainer to work in native land
 */

import {withRoot as withRootWeb, Options} from './with-root.web'
import {AppContainer} from '../navigation/app-container'

export const withRoot = (options?: Options) => withRootWeb(options)(AppContainer)