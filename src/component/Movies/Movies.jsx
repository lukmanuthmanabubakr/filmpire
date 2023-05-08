import React from 'react'
import {useState, useEffect} from 'react'
import {Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../Services/TMDB';
import { selectGenreOrCategory } from '../../Features/CurrentGenresOrCategory';
import { MovieList } from '..'

const Movies = () => {
  const [page, setPage] = useState(1)
  const {genreIdOrCategoryName, searchQuery} = useSelector((state) => state.currentGenreOrCategory)
  const { data, error, isFetching }= useGetMoviesQuery({genreIdOrCategoryName, page, searchQuery});
  
  if(isFetching) {
    return (
      <Box display='flex'>
        <CircularProgress size='4rem'/>
      </Box>
    )
  }

  if(!data.results.length) {
    return(
      <Box display='flex' alignItems='center' marginTop='20px'>
        <Typography variant='h4' >
            No movies that match that name 
            <br />
            please search for something else     
        </Typography>
      </Box>
    )
  }

  if(error) {
    return(
      'An Error has occured' 
    )
  }
  console.log(data);
  return (
    <div>
      <MovieList movies={data}/>
    </div>
  )
}

export default Movies