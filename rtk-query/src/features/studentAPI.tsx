import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Student } from "../models/student.model";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["Student"],

  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => "/students",
      providesTags: ["Student"],
      transformResponse: (response: Student[], meta, args: any) => {
        // if (args === 2) {
        //   return response.slice(0, 4);
        // }
        // return response.slice(0,2)
        return response;
      },
    }),
    getStudentById: builder.query<Student, string>({
      query: (id) => `/students/${id}`,
      providesTags: ["Student"],
    }),
    addStudent: builder.mutation<void, Student>({
      query: (student) => ({
        url: "/students",
        method: "POST",
        body: student,
      }),
      // invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation<void, string>({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation<void, Student>({
      query: ({ id, ...rest }) => ({
        url: `/students/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentByIdQuery,
  useAddStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentApi;
