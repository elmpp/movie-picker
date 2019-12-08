/**
 * This will be the client for interacting with TMDB Api
 *
 *  - TMDB api docs - https://tinyurl.com/qx7gs76
 *  - 'MovieDB' package that does our work - https://tinyurl.com/wxogtvz
 */

import {TmdbApi} from 'tmdb-typescript-api'

export const tmdb = new TmdbApi('0e7df4a59c9729d3a03fac42d76d7ff8')
