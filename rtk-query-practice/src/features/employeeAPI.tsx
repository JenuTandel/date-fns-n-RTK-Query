import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../models/Employee.model";

export const employeeAPI = createApi({
  reducerPath: "employeeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    // Get Employee Data
    getEmployees: builder.query<Employee[], void>({
      query: () => "/employeeDetails",
      providesTags: ["Employee"],
    }),

    //Get Employee By Id
    getEmployeeById: builder.query<Employee, string>({
      query: (id) => `/employeeDetails/${id}`,
      providesTags: ["Employee"],
    }),

    //Add Employee Data
    addEmployee: builder.mutation<void, Employee>({
      query: (employee) => ({
        url: "/employeeDetails",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employee"],
    }),

    //Delete Employee Data
    deleteEmployee: builder.mutation<void, number>({
      query: (employeeId) => ({
        url: `/employeeDetails/${employeeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),

    //Update Employee Data
    updateEmployee: builder.mutation<void, Employee>({
      query: ({ id, ...rest }) => ({
        url: `/employeeDetails/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useGetEmployeeByIdQuery,
} = employeeAPI;
