import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, selectMovies } from "../features/movie/movieSlice";
import MovieList from "./MovieList";

const Events = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(selectMovies);
  useEffect(() => {
    dispatch(fetchEvents());
  }, []);
  return <MovieList movies={events} title="Events" />;
};

export default Events;
