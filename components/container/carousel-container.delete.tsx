import React from 'react'
import { useState, useEffect } from "react"
import {tmdb} from '../../lib/api/tmdb'
import {Movie, TvShow} from 'moviedb'
import {Discover} from '../presentational/discover'


export const CarouselContainer: React.FC = () => {
  const [movies, setMovies] = useState<Movie[] | TvShow[]>()
  useEffect(() => {
    tmdb.search.movies('terminator').subscribe(movies => {
      setMovies(movies.results) // @todo - pagination
    })
  }, [])

  return <Discover movies={movies} />
}