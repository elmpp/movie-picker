/// <reference path="./moviedb.d.ts" />



interface Dictionary<T> {
  [index: string]: T
}

type DictionaryUnion<T, K extends string> = {
  [key in K]: T
}

type ThemedProps<T> = {theme: import('../style/theme/common').Theme} & T