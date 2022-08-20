import { screen } from "@testing-library/react";
import { render } from "./utility/test-utils";
import App from "./App";

describe("Given a Login component", () => {
  describe("When  instantiate heading 'Social Network'", () => {
    test("Then should show this heading", () => {
      const expectHeading = "Social Network";

      render(<App />);
      const heading = screen.getByRole("heading", { name: expectHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
