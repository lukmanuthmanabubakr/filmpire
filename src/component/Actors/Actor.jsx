//use useparam to get actor id
//make a new call using redux toolkit query => to get actor details call
//research tmdb api docs
//use newly

import React, { useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { useGetActorsDetailsQuery } from "../Services/TMDB";

const Actor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isFetching, error } = useGetActorsDetailsQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate.goBack()}
        ></Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container>Actor {id}</Grid>
    </>
  );
};

export default Actor;
