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

    toggleWatchedFilms: (
      currentState: FilmsStateStructure,
      action: PayloadAction<number>,
    ): FilmsStateStructure => ({
      ...currentState,
      films: currentState.films.map((film) => ({
        ...film,
        isWatched:
          film.id === action.payload ? !film.isWatched : film.isWatched,
      })),
    }),

    deleteFilm: (currentState, action) => ({
      ...currentState,
      films: currentState.films.filter((film) => film.id !== action.payload),
    }),
  },
});

export const { loadFilms: loadMoviesActionCreator } = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;
