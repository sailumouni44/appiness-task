import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthenticated: false,
    message: { status: 200, value: "Login success" },
  },
  reducers: {
    chkAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      if (!action.payload) {
        state.message = {
          status: 500,
          value: "Invalied Email/Password, please try again.",
        };
      }
    },
  },
});

export const { chkAuthenticated } = loginSlice.actions;
export const validateAsync = (params) => (dispatch) => {
  const { email, password } = params;
  const isAuthenticated =
    email === "hruday@gmail.com" && password === "hruday123";
  dispatch(chkAuthenticated(isAuthenticated));
};

export const findIsAuthenticated = (state) => state.login;

export default loginSlice.reducer;
