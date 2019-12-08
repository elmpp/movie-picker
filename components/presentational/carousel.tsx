/**
 * Takes media and builds a carousel
 *
 *  - react-native-snap-carousel lib - https://tinyurl.com/rz3krg7
 *  - carousel code example - https://tinyurl.com/vm72lmd
 */
import React, { useRef } from 'react'
import { ViewStyle, StyleSheet } from "react-native";
import SnapCarousel from 'react-native-snap-carousel'
import {MediaCard} from './media-card'
import {styleVars} from '../../style'
import {useDimensions} from '../../lib/hooks/use-dimensions'

const renderItem = <T extends any>({item, index}: {item: T, index: number}) => {
  return <MediaCard key={`carousel-${index}`} media={item} />
}

export type CarouselProps<T> = {
  style?: ViewStyle
  media: T[]
}
export const Carousel = <T extends any>({style, media}: CarouselProps<T>) => {
  const carousel = useRef()
  const dimensions = useDimensions()

  return <SnapCarousel ref={c => {carousel.current = c}}
  data={media}
  renderItem={renderItem}
  // sliderWidth={dimensions.width}
  sliderWidth={400}
  itemWidth={styleVars.carouselItemWidth}
/>
};

const styles = StyleSheet.create({
});
