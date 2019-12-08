import { styleVars } from "../../style";
import { Card, withTheme } from "react-native-paper";
import { ViewStyle, StyleSheet } from "react-native";
import React from 'react'
import { Movie } from "tmdb-typescript-api";

const ThemedTitle = withTheme(({ theme, ...props }: any) => {
  const defaultProps = {
    style: styles.carouselTitleContainer,
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

interface CarouselProps {
  style?: ViewStyle
  movies: Movie[]
}
export const Carousel: React.FC<CarouselProps> = ({ style, movies }) => {
  return (
    <Card elevation={9} style={[styles.carousel, style]}>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={styles.carouselImage}
      />
      <ThemedTitle title="Card Title" subtitle="Card Subtitle" />
    </Card>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    height: styleVars.carouselHeight
  },
  carouselImage: {
    flex: 1,
    height: styleVars.carouselHeight
  },
  carouselTitleContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 10,
    zIndex: 3,
    left: 0,
    right: 0
  }
});
