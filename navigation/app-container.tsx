/**
 * Creates an "AppContainer" bootstrapped with all the react-navigation stuff ready
 * To be used only in native platforms
 *
 *  - latest expo instructions for nextjs setup - https://tinyurl.com/umtrama
 *  - react-navigation (RN) stackNavigator docs - https://tinyurl.com/von6vjg
 *  - react-navigation/web docs - https://tinyurl.com/v429f4l
 *  - react-navigation/web SSR example - https://tinyurl.com/yx2flg7o
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Linking } from "expo";
import { HomeScreen } from "../components/screens";
import { DetailsScreen } from "../components/screens/details-screen";
import { setNavigatorRef } from "./linking";

// note the keys here should match the /pages/ filenames
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

const createApp = (routes: any) => createAppContainer(routes)

const NavigatorAppContainer = createApp(StackNavigator);

const prefix = Linking.makeUrl("/"); // syncs RN link scheme with expo

export const AppContainer = () => (
  <NavigatorAppContainer ref={ref => setNavigatorRef(ref)} uriPrefix={prefix} />
);
