import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/_loginSlice";
import dashboardReducer from "../features/dashboard/_dashboardSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    dashboard: dashboardReducer,
  },
});
