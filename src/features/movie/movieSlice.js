import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  upComing: { status: "idle", data: [] },
  latest: { status: "idle", data: [] },
  events: { status: "idle", data: [] },
};

export const fetchUpComming = createAsyncThunk(
  "movie/fetchUpComming",
  async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/upcomingMovies`
      );
      http: return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchlatest = createAsyncThunk("movie/latest", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/latest`
    );
    http: return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchEvents = createAsyncThunk("movie/events", async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/events`
    );
    http: return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpComming.pending, (state) => {
        state.upComing.status = "loading";
        state.upComing.data = [];
      })
      .addCase(fetchUpComming.fulfilled, (state, action) => {
        state.upComing.status = "idle";
        state.upComing.data = action.payload;
      })
      .addCase(fetchUpComming.rejected, (state) => {
        state.upComing.status = "error";
        state.upComing.data = [];
      })
      .addCase(fetchlatest.pending, (state) => {
        state.latest.status = "loading";
        state.latest.data = [];
      })
      .addCase(fetchlatest.fulfilled, (state, action) => {
        state.latest.status = "idle";
        state.latest.data = action.payload;
      })
      .addCase(fetchlatest.rejected, (state) => {
        state.latest.status = "error";
        state.latest.data = [];
      })
      .addCase(fetchEvents.pending, (state) => {
        state.events.status = "loading";
        state.events.data = [];
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.events.status = "idle";
        state.events.data = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.events.status = "error";
        state.events.data = [];
      });
  },
});

export const selectMovies = (state) => state.movies;

export default movieSlice.reducer;
