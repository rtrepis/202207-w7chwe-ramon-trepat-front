import { ProtoUser, User } from "../models/Users";
import { useDispatch } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchToken } from "../utility/auth";
import { userLogInAction, userLogOutAction } from "../app/userSlice";

export const useUser = () => {
  const url = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();

  const userLogIn = async (userData: ProtoUser) => {
    const response = await fetch(`${url}users/login/`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const {
      user: { token },
    } = await response.json();
    const user = fetchToken(token);

    dispatch<PayloadAction<User>>(userLogInAction(user));
    localStorage.setItem("userToken", user.token);
  };

  const userLogOut = () => {
    dispatch<PayloadAction>(userLogOutAction());

    localStorage.removeItem("token");
  };

  return {
    userLogIn,
    userLogOut,
  };
};
