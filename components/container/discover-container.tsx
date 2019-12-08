import React from 'react'
import { useState, useEffect } from "react"
import {tmdb} from '../../lib/api/tmdb'
import { Movie } from "tmdb-typescript-api"
import {Discover} from '../presentational/discover'


export const DiscoverContainer: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>()
  useEffect(() => {
    tmdb.search.movies('terminator').subscribe(movies => {
      setMovies(movies.results) // @todo - pagination
    })
  }, [])

  return <Discover movies={movies} />
}