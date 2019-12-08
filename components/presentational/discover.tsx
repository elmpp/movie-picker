/**
 * Basically the first page but we'll term it the 'discover' page
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import {
  withTheme,
} from "react-native-paper";
import {useResponsiveVal} from '../../lib/hooks/useResponsiveVal'
import {Carousel} from './carousel'
import { Movie } from "tmdb-typescript-api";
import { Theme } from "../../style/theme/common";

type DiscoverProps = ThemedProps<{
  movies: Movie[]
}>
export const Discover = withTheme<DiscoverProps, {}>(({movies}) => {
  return (
    <>
      <View style={[styles.heroContainer, {marginBottom: useResponsiveVal('gutter')}]}>
        <Carousel movies={movies} style={{flexBasis: '100%'}} />
      </View>
      <View style={styles.heroContainer}>
        <Carousel movies={movies} style={{flexBasis: '33%', marginRight: useResponsiveVal('gutter')}} />
        <Carousel movies={movies} style={{flexBasis: '33%', marginRight: useResponsiveVal('gutter')}} />
        <Carousel movies={movies} style={{flexBasis: '33%'}} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  heroContainer: {
    // flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});