import { SyntheticEvent, useState } from "react";
import { useUser } from "../../hooks/useUser";

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
    <>
      <h2>Login</h2>
      <form onSubmit={handleUserLogInFormSubmit}>
        <div>
          <label htmlFor="userName" className="">
            User Name:
            <input
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
        <div>
          <label htmlFor="password" className="">
            Password:
            <input
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
    </>
  );
};

export default Login;
