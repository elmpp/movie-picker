/**
 * This will be the client for interacting with TMDB Api.
 * Essentially a small facade onto the whole API as we just
 * need movie stuff
 *
 *  - TMDB api docs - https://tinyurl.com/qx7gs76
 *  - 'MovieDB' package that does our work - https://tinyurl.com/uh3x3gh
 */

import movieDbModule, { Callback, Movie, TvShow, SingularResponse, SingularCallback } from 'moviedb'
const movieDb = movieDbModule('0e7df4a59c9729d3a03fac42d76d7ff8')

const genreMap = {
  'Family': '10751',
  'Documentary': '99',
}

export const tmdb = {
  discoverMovie: (category: keyof typeof genreMap, callback: Callback<Movie>) => movieDb.discoverMovie({with_genres: genreMap[category]}, callback), // api browser - https://tinyurl.com/y7f8ragw
  getPopularMovies: (callback: Callback<Movie>) => movieDb.miscPopularMovies(callback), // api browser - https://tinyurl.com/t4zvlon
  getPopularTvs: (callback: Callback<TvShow>) => movieDb.miscPopularTvs(callback), // api browser - https://tinyurl.com/rtj5yqb
  movieInfo: (id: number, callback: SingularCallback<Movie>) => movieDb.movieInfo({id}, callback), // api browser - https://tinyurl.com/yc6k3op9
  tvInfo: (id: number, callback: SingularCallback<TvShow>) => movieDb.tvInfo({id}, callback),
}
