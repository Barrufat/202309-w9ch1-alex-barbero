import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import filmsMock from "../mocks/filmsMock";
import { filmsReducer } from "../store/feature/films/filmsSlice";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      filmsState: filmsReducer,
    },
    preloadedState: { filmsState: { films: filmsMock } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>,
  );
};

export default customRender;
