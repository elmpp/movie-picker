import React, { useCallback } from 'react'
import { styleVars } from "../../style";
import { Card, withTheme } from "react-native-paper";
import { ViewStyle, StyleSheet } from "react-native";
import { TvShow, Movie, MediaUnion } from "moviedb";
import { linker } from '../../lib/navigation/linking';

const isMovie = (media: any): media is Movie => {
  return typeof media.original_title !== 'undefined'
}
const isTvShow = (media: any): media is TvShow => {
  return typeof media.original_name !== 'undefined'
}

type ThemedTitleProps = ThemedProps<{
  media: MediaUnion
}> & Partial<React.ComponentProps<typeof Card.Title>>
const ThemedTitle = withTheme(({ theme, media, ...props }: ThemedTitleProps) => {
  const defaultProps = {
    style: styles.mediaCardTitleContainer,
    titleStyle: {
      ...theme.fonts.light,
      fontSize: 14,
      color: theme.colors.surface,
      maxWidth: '70%',
    },
    subtitleStyle: {
      ...theme.fonts.regular,
      lineHeight: 24,
      fontSize: 22,
      color: theme.colors.surface
    }
  };

  if (isMovie(media)) {
    return <Card.Title {...defaultProps} {...props} title={media.overview} subtitle={media.title} />;
  }
  if (isTvShow(media)) {
    return <Card.Title {...defaultProps} {...props} title={media.overview} subtitle={media.name} />;
  }
});

export type MediaCardProps<T> = {
  style?: ViewStyle
  media: T
}
export const MediaCard = <T extends MediaUnion>({style, media}: MediaCardProps<T>) => {
  const pressHandler = useCallback(
    () => linker.navigate({routeName: 'details', params: {id: media.id}}),
    [media],
  )
  return (
      <Card elevation={9} style={[styles.mediaCard, style]} onPress={pressHandler}>
        <Card.Cover
          source={{ uri: `http://image.tmdb.org/t/p/w342/${media.poster_path}` }}
          style={styles.mediaCardImage}
        />
        <ThemedTitle media={media} />
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
  mediaCardTitleContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 10,
    zIndex: 3,
    left: 0,
    right: 0
  }
});
