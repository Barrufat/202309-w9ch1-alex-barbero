import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilmCard from "./FilmCard";
import filmsMock from "../../mocks/filmsMock";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "../../store/feature/films/filmsSlice";

describe("Given a FilmCard component", () => {
  const mockStore = configureStore({
    reducer: {
      filmsState: filmsReducer,
    },
    preloadedState: { filmsState: { films: filmsMock } },
  });

  describe("When it recieves the Avatar film", () => {
    test("It should show 'Avatar' in a heading", () => {
      const expectedFilmTitle = "Avatar";

      render(
        <Provider store={mockStore}>
          <FilmCard film={filmsMock[0]} />
        </Provider>,
      );

      const filmTitle = screen.getByRole("heading", {
        name: expectedFilmTitle,
      });

      expect(filmTitle).toBeInTheDocument();
    });
  });

  describe("When it recieves the Avatar film", () => {
    test("It should show 'watched' inside a button", () => {
      const expectedButtonText = "watched";

      render(
        <Provider store={mockStore}>
          <FilmCard film={filmsMock[0]} />
        </Provider>,
      );

      const filmButton = screen.getByText(expectedButtonText);

      expect(filmButton).toBeInTheDocument();
    });
  });

  describe("When it recieves the I Am Legend film", () => {
    test("It should show 'unwatched' inside a button", () => {
      const expectedButtonText = "unwatched";

      render(
        <Provider store={mockStore}>
          <FilmCard film={filmsMock[1]} />
        </Provider>,
      );

      const filmButton = screen.getByText(expectedButtonText);

      expect(filmButton).toBeInTheDocument();
    });
  });
});
