import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/login/_loginSlice";
import dashboardReducer from "../features/dashboard/_dashboardSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    dashboard: dashboardReducer,
  },
});
