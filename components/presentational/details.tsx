/**
 * Takes media and builds a carousel
 *
 *  - react-native-snap-carousel lib - https://tinyurl.com/rz3krg7
 *  - carousel code example - https://tinyurl.com/vm72lmd
 */
import React, { useCallback } from "react";
import { ViewStyle, StyleSheet, Image, Text, View } from "react-native";
import { styleVars, styleAux } from "../../style";
import { MediaUnion } from "moviedb";
import { Card, withTheme, Paragraph } from "react-native-paper";
import { linker } from "../../lib/navigation/linking";
import { getMediaType } from "../../lib/util/media-util";
import { ThemedTitle } from "./themed-title";

type DetailsCardProps = ThemedProps<{
  style?: ViewStyle;
  media: MediaUnion;
}>;
const DetailsCard = withTheme(({ style, media, theme }: DetailsCardProps) => {
  const pressHandler = useCallback(
    () =>
      linker.navigate({
        routeName: "details",
        params: { id: media.id, mediaType: getMediaType(media) }
      }),
    [media]
  );
  return (
    <Card
      elevation={9}
      style={[
        {
          margin: styleAux.responsiveVal("gutter"),
          backgroundColor: styleAux.addOpacity(theme.colors.surface, 0.8)
        },
        styles.detailsCard,
        style
      ]}
      onPress={pressHandler}
    >
      <Card.Content>
        <ThemedTitle media={media} titleOnly />
        <Paragraph style={{paddingHorizontal: styleAux.responsiveVal('gutter') + 5}}>{media.overview}</Paragraph>
      </Card.Content>
    </Card>
  );
});

export type DetailsProps<T> = {
  media: T[];
};
export const Details = <T extends MediaUnion>({
  media: [media]
}: DetailsProps<T>) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `http://image.tmdb.org/t/p/w342/${media.poster_path}` }}
      />
      <DetailsCard style={styleAux.positionBottom} media={media} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  detailsCard: {
    flex: 1,
    height: styleVars.carouselHeight,
    marginBottom: 0
  }
});
