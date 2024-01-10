import "./App.css";
import { Header } from "./components/Header";
import { ReadData } from "./components/ReadData";
import { EmployeeForm } from "./components/EmployeeForm";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ReadData />,
      },
      {
        path: "/add",
        element: <EmployeeForm />,
      },
      {
        path: "/edit/:id",
        element: <EmployeeForm />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Outlet></Outlet>
      </Provider>
    </>
  );
}

export default App;
