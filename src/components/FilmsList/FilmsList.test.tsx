import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import FilmsList from "./FilmsList";

describe("Given a FilmsList component", () => {
  describe("When it receives a list of films ", () => {
    test("It should show 'films-list' in an accessible title", async () => {
      renderWithProviders(<FilmsList />);

      const listTitle = screen.getByTitle("films-list");

      expect(listTitle).toBeInTheDocument();
    });
  });
});
