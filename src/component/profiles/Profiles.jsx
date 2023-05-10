import React, {useEffect} from 'react'
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { userSelector } from '../../Features/auth';
import { useGetListQuery } from '../Services/TMDB';
import RatedCard from '../RatedCard/RatedCard';

const Profiles = () => {
  const { user } = useSelector(userSelector)

  const { data: favoriteMovie } = useGetListQuery({
    listName: "favorite/movies",
    accountId: "accountId:user.id",
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });
  const { data: watchlistMovies } = useGetListQuery({
    listName: "watchlist/movies",
    accountId: "accountId:user.id",
    sessionId: localStorage.getItem("session_id"),
    page: 1,
  });

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

          {!favoriteMovie?.result?.length && !watchlistMovies?.results.length ?
            <Typography variant='h5'> Add favorite or watchlist some movies to see here</Typography>
            :(
              <Box>
                <RatedCard title='Favorite' data={favoriteMovie}/>
                <RatedCard title='watchList' data={watchlistMovies}/>
              </Box>
            )
          }
    </Box>
  );
}

export default Profiles

