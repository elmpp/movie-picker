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
import { Card, withTheme, Paragraph, FAB } from "react-native-paper";
import { linker } from "../../lib/navigation/linking";
import { getMediaType } from "../../lib/util/media-util";
import { ThemedTitle } from "./themed-title";
import { useResponsiveVal } from "../../lib/hooks/use-responsive-val";
import {Platform} from 'react-native'

type DetailsCardProps = ThemedProps<{
  style?: ViewStyle;
  media: MediaUnion;
}>;
const DetailsCard = withTheme(({ style, media, theme }: DetailsCardProps) => {
  const pressHandler = useCallback(
    () => {
      linker.navigate({
        routeName: "watch",
        params: { id: media.id, mediaType: getMediaType(media) }
      })
    },
    [media]
  );
  const margin = useResponsiveVal('gutter')

  return (
    <Card
      elevation={9}
      style={[
        {
          margin,
          backgroundColor: styleAux.addOpacity(theme.colors.surface, 0.8)
        },
        styles.detailsCard,
        style
      ]}
      onPress={pressHandler}
    >
      {Platform.OS !== 'web' && <FAB
        style={styles.fab}
        small
        icon="plus"
        label="Watch"
        onPress={pressHandler}
      />}
      <Card.Content style={{paddingTop: margin}}>
        <ThemedTitle media={media} titleOnly />
        <Paragraph
          style={{ paddingHorizontal: margin + 5 }}
        >
          {media.overview}
        </Paragraph>
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
    marginBottom: 0,
  },
  fab: {
    width: 100,
    position: 'absolute',
    right: 25,
    top: -20,
  },
});
