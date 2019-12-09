/**
 * Holds state for api responses. Takes a callback to allow reuse across
 * tmdb api endpoints
 */

import React, { useLayoutEffect } from "react";
import { useState, useEffect } from "react";
import { Response, SingularResponse, ResponseUnion, MediaUnion } from "moviedb";
import { View, Text } from "react-native";
import {isResponse, isSingularResponse} from '../../lib/util/media-util'

type MediaContainerProps<T, U> = {
  cb: (...args: any) => Response<T>;
  Component: React.ComponentType<Omit<U, "media"> & { media: T[] }>;
  componentProps: Omit<U, "media">;
};
export const MediaContainer = <T extends MediaUnion, U>({
  cb,
  Component,
  componentProps
}: MediaContainerProps<T, U>) => {
  const [media, setMedia] = useState<T[]>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    (async () => {
      await cb((e?: Error, result?: ResponseUnion<T>) => {
        if (e) {
          console.error(`Error found: ${e.message}`)
          setError(e.message)
        }
        if (isResponse<T>(result)) {
// const util = require('util')
// console.debug('result.results', util.inspect(result, {showHidden: false, depth: undefined, colors: true}))
          setMedia(result.results)
        }
        if (isSingularResponse<T>(result)) {
          setMedia([result])
        }
      })
      })();
  }, []);


  return (
    (error && (
      <View>
        <Text>{`Proper Fail Whale Component Goes Here (message: ${error})`}</Text>
      </View>
    )) ||
    (typeof media === "undefined" && (
      <View>
        <Text>Loading...</Text>
      </View>
    )) || <Component media={media} {...componentProps} />
  );
};
