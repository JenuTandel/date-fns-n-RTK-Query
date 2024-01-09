import "./App.css";
import { Header } from "./components/Header";
import { ReadData } from "./components/ReadData";
import { EmployeeForm } from "./components/EmployeeForm";
import { createBrowserRouter } from "react-router-dom";

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
      <Header></Header>
    </>
  );
}

export default App;
