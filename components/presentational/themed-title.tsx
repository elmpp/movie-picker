/**
 *  - ionicon definitions - https://tinyurl.com/y9zhnw97
 */
import React from 'react'
import { withTheme, Card } from 'react-native-paper';
import { MediaUnion, GenreUnion } from 'moviedb';
import { isTvShow, isMovie } from '../../lib/util/media-util';
import { styleAux } from '../../style';
import { ViewStyle, TextStyle } from 'react-native';
import {Ionicons as Icons} from '@expo/vector-icons'



type GenreIconProps = ThemedProps<{ media: MediaUnion }>
export const GenreIcon = withTheme(({ media, theme }: GenreIconProps) => {
  const styles = {
    top: 30,
    right: 10,
    color: theme.colors.onSurface,
    height: 70,
    fontWeight: 600,
  }

  const genreMap: DictionaryUnion<string, GenreUnion> = {popular_movie: 'ios-trending-up', popular_tv: 'ios-trending-up', family: 'ios-contacts', documentary: 'ios-document'}

  return (
    <Icons size={30} name={genreMap[media.genre]} style={styles} />
  )
})



type ThemedTitleProps = ThemedProps<{
  style?: ViewStyle,
  media: MediaUnion,
  titleOnly?: boolean,
}> & Partial<React.ComponentProps<typeof Card.Title>>
export const ThemedTitle = withTheme(({ theme, media, style: defaultStyle, titleOnly, ...props }: ThemedTitleProps) => {
  const style = {
    backgroundColor: styleAux.addOpacity(theme.colors.surface),
    ...defaultStyle as ViewStyle,
  } as ViewStyle
  const defaultProps = {
    titleStyle: {
      ...theme.fonts.light,
      fontSize: 14,
      color: theme.colors.onSurface,
      maxWidth: '70%',
    } as TextStyle,
    subtitleStyle: {
      ...theme.fonts.regular,
      lineHeight: 24,
      fontSize: 22,
      color: theme.colors.onSurface
    } as TextStyle,
  };

  if (titleOnly) {
    if (isMovie(media)) {
      return <Card.Title right={() => <GenreIcon media={media} />} {...defaultProps} titleStyle={defaultProps.subtitleStyle} {...props} title={media.title} />;
    }
    if (isTvShow(media)) {
      return <Card.Title right={() => <GenreIcon media={media} />} {...defaultProps} titleStyle={defaultProps.subtitleStyle} {...props} title={media.name} />;
    }
  }
  if (isMovie(media)) {
    return <Card.Title right={() => <GenreIcon media={media} />} {...defaultProps} {...props} style={style} title={media.overview} subtitle={media.title} />;
  }
  if (isTvShow(media)) {
    return <Card.Title  right={() => <GenreIcon media={media} />} {...defaultProps} {...props} style={style} title={media.overview} subtitle={media.name} />;
  }
});
