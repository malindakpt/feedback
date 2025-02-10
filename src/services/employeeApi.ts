import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db, storage } from "../services/auth/firebase"; // Ensure Firebase is initialized
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Employee } from "../interfaces/entities/employee";
import { Collection } from "../enums/collections.enum";

// Define API for employee-related operations
export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createEmployee: builder.mutation<string, Employee>({
      async queryFn(employee) {
        try {
          const docRef = await addDoc(collection(db, Collection.Employee), employee);
          return { data: docRef.id };
        } catch (error) {
          console.error("Error adding employee:", error);
          return { error: "Error adding employee" };
        }
      },
    }),
    
    uploadImage: builder.mutation<string, { file: File; userId: string }>({
      async queryFn({ file, userId }) {
        try {
          const storageRef = ref(storage, `employee-images/${userId}`); // Store with userId as filename
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          return { data: downloadURL };
        } catch (error) {
          console.error("Error uploading image:", error);
          return { error: "Error uploading image" };
        }
      },
    }),
  }),
});

export const { useCreateEmployeeMutation, useUploadImageMutation } = employeeApi;
