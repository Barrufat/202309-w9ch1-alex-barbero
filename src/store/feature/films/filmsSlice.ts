import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmStructure } from "./types";

interface FilmsStateStructure {
  films: FilmStructure[];
}

const initialMovies: FilmsStateStructure = { films: [] };

export const filmsSlice = createSlice({
  name: "films",
  initialState: initialMovies,
  reducers: {
    loadFilms: (
      _currentState: FilmsStateStructure,
      action: PayloadAction<FilmStructure[]>,
    ) => {
      return { films: [...action.payload] };
    },
  },
});

export const { loadFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
