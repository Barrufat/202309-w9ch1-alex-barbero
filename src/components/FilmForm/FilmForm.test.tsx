import { screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import FilmForm from "./FilmForm";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a FilmForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it receives a list of films ", () => {
    test("It should show 'Create new Film' in a Button", async () => {
      const expectedButtonText = "Create new Film";

      customRender(<FilmForm submitAction={actionOnClick} />);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });
  });
});
