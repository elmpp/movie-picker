import React, { useCallback } from 'react'
import { styleVars } from "../../style";
import { Card } from "react-native-paper";
import { ViewStyle, StyleSheet } from "react-native";
import { MediaUnion } from "moviedb";
import { linker } from '../../lib/navigation/linking';
import {getMediaType} from '../../lib/util/media-util'
import { ThemedTitle } from './themed-title';


export type MediaCardProps<T> = {
  style?: ViewStyle
  media: T
}
export const MediaCard = <T extends MediaUnion>({style, media}: MediaCardProps<T>) => {
  const pressHandler = useCallback(
    () => linker.navigate({routeName: 'details', params: {id: media.id, mediaType: getMediaType(media)}}),
    [media],
  )
  return (
      <Card elevation={9} style={[styles.mediaCard, style]} onPress={pressHandler}>
        <Card.Cover
          source={{ uri: `http://image.tmdb.org/t/p/w342/${media.poster_path}` }}
          style={styles.mediaCardImage}
        />
        <ThemedTitle media={media} style={styles.titleBar} />
      </Card>
  );
};

const styles = StyleSheet.create({
  mediaCard: {
    flex: 1,
    height: styleVars.carouselHeight
  },
  mediaCardImage: {
    flex: 1,
    height: styleVars.carouselHeight
  },
  titleBar: {
    position: "absolute",
    bottom: 10,
    zIndex: 3,
    left: 0,
    right: 0,
  },
});
