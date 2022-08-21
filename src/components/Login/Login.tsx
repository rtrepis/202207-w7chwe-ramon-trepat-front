import { SyntheticEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";
import LoginStyled from "./LoginStyled";

const Login = () => {
  const { userLogIn } = useUser();

  const formDataInitialState = {
    userName: "",
    password: "",
  };
  const [formLogInData, serFormLoginData] = useState(formDataInitialState);

  const handleChangeInputForm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    serFormLoginData({
      ...formLogInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserLogInFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    userLogIn(formLogInData);
  };

  return (
    <LoginStyled>
      <form onSubmit={handleUserLogInFormSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        <div className="input">
          <label htmlFor="userName" className="input__label">
            User Name{"\n"}
            <input
              className="input__textBox"
              type="text"
              id="userName"
              name="userName"
              placeholder="User name"
              required
              autoComplete="off"
              value={formLogInData.userName}
              onChange={handleChangeInputForm}
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="password" className="input__label">
            Password{"\n"}
            <input
              className="input__textBox"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={formLogInData.password}
              onChange={handleChangeInputForm}
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </LoginStyled>
  );
};

export default Login;
