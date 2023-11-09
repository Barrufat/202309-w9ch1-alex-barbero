import { screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import FormPage from "./FormPage";

describe("Given a Form page", () => {
  describe("When it receives a list of films ", () => {
    test("It should show 'Create new Film' in a Button", async () => {
      const expectedButtonText = "Create new Film";

      customRender(<FormPage />);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });
  });
});
