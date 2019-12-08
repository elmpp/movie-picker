import React from 'react'
import { styleVars } from "../../style";
import { Card, withTheme } from "react-native-paper";
import { ViewStyle, StyleSheet } from "react-native";
import { TvShow, Movie } from "moviedb";

const ThemedTitle = withTheme(({ theme, ...props }: any) => {
  const defaultProps = {
    style: styles.mediaCardTitleContainer,
    titleStyle: {
      ...theme.fonts.light,
      fontSize: 14,
      color: theme.colors.surface
    },
    subtitleStyle: {
      ...theme.fonts.regular,
      lineHeight: 24,
      fontSize: 22,
      color: theme.colors.surface
    }
  };
  return <Card.Title {...defaultProps} {...props} />;
});

export type MediaCardProps<T> = {
  style?: ViewStyle
  media: T
}
export const MediaCard = <T extends any>({style, media}: MediaCardProps<T>) => {
  return (
    <Card elevation={9} style={[styles.mediaCard, style]}>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={styles.mediaCardImage}
      />
      <ThemedTitle title="Card Title" subtitle="Card Subtitle" />
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
