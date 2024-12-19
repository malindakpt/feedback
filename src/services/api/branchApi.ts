import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Branch } from "../../interfaces/branch";
import { db, storage } from "../../services/auth/firebase"; 
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Collection } from "../../enums/collections.enum";

// Define API for branch-related operations
export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    createBranch: builder.mutation<Branch, Partial<Branch>>({
      async queryFn(branchData) {
        try {
          const branchesRef = collection(db, Collection.Branches);
          const docRef = await addDoc(branchesRef, branchData);
          return { data: { id: docRef.id, ...branchData } as Branch };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
    uploadImage: builder.mutation<string, { folder: string; file: File }>({
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
    }),
  }),
});

export const { useCreateBranchMutation, useUploadImageMutation } = branchApi;
