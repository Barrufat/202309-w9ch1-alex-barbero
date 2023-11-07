import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import FilmsList from "./FilmsList";
import filmsMock from "../../mocks/filmsMock";

describe("Given a FilmsList component", () => {
  describe("When it receives the 'Avatar Film' ", () => {
    test("It should show the text Avatar somewhere", async () => {
      renderWithProviders(<FilmsList films={filmsMock} />);

      expect(await screen.findByText("Avatar")).toBeInTheDocument();
    });
  });
});
