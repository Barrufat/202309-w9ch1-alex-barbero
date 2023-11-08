import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilmCard from "./FilmCard";
import filmsMock from "../../mocks/filmsMock";

describe("Given a FilmCard component", () => {
  describe("When it recieves the Avatar film", () => {
    test("It should show 'Avatar' in a heading", () => {
      const expectedFilmTitle = "Avatar";

      render(<FilmCard film={filmsMock[0]} />);

      const filmTitle = screen.getByRole("heading", {
        name: expectedFilmTitle,
      });

      expect(filmTitle).toBeInTheDocument();
    });
  });
});
