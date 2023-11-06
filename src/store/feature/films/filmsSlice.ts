import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Film } from "./types";

export const filmsSlice = createSlice({
  name: "films",
  initialState: [] as Film[],
  reducers: {
    loadFilms: (currentState, action: PayloadAction<Film>) => {
      return [...currentState, action.payload];
    },
  },
});
