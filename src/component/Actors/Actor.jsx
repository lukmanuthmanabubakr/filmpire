
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
