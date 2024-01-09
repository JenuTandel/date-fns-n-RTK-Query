import { Provider } from "react-redux";
import "./App.css";
import { EmployeeForm } from "./components/EmployeeForm";
import { ReadData } from "./components/ReadData";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Header } from "./components/Header";

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
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
    </Provider>
  );
}

export default App;
