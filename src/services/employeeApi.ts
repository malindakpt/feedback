import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db, storage } from "../services/auth/firebase"; // Assuming these are initialized
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Employee } from "../interfaces/entities/employee";
import {Collection} from "../enums/collections.enum"

// Define API for employee-related operations
export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    // Mutation to create an employee
    createEmployee: builder.mutation<Employee, Partial<Employee>>({
      async queryFn(employeeData) {
        try {
          const employeesRef = collection(db, Collection.Employee);
          const docRef = await addDoc(employeesRef, employeeData);
          return { data: { id: docRef.id, ...employeeData } as Employee };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
    // Mutation to upload an image
    uploadImage: builder.mutation<string, { folder: string; file: File }>(
      {
        async queryFn({ folder, file }) {
          try {
            const storageRef = ref(storage, `${folder}/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return { data: downloadURL };
          } catch (error) {
            return { error: error as Error };
          }
        },
      }
    ),
  }),
});

export const { useCreateEmployeeMutation, useUploadImageMutation } =
  employeeApi;