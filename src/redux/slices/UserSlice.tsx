import { ILoginResponse } from "@app/api/ApiUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ILoginResponse = {};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (_, action: PayloadAction<ILoginResponse>) => {
      return action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginUser, logoutUser} = UserSlice.actions;

export default UserSlice.reducer;
