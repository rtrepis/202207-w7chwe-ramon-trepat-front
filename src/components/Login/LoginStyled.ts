import styled from "styled-components";

const LoginStyled = styled.form`
  min-height: 50vh;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  padding: 5px;

  .login-title {
    margin: 0px;
    border-bottom: 1px white solid;
    padding-bottom: 5px;
    color: white;
    font-weight: 700;
  }

  .login-form {
    padding: 10px;
    border-radius: 20px;
    border: 2px #132dd5 solid;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(19, 45, 213, 1) 100%
    );
  }

  .input {
    padding: 10px;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
    line-height: 2rem;
    text-align: center;
    font-weight: 700;

    &__label {
      font-size: 0.8rem;
    }

    &__textBox {
      border: 1px #132dd5 solid;
      border-radius: 10px;
      padding: 5px;
      text-align: center;
    }
  }
`;

export default LoginStyled;
