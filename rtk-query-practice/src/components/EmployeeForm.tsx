import { useState, useEffect } from "react";
import { Employee } from "../models/Employee.model";
import {
  useAddEmployeeMutation,
  useGetEmployeeByIdQuery,
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
} from "../features/employeeAPI";
import { useNavigate, useParams } from "react-router-dom";

export const EmployeeForm = () => {
  const [employee, setEmployee] = useState<Employee>(Object);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addEmployee] = useAddEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  // const { refetch } = useGetEmployeesQuery();
  const { id } = useParams();
  const { data } = useGetEmployeeByIdQuery(id!);
  const navigate = useNavigate();

  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setEmployee({ ...data });
    } else {
      setEditMode(false);
    }
  }, [id, data]);
  // Input event
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  // Click on submit button
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (editMode) {
      await updateEmployee(employee);
    } else {
      await addEmployee(employee);
    }
    navigate("/");
    setEditMode(false);
    // refetch();
  };

  return (
    <div className="p-4 flex justify-center">
      {/* start: form */}
      <form
        className="bg-white w-2/4 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-3 font-bold text-2xl">Employee Form</h2>
        {/* input field: employee Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="empName"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="empName"
            type="text"
            name="empName"
            placeholder="Employee Name"
            onChange={handleChange}
          />
        </div>
        {/* input field: employee Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="empEmail"
            placeholder="Employee Email ID"
            onChange={handleChange}
          />
        </div>
        {/* input field: employee Designation */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="designation"
          ></label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="designation"
            type="text"
            name="empDesignation"
            placeholder="Employee Designation"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      {/* end: form */}
    </div>
  );
};
