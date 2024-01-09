import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="flex justify-end space-x-4">
        <Link
          to="/"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
        >
          Add Employee
        </Link>
      </div>
    </nav>
  );
};
