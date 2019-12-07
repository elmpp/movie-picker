/**
 * Web/Native require different navigators due to _things_
 *
 *  - react-navigation (RN) stackNavigator docs - https://tinyurl.com/von6vjg
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import { createBrowserApp } from "@react-navigation/web";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { Linking } from "expo";
import { HomeScreen } from "../components/screens";
import { DetailsScreen } from "../components/screens/details-screen";
import { setNavigatorRef } from "./linking";

const StackNavigator = createStackNavigator(
  {
    home: {
      screen: HomeScreen
    },
    details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteKey: "home"
  }
);

const createApp = Platform.select({
  web: routes => createBrowserApp(routes, { history: "hash" }),
  default: routes => createAppContainer(routes)
});

const NavigatorAppContainer = createApp(StackNavigator);

const prefix = Linking.makeUrl("/"); // syncs RN link scheme with expo

export const AppContainer = () => (
  <NavigatorAppContainer ref={ref => setNavigatorRef(ref)} uriPrefix={prefix} />
);
