import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "react-native-paper";
import { tmdb } from "../../lib/api/tmdb";
import { MediaContainer } from "../container/media-container";
import { MediaUnion, MediaTypeUnion, Response, SingularCallback } from "moviedb";
import {WatchProps, Watch} from '../presentational/watch'

type WatchContainerProps = ThemedProps<{id: number, mediaType: MediaTypeUnion }>;
export const WatchContainer = withTheme<WatchContainerProps, {}>(({id, mediaType}) => {
  const getMediaMemoized = useCallback<
    (cb: SingularCallback<MediaUnion>) => Response<MediaUnion>
  >(cb => {
    if (mediaType === 'movie') return tmdb.movieInfo(id, cb)
    if (mediaType === 'tv') return tmdb.tvInfo(id, cb)
  }, []);

  return (
      <View style={styles.container}>
        <MediaContainer<MediaUnion, WatchProps<MediaUnion>>
          cb={getMediaMemoized}
          Component={Watch}
          componentProps={{}}
        />
      </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
