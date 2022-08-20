const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="userName" className="">
            User Name:
            <input
              type="text"
              name="userName"
              placeholder="User name"
              required
              autoComplete="off"
              value="User Name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password" className="">
            Password:
            <input
              type="password"
              name="passwd"
              placeholder="Password"
              required
              autoComplete="off"
              value="Password User"
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
