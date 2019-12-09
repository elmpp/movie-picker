/**
 * Native entrypoint component.
 * Must remain a class component to enable hot reloading with react-navigation
 * (until RN 0.61 lands with Fast Refresh)
 */
import {withRoot} from './lib/hoc/with-root'

export default withRoot()
