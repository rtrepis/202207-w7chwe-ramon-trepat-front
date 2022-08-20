import { screen } from "@testing-library/react";
import { render } from "../../utility/test-utils";
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

  describe("When instantiate labels 'User Name' and 'Password", () => {
    test("Then should show this labels text", () => {
      const expectInputUserName = "User Name:";
      const expectInputPassword = "User Name:";

      render(<Login />);
      const inputUserName = screen.getByLabelText(expectInputUserName);
      const inputPassword = screen.getByLabelText(expectInputPassword);

      expect(inputUserName).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });
});
