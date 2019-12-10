/// <reference path="./moviedb.d.ts" />
/// <reference path="./expo-av.d.ts" />



interface Dictionary<T> {
  [index: string]: T
}

type DictionaryUnion<T, K extends string> = {
  [key in K]: T
}

type DeepPartial<T> = {[P in keyof T]?: DeepPartial<T[P]>}

type ThemedProps<T> = {theme: import('../style/theme/common').Theme} & T