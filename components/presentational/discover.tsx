/**
 * Basically the first page but we'll term it the 'discover' page
 */

import React, { useCallback } from "react";
import { StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import { Carousel, CarouselProps } from "./carousel";
import { tmdb } from "../../lib/api/tmdb";
import { MediaContainer } from "../container/media-container";
import { Movie, TvShow, Callback } from "moviedb";
import {Box} from './box'
import { ScrollView } from "react-native-gesture-handler";

type DiscoverProps = ThemedProps<{}>;
export const Discover = withTheme<DiscoverProps, {}>(({}) => {
  const popularMoviesMemoized = useCallback<
    (cb: Callback<Movie>) => ReturnType<typeof tmdb.getPopularMovies>
  >(cb => tmdb.getPopularMovies(cb), []);
  const popularTvsMemoized = useCallback<
    (cb: Callback<TvShow>) => ReturnType<typeof tmdb.getPopularTvs>
  >(cb => tmdb.getPopularTvs(cb), []);
  const genreFamilyMoviesMemoized = useCallback<
    (cb: Callback<Movie>) => ReturnType<typeof tmdb.discoverMovie>
  >(cb => tmdb.discoverMovie("Family", cb), []);
  const genreDocumentaryMoviesMemoized = useCallback<
    (cb: Callback<Movie>) => ReturnType<typeof tmdb.discoverMovie>
  >(cb => tmdb.discoverMovie("Documentary", cb), []);

  return (
    <ScrollView>
      <Box>
        <MediaContainer<Movie, CarouselProps<Movie>>
          cb={popularMoviesMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "100%" } }}
        />
      </Box>
      <Box>
        <MediaContainer<TvShow, CarouselProps<TvShow>>
          cb={popularTvsMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "100%" } }}
        />
      </Box>
      <Box>
        <MediaContainer<Movie, CarouselProps<Movie>>
          cb={genreFamilyMoviesMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "100%" } }}
        />
      </Box>
      <Box>
        <MediaContainer<Movie, CarouselProps<Movie>>
          cb={genreDocumentaryMoviesMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "100%" } }}
        />
      </Box>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
});
