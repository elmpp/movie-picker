/**
 * Holds state for api responses. Takes a callback to allow reuse across
 * tmdb api endpoints
 */

import React from "react";
import { useState, useEffect } from "react";
import { Response } from "moviedb";
import { View, Text } from "react-native";

type MediaContainerProps<T, U> = {
  cb: (...args: any) => Response<T>;
  Component: React.ComponentType<Omit<U, "media"> & { media: T[] }>;
  componentProps: Omit<U, "media">;
};
export const MediaContainer = <T, U>({
  cb,
  Component,
  componentProps
}: MediaContainerProps<T, U>) => {
  const [media, setMedia] = useState<T[]>();
  const [error, setError] = useState<string>();
  useEffect(() => {
    (async () => {
      await cb((e?: Error, result?: Response<T>) => {
        if (e) {
          setError(e.message)
        }
        if (result) {
          setMedia(result.results)
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
