/**
 * Basically the first page but we'll term it the 'discover' page
 */

import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { withTheme } from "react-native-paper";
import { useResponsiveVal } from "../../lib/hooks/use-responsive-val";
import { Carousel, CarouselProps } from "./carousel";
import { tmdb } from "../../lib/api/tmdb";
import { MediaContainer } from "../container/media-container";
import { Movie, TvShow, Callback} from "moviedb";
import { styleVars } from "../../style";

type DiscoverProps = ThemedProps<{}>;
export const Discover = withTheme<DiscoverProps, {}>(({}) => {
  const popularMoviesMemoized = useCallback<(cb: Callback<Movie>) => ReturnType<typeof tmdb.getPopularMovies>>(
    cb => tmdb.getPopularMovies(cb),
    []
  );
  const popularTvsMemoized = useCallback<(cb: Callback<TvShow>) => ReturnType<typeof tmdb.getPopularTvs>>(
    cb => tmdb.getPopularTvs(cb),
    []
  );
  const genreFamilyMoviesMemoized = useCallback<(cb: Callback<Movie>) => ReturnType<typeof tmdb.discoverMovie>>(
    cb => tmdb.discoverMovie("Family", cb),
    []
  );
  const genreDocumentaryMoviesMemoized = useCallback<(cb: Callback<Movie>) => ReturnType<typeof tmdb.discoverMovie>>(
    cb => tmdb.discoverMovie("Documentary", cb),
    []
  );

  return (
    <>
      <View
        style={[
          styles.heroContainer,
          { marginBottom: useResponsiveVal("gutter") }
        ]}
      >
        <MediaContainer<Movie, CarouselProps<Movie>>
          cb={popularMoviesMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "100%" } }}
        />
      </View>
      <View style={styles.heroContainer}>
        <MediaContainer<TvShow, CarouselProps<TvShow>>
          cb={popularTvsMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "33%" } }}
        />
        <MediaContainer<Movie, CarouselProps<Movie>>
          cb={genreFamilyMoviesMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "33%" } }}
        />
        <MediaContainer<Movie, CarouselProps<Movie>>
          cb={genreDocumentaryMoviesMemoized}
          Component={Carousel}
          componentProps={{ style: { flexBasis: "33%" } }}
        />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    height: styleVars.carouselHeight,
  }
});
