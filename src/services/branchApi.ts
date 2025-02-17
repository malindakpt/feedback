import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { Branch } from "../interfaces/entities/branch";
import { Collection } from "../enums/collections.enum";
import { readAllEntity } from "./crudService";

export const branchApi = createApi({
  reducerPath: "branchApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getBranches: builder.query<Branch[], void>({
      async queryFn() {
        try {
          const branches = await readAllEntity<Branch>(Collection.Branches);
          if (branches) {
            return { data: branches };
          } else {
            return { error: { status: "FETCH_ERROR", error: "Failed to fetch branches." } };
          }
        } catch (error) {
          console.error("Error fetching branches:", error);
          return { error: { status: "FETCH_ERROR", error: "Failed to fetch branches." } };
        }
      },
    }),
  }),
});

export const { useGetBranchesQuery } = branchApi;