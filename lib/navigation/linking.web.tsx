/**
 * Webpack will bundle this over the sibling 'linking' module.
 * ! Current env context will be browser/node
 *
 *  - nextjs linking docs - https://tinyurl.com/yyt38gqz
 */

import React from 'react'
import NextLink, { LinkProps } from "next/link";
import { Linker, LinkComponent } from "./__types__";
import { NavigationParams } from 'react-navigation';
import {routes, RouteName} from '../navigation/routes'

/**
 * @todo - use the npm history package instead of browser.history
 */
export const linker: Linker = {
  navigate: ({ routeName, params }) => {
    const newUrl = buildUrl(routes, routeName, params)
    history.pushState(null, null, newUrl)
    window.history.go()
  }
};

export const buildUrl = (routes, routeName: RouteName, params?: NavigationParams) => {
  return Object.keys(params).reduce((url: string, paramKey) => {
    return url.replace(`:${paramKey}`, params[paramKey])
  }, routes[routeName].path)
}

export const Link: LinkComponent<LinkProps> = ({
  children,
  routeName,
  params,
  ...otherProps
}) => <NextLink href={buildUrl(routes, routeName, params)} {...otherProps}><a>{children}</a></NextLink>;
