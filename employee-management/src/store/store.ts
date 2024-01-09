import { configureStore } from "@reduxjs/toolkit";
import { employeeAPI } from "../features/employeeAPI";

export const store = configureStore({
  reducer: {
    [employeeAPI.reducerPath]: employeeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeAPI.middleware),
});
