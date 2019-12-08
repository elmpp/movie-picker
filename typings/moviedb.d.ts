
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
  }

  export type Response<T> = {
    page: number
    results: T[]
  }

  export type Callback<T> = (err?: Error, result?: Response<T>) => void

  // full api list here - https://tinyurl.com/rcpzvjz
  export type Client = {
    discoverMovie: (args: {with_genres: string}, Callback) => Response<Movie>
    miscPopularMovies: (Callback) => Response<Movie>
    miscPopularTvs: (Callback) => Response<TvShow>
  }
  type Factory = (apiKey: string) => Client

  const factory: Factory
  export default factory
}