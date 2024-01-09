import React from "react";
import ReactDOM from "react-dom/client";
import App, { router } from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>
);
