import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpComming, selectMovies } from "../features/movie/movieSlice";
import MovieList from "./MovieList";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upComing } = useSelector(selectMovies);
  useEffect(() => {
    dispatch(fetchUpComming());
  }, []);
  return <MovieList movies={upComing} title="Upcoming Movies" />;
};

export default UpcomingMovies;
