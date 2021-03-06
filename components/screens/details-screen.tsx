/**
 * This is the first screen that takes a routing param (:id)
 * For speed's sake we'll use react-navigation's navigation prop here
 * but we'd probably abstract these params given more time. That should
 * uncouple us from the routing implementation. As it stands, nextjs params
 * will need to mimic this prop for now
 */
import React from "react";
import {RootParamList} from '../../lib/navigation/app-container'
import {DetailsContainer} from '../container/details-container'
import {ScreenParamProps} from '../../lib/hoc/react-navigation-screen-adapter'

export type DetailsScreenProps = ScreenParamProps<RootParamList['details'], {
}>
export const DetailsScreen: React.FC<DetailsScreenProps> = ({screenRouteParams}) => {
  return (
    <DetailsContainer id={screenRouteParams.id} mediaType={screenRouteParams.mediaType} />
  );
  // return (
  //   <View style={styles.container}>
  //     <Text>THIS IS THE DETAILS SCREEN. Details id: {navigation.getParam('id')}</Text>
  //     <Link routeName="home">jump to home screen via component</Link>
  //     <Text onPress={() => linker.navigate({routeName: 'home'})}>jump to home screen imperatively</Text>
  //   </View>
  // );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });