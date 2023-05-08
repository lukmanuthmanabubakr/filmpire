import React from 'react';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack} from  '@mui/icons-material';
import {Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating} from '@mui/material'

import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './Style'
import axios from 'axios';
import { useGetMovieQuery, useGetRecommendationsQuery } from '../Services/TMDB';
import genreIcons from "../../assets/genres";
import { MovieList } from '..';



const Moviesinfo = () => {
  const  {id} = useParams()
  const classes = useStyles()
  const dispatch = useDispatch()

  const isMovieFavorited = true
  const isMovieListed = true

  const addToFavorite = () => {

  }
  const addToWatchList = () => {

  }

  const {data, isFetching, error} = useGetMovieQuery(id);

  const {data : recommendations, isFetching : isRecommendationsFetching} =
   useGetRecommendationsQuery({list: '/recommendations',
    movie_id: id
  })
  console.log(recommendations)

  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem' />
      </Box>
    )
  }

  if(error){
    return(
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Link to='/'>
            
        </Link>
      </Box>
    )
  }
  // const  {id} = useParams()
  // const classes = useStyles()
  return (
    <Grid container className={classes.containerSpaceAround} >
      <Grid item sm={12} lg={4}>
          <img className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data ?.poster_path}`} alt={data?.title}/>
      </Grid>
      <Grid item container direction='column' lg={7}>
          <Typography variant='h3' align='center' gutterBottom>
              {data.title} ({data.release_date.split('-')[0]})
          </Typography>

          <Typography variant='h5' align='center' gutterBottom>
            {data?.tagline}
          </Typography>

          <Grid item className={classes.containerSpaceAround}>
            <Box display='flex' align="center">
              <Rating readOnly value={data.vote_average / 2}/>
              <Typography variant='subtitle' gutterBottom style={{marginLeft: '10px'}}>
                  {data.vote_average} / 10
              </Typography>
            </Box>
            <Typography variant='h6' align='center' gutterBottom>
              {data?.runtime}min {data?.spoken_languages.length > 0? `/${data?.spoken_languages[0].name}` : ''}
            </Typography>
          </Grid>
          <Grid item className={classes.genresContainer}>
            {
              data?.genres?.map((genre) => (
                <Link key={genre.name} className={classes.link} to='/' onClick={() =>
                  dispatch(selectGenreOrCategory(genre.id))}>

                  <img
                      src={genreIcons[genre.name.toLowerCase()]}
                      className={classes.genreImage}
                      height={30}
                  />
                </Link>
              ))
            }
          </Grid>
          <Typography variant='h5' gutterBottom style={{marginTop: '1'}}> Overview </Typography>
          <Typography style={{marginBottom: "2rem"}}>
            {data?.overview}
          </Typography>

          <Grid item container style={{marginTop: '2rem'}}>
            <div className='classes.buttonsContainer'>
              <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
                <ButtonGroup size='small' variant='outlined'>
                  <Button target='_blank' rel='noopener noreferre' href= {data?.homepage} endIcon={<Language/>}>Website</Button>
                  <Button target='_blank' rel='noopener noreferre' href= {`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon/>}>Imdb</Button>
                  <Button onClick={() => {

                  }}  href='#'endIcon={<Theaters/>}>
                     Trailer
                  </Button>
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.buttonsContainer}>
                <ButtonGroup size='small' variant='outlined'>
                  <Button onClick={addToFavorite} endIcon={isMovieFavorited ? <FavoriteBorderOutlined/> :  <Favorite/>}>
                    {
                      isMovieFavorited ? 'UnFavorite' : 'Favorite'
                    }
                  </Button>
                  <Button onClick={addToWatchList} endIcon={isMovieListed ? <Remove/> :  <PlusOne/>}>
                   WatchList
                  </Button>
                  <Button endIcon={<ArrowBack/>} sx={{borderColor: 'primary.main'}}>
                    <Typography style={{textDecoration: "none"}} component={Link} to='/' color='inherit' variant='subtitle2'>
                      Back
                    </Typography>
                  </Button>
                </ButtonGroup>
              </Grid>
            </div>
          </Grid>
      </Grid>
      {/* Recommendation */}
      <Box marginTop= '5rem' width='100%'>
        <Typography variant='h3' gutterBottom align='center'>
            <h2>You Might Also Like</h2>
        </Typography>
        { recommendations ? <MovieList movies={recommendations} numberOfMovies={12}/> : <Box>
            Sorry Nothing was found
          </Box>
        }
      </Box>
    </Grid>
  )
}

export default Moviesinfo