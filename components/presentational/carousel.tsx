/**
 * Takes media and builds a carousel
 *
 *  - react-native-snap-carousel lib - https://tinyurl.com/rz3krg7
 *  - carousel code example - https://tinyurl.com/vm72lmd
 */
import React, { useRef } from "react";
import { ViewStyle } from "react-native";
import SnapCarousel from "react-native-snap-carousel";
import { MediaCard } from "./media-card";
import { styleVars } from "../../style";
import { MediaUnion, GenreUnion } from "moviedb";
import { useResponsiveVal } from "../../lib/hooks/use-responsive-val";

const renderItem = <T extends any>({
  item,
  index
}: {
  item: T;
  index: number;
}) => {
  return <MediaCard<T> key={`carousel-${index}`} media={item} />;
};

export type CarouselProps<T> = {
  style?: ViewStyle;
  media: T[];
  offset?: number
  tileMargin?: number
  genre: GenreUnion
};
export const Carousel = React.memo(
  <T extends MediaUnion>({ style, media, genre, offset = 0, tileMargin = 0 }: CarouselProps<T>) => {
    const carouselRef = useRef();
    const marginBottom = useResponsiveVal('gutter')

    // ensure our media objects have our "category"
    media = media.map(aMedia => ({...aMedia, genre}))

    return (
      <SnapCarousel
        ref={c => {
          carouselRef.current = c;
        }}
        data={media}
        renderItem={renderItem}
        sliderWidth={1}
        itemWidth={styleVars.carouselItemWidth}
        style={[{marginBottom}, style]}
        contentContainerCustomStyle={{ left: offset}}
        slideStyle={{marginRight: tileMargin}}
        inactiveSlideScale={0.9}
        loop
      />
    );
  }
);

