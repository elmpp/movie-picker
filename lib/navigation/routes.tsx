/**
 * platform-agnostic mapping of routeName => parameterised paths
 */

export type RouteName = keyof typeof routes

export const routes = {
  home: {
    path: '/',
  },
  details: {
    path: '/details/:id/:mediaType',
  },
  watch: {
    path: '/watch/:id/:mediaType',
  },
}