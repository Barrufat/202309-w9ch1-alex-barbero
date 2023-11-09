import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilmCard from "./FilmCard";
import filmsMock from "../../mocks/filmsMock";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a FilmCard component", () => {
  describe("When it recieves the Avatar film", () => {
    test("It should show 'Avatar' in a heading", () => {
      const expectedFilmTitle = "Avatar";

      render(
        <Provider store={store}>
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
        <Provider store={store}>
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
        <Provider store={store}>
          <FilmCard film={filmsMock[1]} />
        </Provider>,
      );

      const filmButton = screen.getByText(expectedButtonText);

      expect(filmButton).toBeInTheDocument();
    });
  });
});
