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
    getEmployees: builder.query<Employee[], string>({
      query: () => "/employeeDetails",
      providesTags: ["Employee"],
      transformResponse: (response: Employee[], meta, args: any) => {
        if (args == "changes") {
          const responseData = response.slice(0, 3);
          return responseData;
        }
        return response;
      },
    }),

    // Add the Employee
    addEmployee: builder.mutation<void, Employee>({
      query: (employee) => ({
        url: "/employeeDetails",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const { useGetEmployeesQuery, useAddEmployeeMutation } = employeeAPI;
