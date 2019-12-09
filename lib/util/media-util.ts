import { MediaTypeUnion, TvShow, Movie, MediaUnion, SingularResponse, Response } from "moviedb"

export const isMovie = (media: any): media is Movie => {
  return typeof media.original_title !== 'undefined'
}
export const isTvShow = (media: any): media is TvShow => {
  return typeof media.original_name !== 'undefined'
}

export const isResponse = <T extends MediaUnion>(response: any): response is Response<T> => {
  return typeof response.results !== 'undefined'
}
export const isSingularResponse = <T extends MediaUnion>(response: any): response is SingularResponse<T> => {
  return typeof response.results === 'undefined'
}

export const getMediaType = (media: MediaUnion): MediaTypeUnion => {
  if (isMovie(media)) return 'movie'
  if (isTvShow(media)) return 'tv'
}