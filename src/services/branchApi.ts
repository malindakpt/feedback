import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Branch } from "../interfaces/entities/branch";
import { Collection } from "../enums/collections.enum";
import { readAllEntity, createEntity, updateEntity, deleteEntity } from "./crudService";

export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBranches: builder.query<Branch[], void>({
      async queryFn() {
        try {
          const branches = await readAllEntity<Branch>(Collection.Branches);
          return { data: branches };
        } catch (error) {
          console.error("Error fetching branches:", error);
          return { error: { status: "FETCH_ERROR", error: "Failed to fetch branches." } };
        }
      },
    }),
    createBranch: builder.mutation<string | undefined, Branch>({
      async queryFn(newBranch) {
        try {
          const branchId = await createEntity<Branch>(Collection.Branches, newBranch);
          return { data: branchId };
        } catch (error) {
          console.error("Error creating branch:", error);
          return { error: { status: "CREATE_ERROR", error: "Failed to create branch." } };
        }
      },
    }),
    updateBranch: builder.mutation<void, { id: string; data: Partial<Branch> }>({
      async queryFn({ id, data }) {
        try {
          await updateEntity<Branch>(Collection.Branches, id, data);
          return { data: undefined };
        } catch (error) {
          console.error("Error updating branch:", error);
          return { error: { status: "UPDATE_ERROR", error: "Failed to update branch." } };
        }
      },
    }),
    deleteBranch: builder.mutation<void, string>({
      async queryFn(id) {
        try {
          await deleteEntity(Collection.Branches, id);
          return { data: undefined };
        } catch (error) {
          console.error("Error deleting branch:", error);
          return { error: { status: "DELETE_ERROR", error: "Failed to delete branch." } };
        }
      },
    }),
  }),
});

export const { useGetBranchesQuery, useCreateBranchMutation, useUpdateBranchMutation, useDeleteBranchMutation } = branchApi;
