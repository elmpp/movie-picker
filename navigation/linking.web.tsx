/**
 * Webpack will bundle this over the sibling 'linking' module.
 * ! Current env context will be browser/node
 *
 *
 *  - nextjs linking docs - https://tinyurl.com/yyt38gqz
 */

import React from 'react'
import NextLink, { LinkProps } from "next/link";
import { Linker, LinkComponent } from "./__types__";
import { NavigationParams } from 'react-navigation';

export const linker: Linker = {
  navigate: ({ routeName, params }) => {
    console.log(buildUrl(routeName, params));
    location.replace(buildUrl(routeName, params))
  }
};

// @todo use params for query params
const buildUrl = (routeName: string, params?: NavigationParams) => {
  return (routeName === 'home') ? '/' : `/${routeName}`
}

export const Link: LinkComponent<LinkProps> = ({
  children,
  routeName,
  params,
  ...otherProps
}) => <NextLink href={buildUrl(routeName, params)} {...otherProps}><a>{children}</a></NextLink>;
