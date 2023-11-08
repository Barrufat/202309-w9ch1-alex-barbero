import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "test";
  const actionOnClick = vi.fn();

  describe("When it receives a text 'Test'", () => {
    test("Then it should show a button with 'Test' inside", async () => {
      render(<Button type="button" title="test" text={"test"} />);

      const button = screen.getByTitle(text);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      render(
        <Button
          type="button"
          title="test"
          actionOnClick={actionOnClick}
          text="test"
        />,
      );

      const button = screen.getByTitle("test");

      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
