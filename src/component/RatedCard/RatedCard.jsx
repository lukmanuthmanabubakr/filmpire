import React from 'react'
import { Typography, Box } from '@mui/material'
import useStyles from './Styles'
import { Movie } from '..'

const RatedCard = ({title, data}) => {
    const classes = useStyles();
  return (
    <Box>
        <Typography variant='h5' gutterBottom>{title}</Typography>
        <Box display='flex' flexWrap='wrap' className={ClassNames.container}>
            {data?.results?.map((movie, i) => (
                <Movie key={movie.id} movie={movie} i = {i} />
            ))}
        </Box>
    </Box>
  )
}

export default RatedCard