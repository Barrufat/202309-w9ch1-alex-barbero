import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmStructure } from "./types";

interface FilmsStateStructure {
  films: FilmStructure[];
}

const initialMovies: FilmsStateStructure = { films: [] };

const filmsSlice = createSlice({
  name: "films",
  initialState: initialMovies,
  reducers: {
    loadFilms: (
      currentState: FilmsStateStructure,
      action: PayloadAction<FilmStructure[]>,
    ): FilmsStateStructure => ({ ...currentState, films: action.payload }),
  },
});

export const { loadFilms: loadMoviesActionCreator } = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;
