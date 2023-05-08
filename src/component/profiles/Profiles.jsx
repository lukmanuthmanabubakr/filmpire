import React, {useEffect} from 'react'
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp, Favorite } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Features/auth';

const Profiles = () => {
  const { user } = useSelector(userSelector)
  console.log(user)
  const logout = () => {
    localStorage.clear()
    window.location.href = '/'
  }
  return (
    <Box>
          <Box display='flex' justifyContent='space-between'>
              <Typography variant='h4' gutterBottom>My Profile</Typography>
              <Button color='inherit' onClick={logout}>
                logout &nbsp; <ExitToApp/>
              </Button>
          </Box>

          {!Favorite.length ? 
            <Typography variant='h5'> Add favorite or watchlist some movies to see here</Typography>
            :(
              <Box> favorite movies </Box>
            )
          }
    </Box>
  );
}

export default Profiles

