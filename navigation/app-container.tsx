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
import {DarkTheme} from 'react-native-paper'

const StackNavigator = createStackNavigator(
  // note the keys here should match the /pages/ filenames
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      }
    },
    details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: 'Details',
      }
    }
  },
  // stackNavigator options - https://tinyurl.com/wtnmho3
  {
    initialRouteKey: "home",
    defaultNavigationOptions: {
      headerStyle: {
        marginBottom: 5,
      },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
    cardStyle: {
      // marginTop: 5,
      // paddingHorizontal:
    },
  }
);

const createApp = (routes: any) => createAppContainer(routes)

const NavigatorAppContainer = createApp(StackNavigator);

const prefix = Linking.makeUrl("/"); // syncs RN link scheme with expo

export const AppContainer = () => (
  <NavigatorAppContainer ref={ref => setNavigatorRef(ref)} uriPrefix={prefix} theme='dark' />
);
