/**
 * we're here removing prop supplied by react-navigation to the top-level screens
 * and marshalling it into our own format that could be easily mimicked by nextjs that
 * won't have same routing
 *
 *  - react-navigation screen prop - https://tinyurl.com/wdj8x68
 *  - react-navigation route mapping options - https://tinyurl.com/tm9du78
 */
import React from 'react'
import { NavigationStackProp } from "react-navigation-stack"

type ExternalProps = {}
type InjectedProps<T extends ScreenParamProp> = {screenRouteParams: T}

export type ScreenParamProps<T extends ScreenParamProp, U> = {screenRouteParams: T} & U
type ScreenParamProp = any | undefined
type NavigationScreenProp<T> = NavigationStackProp<T>

export const reactNavigationScreenAdapter = <T extends ScreenParamProp, OriginalProps extends {navigation: NavigationScreenProp<T>}>(
  Component: React.ComponentType<Omit<OriginalProps, 'navigation'> & InjectedProps<T>>,
) => {
  const reactNavigationScreenAdapterHOC: React.FC<OriginalProps & ExternalProps> = ({navigation, ...otherProps}) => {
const util = require('util')
// console.log('navigation', util.inspect(navigation, {showHidden: false, depth: undefined, colors: true}))

    return <Component {...otherProps} screenRouteParams={navigation.state.params} />
  }

  if (process.env.NODE_ENV !== 'production') {
    reactNavigationScreenAdapterHOC.displayName = 'reactNavigationScreenAdapterHoc'
  }

  return reactNavigationScreenAdapterHOC
}