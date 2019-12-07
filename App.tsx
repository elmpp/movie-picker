/**
 * Native entrypoint component.
 */
import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import { HomeScreen } from "./components/screens";
// import { Linking } from "expo";
import {AppContainer} from './navigation/app-container'

// const prefix = Linking.makeUrl("/"); // syncs RN link scheme with expo

// const AppContainer = createAppContainer(
//   createStackNavigator(
//     {
//       home: {
//         screen: HomeScreen
//       }
//     },
//     {
//       initialRouteKey: "home"
//     }
//   )
// );

// export default () => {
//   return <AppContainer uriPrefix={prefix} />;
// };

export default () => (<AppContainer />)
