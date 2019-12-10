
/**
 *  - Non-typed tmdb library - https://tinyurl.com/uh3x3gh
 */
declare module 'moviedb' {
  export interface Movie {
    id: number
    title: string
    original_title: string
    poster_path: string
    adult: boolean
    overview: string
    release_date: Date
    genre_ids: number[]
    original_language: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
    // monkeypatched properties...
    genre?: GenreUnion
  }

  export interface TvShow {
    id: number
    name: string
    original_name: string
    poster_path: string
    popularity: number
    backdrop_path: string
    vote_average: number
    overview: string
    origin_country: string[]
    genre_ids: number[]
    original_language: string
    vote_count: number
    first_air_date: Date
    // monkeypatched properties...
    genre?: GenreUnion
  }

  export type Response<T> = {
    page: number
    results: T[]
  }
  export type SingularResponse<T> = T
  export type ResponseUnion<T> = Response<T> | SingularResponse<T>

  export type Callback<T> = (err?: Error, result?: Response<T>) => void
  export type SingularCallback<T> = (err?: Error, result?: SingularResponse<T>) => void

  export type MediaUnion = Movie | TvShow
  export type MediaTypeUnion = 'movie' | 'tv'

  export type GenreUnion = 'popular_movie' | 'popular_tv' | 'family' | 'documentary'

  // full api list here - https://tinyurl.com/rcpzvjz
  export type Client = {
    discoverMovie: (args: {with_genres: string}, Callback) => Response<Movie>
    miscPopularMovies: (Callback) => Response<Movie>
    miscPopularTvs: (Callback) => Response<TvShow>
    movieInfo: (args: {id: number}, Callback) => Response<Movie>
    tvInfo: (args: {id: number}, Callback) => Response<TvShow>
  }
  type Factory = (apiKey: string) => Client

  const factory: Factory
  export default factory
}