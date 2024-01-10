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
  }),
});

export const { useGetEmployeesQuery } = employeeAPI;
