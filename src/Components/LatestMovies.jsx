import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchlatest, selectMovies } from "../features/movie/movieSlice";
import MovieList from "./MovieList";

const LatestMovies = () => {
  const dispatch = useDispatch();
  const { latest } = useSelector(selectMovies);
  useEffect(() => {
    dispatch(fetchlatest());
  }, []);

  return <MovieList movies={latest} title="Latest Movies" />;
};

export default LatestMovies;
