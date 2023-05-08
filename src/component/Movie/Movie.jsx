import React from 'react'
import { Typography, Grid, Grow, Tooltip,Rating } from '@mui/material'
import {Link} from 'react-router-dom'
import useStyle from './Styles'


const Movie = ({movie, i}) => {
    const classes = useStyle()
    // console.log({movie, i});
  return (
    <Grid item xs={12} md={4} lg={3} xl={2} className={classes
    .movie}>
        <Grow in key={i} timeout={(i + 1) * 1000}>
            <Link className={classes.links} to={`/movie/${movie.id}`}>
            <img alt={movie.title} className={classes.image} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}/>
            </Link>
          
        </Grow>
       
        <Typography className={classes.title} variant='h5'>
          {movie.title}
        </Typography>
           <Tooltip disableTouchListener title= {`${movie.vote_average} / 10`}>
            <div>
                <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
           </Tooltip>
    </Grid>
  )
}

export default Movie