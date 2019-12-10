/**
 * Takes media and builds a carousel
 *
 *  - react-native-snap-carousel lib - https://tinyurl.com/rz3krg7
 *  - carousel code example - https://tinyurl.com/vm72lmd
 */
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ViewStyle, StyleSheet } from "react-native";
import SnapCarousel from "react-native-snap-carousel";
import { MediaCard } from "./media-card";
import { styleVars, styleAux } from "../../style";
import { useDimensions } from "../../lib/hooks/use-dimensions";
import { MediaUnion } from "moviedb";

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
};
export const Carousel = React.memo(
  <T extends MediaUnion>({ style, media, offset = 0, tileMargin = 0 }: CarouselProps<T>) => {
    const carouselRef = useRef();

    return (
      <SnapCarousel
        ref={c => {
          carouselRef.current = c;
        }}
        data={media}
        renderItem={renderItem}
        sliderWidth={1}
        itemWidth={styleVars.carouselItemWidth}
        style={[{marginBottom: styleAux.responsiveVal('gutter')}, style]}
        // contentContainerCustomStyle={{ left: -(Math.floor(Math.random() * 150) + 1) }}
        contentContainerCustomStyle={{ left: offset}}
        slideStyle={{marginRight: tileMargin}}
        inactiveSlideScale={0.9}
        loop
      />
    );
  }
);

