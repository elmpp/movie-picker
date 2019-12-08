/**
 * This will be the client for interacting with TMDB Api.
 * Essentially a small facade onto the whole API as we just
 * need movie stuff
 *
 *  - TMDB api docs - https://tinyurl.com/qx7gs76
 *  - 'MovieDB' package that does our work - https://tinyurl.com/wxogtvz
 */

import {TmdbApi} from 'tmdb-typescript-api'

const tmdbApi = new TmdbApi('0e7df4a59c9729d3a03fac42d76d7ff8')

export const tmdb = {
  getMoviesByCategory: ()
}
