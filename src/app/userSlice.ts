import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/Users";

export const usersInitialState: User = {
  id: "",
  token: "",
  userName: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    userLogInAction: (previousUsers, action: PayloadAction<User>) =>
      action.payload,
    userLogOutAction: (previousUsers) => usersInitialState,
  },
});

export const userReducer = usersSlice.reducer;

export const { userLogInAction, userLogOutAction } = usersSlice.actions;
