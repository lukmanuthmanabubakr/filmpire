
// import { useNavigate, useParams } from "react-router-dom";
// import { ArrowBack } from "@mui/icons-material";
// import { useGetActorsDetailsQuery } from "../Services/TMDB";
// import { ClassNames } from "@emotion/react";
// import useStyles from '../Actors/Stlye'

// const Actor = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { data, isFetching, error } = useGetActorsDetailsQuery(id);

//   if (isFetching) {
//     return (
//       <Box display="flex" justifyContent="center">
//         <CircularProgress size="8rem" />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center">
//         <Button
//           startIcon={<ArrowBack />}
//           onClick={() => navigate.goBack()}
//         ></Button>
//       </Box>
//     );
//   }
//   return (
//     <>
//       <Grid container spacing={3}>
//         <Grid item lg={5} xl={4}>
//           <img
//             className={classes.image}
//             src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
//             alt={data.name}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Actor;
