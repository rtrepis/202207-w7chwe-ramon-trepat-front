import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Given a Login component", () => {
  describe("When  instantiate heading 'Login'", () => {
    test("Then should show this heading", () => {
      const expectHeading = "Login";

      render(<Login />);
      const heading = screen.getByRole("heading", { name: expectHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
