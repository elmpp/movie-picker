/**
 * We could have relied upon react-navigation supplying its navigation.navigate prop
 * to our "screens" to initiate navigation "events" but this would break down
 * when Next.js is resolving requests.
 * Having a separate module and imperatively calling dispatch actions should mitigate this.
 */

import React from 'react'
import {
  NavigationActions,
  NavigationParams,
  NavigationContainerComponent
} from "react-navigation";
import { Link as LinkWeb } from "@react-navigation/web";
import { Platform, Text, TextProps } from "react-native";

let _navigator: NavigationContainerComponent;

export const setNavigatorRef = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params?: NavigationParams) => {
  console.log('routeName :', routeName);
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

export const linker = {
  navigate,
  // goBack() {
  //   _navigator.dispatch(NavigationActions.back({}));
  // },
  // setNavigatorRef
};

const LinkNative: React.FC<TextProps & {toRoute: string, params: NavigationParams}> = ({
  children,
  toRoute,
  params,
  ...otherProps
}) => (
  <Text {...otherProps} onPress={() => navigate(toRoute, params)}>
    {children}
  </Text>
);

export const Link = Platform.select({
  web: LinkWeb,
  default: LinkNative,
});
