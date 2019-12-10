/**
 * Playing a video is easy, right?
 *
 *  - screen orientation locking - https://tinyurl.com/sfb4j9w
 */
import React, { useLayoutEffect } from "react";
import {RootParamList} from '../../lib/navigation/app-container'
import {WatchContainer} from '../container/watch-container'
import {ScreenParamProps} from '../../lib/hoc/react-navigation-screen-adapter'
import { ScreenOrientation } from "expo";

export type WatchScreenProps = ScreenParamProps<RootParamList['details'], {
}>
export const WatchScreen: React.FC<WatchScreenProps> = ({screenRouteParams}) => {

  useLayoutEffect(() => {
    ;(async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
    })()

    return () => {
      ;(async () => {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

      })()
    }
  }, [])

  return (
    <WatchContainer id={screenRouteParams.id} mediaType={screenRouteParams.mediaType} />
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