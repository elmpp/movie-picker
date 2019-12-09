/**
 * Basically the first page but we'll term it the 'discover' page
 */

import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "react-native-paper";
import { tmdb } from "../../lib/api/tmdb";
import { MediaContainer } from "../container/media-container";
import { MediaUnion, MediaTypeUnion, Response, SingularCallback } from "moviedb";
import {DetailsProps, Details} from '../presentational/details'

type DetailsContainerProps = ThemedProps<{id: number, mediaType: MediaTypeUnion }>;
export const DetailsContainer = withTheme<DetailsContainerProps, {}>(({id, mediaType}) => {
  const getMediaMemoized = useCallback<
    (cb: SingularCallback<MediaUnion>) => Response<MediaUnion>
  >(cb => {
    if (mediaType === 'movie') return tmdb.movieInfo(id, cb)
    if (mediaType === 'tv') return tmdb.tvInfo(id, cb)
  }, []);

  return (
      <View style={styles.container}>
        <MediaContainer<MediaUnion, DetailsProps<MediaUnion>>
          cb={getMediaMemoized}
          Component={Details}
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
