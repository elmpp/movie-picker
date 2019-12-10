/**
 * Plays a video full screen
 *
 *  - React native video lib - https://tinyurl.com/y8d28abj
 */
import React, { useRef } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { styleAux } from "../../style";
import { MediaUnion } from "moviedb";
import { Video } from "expo-av";
import { Playback } from "expo-av";

export type WatchProps<T> = {
  media: T[];
};
export const Watch = <T extends MediaUnion>({
  media: [media]
}: WatchProps<T>) => {
  const videoRef = useRef<Playback>()

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
          // uri: "​https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4​"
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        shouldPlay
        isLooping
        style={{flex: 1}}
        ref={ref => {videoRef.current = ref}}
        // style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
