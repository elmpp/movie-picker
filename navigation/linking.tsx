/**
 * Leans into react-navigation for its linking events.
 * Metro will bundle this rather than sibling 'linking' module
 *
 * We could have relied upon react-navigation supplying its navigation prop
 * to our "screens" to initiate navigation "events" but this wouldn't allow code reuse
 * with nextjs 'pages'
 * Having a separate module and imperatively calling dispatch actions should mitigate this.
 */

import React from 'react'
import {
  NavigationActions,
  NavigationContainerComponent
} from "react-navigation";
import { Linker, LinkComponent } from './__types__';
import { TextProps, Text } from "react-native";

let _navigator: NavigationContainerComponent;

export const setNavigatorRef = navigatorRef => {
  _navigator = navigatorRef;
};

export const linker: Linker = {
  navigate: ({routeName, params}) => {
    console.log('routeName :', routeName);
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    )}
};

export const Link: LinkComponent<TextProps> = ({
  children,
  routeName,
  params,
  ...otherProps
}) => (
  <Text {...otherProps} onPress={() => linker.navigate({ routeName, params })}>
    {children}
  </Text>
);