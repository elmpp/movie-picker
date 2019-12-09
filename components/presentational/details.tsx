/**
 * Takes media and builds a carousel
 *
 *  - react-native-snap-carousel lib - https://tinyurl.com/rz3krg7
 *  - carousel code example - https://tinyurl.com/vm72lmd
 */
import React from "react";
import { ViewStyle, StyleSheet, Image, Text, View } from "react-native";
import { styleVars } from "../../style";
import { MediaUnion } from "moviedb";

export type DetailsProps<T> = {
  style?: ViewStyle;
  media: T[];
};
export const Details = <T extends MediaUnion>({
  style,
  media
}: DetailsProps<T>) => {
  console.log("log within the beast");
  return (
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: `http://image.tmdb.org/t/p/w342/${media.poster_path}` }}
    ></Image>
  );
  // return <View style={styles.container}><Text>Hello hello</Text></View>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    height: 440,
    width: 400
  },
  image: {
    height: 800,
    width: 400,
  }
});
