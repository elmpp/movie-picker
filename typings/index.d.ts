
interface Dictionary<T> {
  [index: string]: T
}

type DictionaryUnion<T, K extends string> = {
  [key in K]: T
}