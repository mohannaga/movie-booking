import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      {movies.status === "loading" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent={"space-evenly"}
        sx={{ padding: "1rem" }}
        gap="1rem"
      >
        {movies.data?.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </Stack>
    </>
  );
};

export default MovieList;
