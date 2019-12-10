import React from 'react'
import { withTheme, Card } from 'react-native-paper';
import { MediaUnion } from 'moviedb';
import { isTvShow, isMovie } from '../../lib/util/media-util';
import { styleAux } from '../../style';
import { ViewStyle, TextStyle } from 'react-native';

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
      return <Card.Title {...defaultProps} style={style} titleStyle={defaultProps.subtitleStyle} {...props} title={media.title} />;
    }
    if (isTvShow(media)) {
      return <Card.Title {...defaultProps} style={style} titleStyle={defaultProps.subtitleStyle} {...props} title={media.name} />;
    }
  }
  if (isMovie(media)) {
    return <Card.Title {...defaultProps} {...props} style={style} title={media.overview} subtitle={media.title} />;
  }
  if (isTvShow(media)) {
    return <Card.Title {...defaultProps} {...props} style={style} title={media.overview} subtitle={media.name} />;
  }
});
