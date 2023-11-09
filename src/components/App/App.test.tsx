import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'Unicorns List' in it", async () => {
      const expectedHeadingText = "Movies App";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      );

      const headingElement = screen.getByText(expectedHeadingText);

      expect(await headingElement).toBeInTheDocument();
    });
  });
});
