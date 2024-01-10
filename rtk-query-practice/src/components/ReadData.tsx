import { NavLink } from "react-router-dom";
import {
  useDeleteEmployeeMutation,
  useGetEmployeesQuery,
} from "../features/employeeAPI";

export const ReadData = () => {
  const { data: employee, isLoading, isSuccess } = useGetEmployeesQuery();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  return (
    <div className="p-4">
      {isLoading && <p>Data Loading...</p>}
      <div className="grid grid-cols-3 gap-4">
        {isSuccess &&
          employee?.map((emp: any) => (
            <div key={emp?.id} className="border rounded p-3">
              <p>{emp?.empName}</p>
              <p>{emp?.empEmail}</p>
              <p className="mb-2">{emp?.empDesignation}</p>
              <button
                type="button"
                className="rounded-lg px-4 py-1 bg-blue-500 text-white me-3"
              >
                <NavLink to={`edit/${emp?.id}`}>Edit</NavLink>
              </button>
              <button
                type="button"
                className="rounded-lg px-3 py-1 bg-red-600 text-white"
                onClick={() => deleteEmployee(emp.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
