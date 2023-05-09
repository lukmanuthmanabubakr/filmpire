//use useparam to get actor id
//make a new call using redux toolkit query => to get actor details call
//research tmdb api docs
//use newly 




import React, {useState} from 'react'
import {Box, Button, CircularProgress, Grid, Typography} from '@mui/material';
import {useHistory, useParams} from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const Actor = () => {
  const {id} = useParams()
  return (
    <div>
      Actor {id}
    </div>
  )
}

export default Actor