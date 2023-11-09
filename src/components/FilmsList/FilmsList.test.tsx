import { screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import FilmsList from "./FilmsList";

describe("Given a FilmsList component", () => {
  describe("When it receives a list of films ", () => {
    test("It should show 'Avatar' in an accessible title", async () => {
      const expectedFilmTitle = "Avatar";

      customRender(<FilmsList />);

      const filmTitleElement = screen.getByText(expectedFilmTitle);

      expect(filmTitleElement).toBeInTheDocument();
    });
  });
});
