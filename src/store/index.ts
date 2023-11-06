import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filmsSlice } from "./feature/films/filmsSlice";

export const store = configureStore({
  reducer: {
    films: filmsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
